import type { GeneratedPath, PathStage } from "../content/path-generator";
import { generateAIPathWithGroq, hasGroqKey } from "./groq-service";
import { generateAIPathWithSiliconFlow, hasSiliconFlowKey } from "./siliconflow-service";

type Lang = "en" | "zh";

export interface AIProvider {
  name: string;
  region: "international" | "china" | "both";
}

export const AI_PROVIDERS: AIProvider[] = [
  { name: "Groq", region: "international" },
  { name: "SiliconFlow", region: "china" },
];

function getAIProvider(lang: Lang): { provider: string; generator: Function } | null {
  // 如果只有硅基流动可用，直接使用它
  if (hasSiliconFlowKey() && !hasGroqKey()) {
    return { provider: "SiliconFlow", generator: generateAIPathWithSiliconFlow };
  }
  
  // 中文用户优先使用硅基流动
  if (lang === "zh" && hasSiliconFlowKey()) {
    return { provider: "SiliconFlow", generator: generateAIPathWithSiliconFlow };
  }
  
  // 英文用户优先使用 Groq
  if (lang === "en" && hasGroqKey()) {
    return { provider: "Groq", generator: generateAIPathWithGroq };
  }
  
  // 降级方案 - 如果 Groq 不可用，使用硅基流动
  if (hasSiliconFlowKey()) {
    return { provider: "SiliconFlow", generator: generateAIPathWithSiliconFlow };
  }
  
  if (hasGroqKey()) {
    return { provider: "Groq", generator: generateAIPathWithGroq };
  }
  
  return null;
}

export async function generateSmartPath(
  goal: string,
  lang: Lang = "en"
): Promise<{ path: GeneratedPath | null; provider: string | null }> {
  const aiProvider = getAIProvider(lang);
  
  if (!aiProvider) {
    return { path: null, provider: null };
  }

  try {
    const generator = aiProvider.generator as (goal: string, lang: Lang) => Promise<any>;
    const aiResponse = await generator(goal, lang);
    
    if (!aiResponse) {
      return { path: null, provider: null };
    }

    const stages: PathStage[] = aiResponse.stages.map((stage: any, index: number) => ({
      id: stage.id || `stage-${index + 1}`,
      level: "beginner",
      title: stage.title || `Stage ${index + 1}`,
      summary: stage.summary || "",
      estimatedHours: stage.estimatedHours || 2,
      lessons: stage.recommendedLessons
        ? stage.recommendedLessons.map((lessonTitle: string, i: number) => ({
            slug: `ai-recommended-${index + 1}-${i + 1}`,
            title: lessonTitle,
            level: "beginner",
            href: `/learn/beginner`,
          }))
        : [],
    }));

    const path: GeneratedPath = {
      goal,
      title: aiResponse.title || "Personalized AI Learning Path",
      introduction: aiResponse.introduction || "",
      stages,
      keywords: ["ai-generated", aiProvider.provider.toLowerCase()],
    };

    return { path, provider: aiProvider.provider };
  } catch (error) {
    console.error("AI path generation failed:", error);
    
    // 尝试降级到另一个服务
    if (aiProvider.provider === "Groq" && hasSiliconFlowKey()) {
      try {
        const aiResponse = await generateAIPathWithSiliconFlow(goal, lang);
        if (aiResponse) {
          const stages: PathStage[] = aiResponse.stages.map((stage: any, index: number) => ({
            id: stage.id || `stage-${index + 1}`,
            level: "beginner",
            title: stage.title || `Stage ${index + 1}`,
            summary: stage.summary || "",
            estimatedHours: stage.estimatedHours || 2,
            lessons: stage.recommendedLessons
              ? stage.recommendedLessons.map((lessonTitle: string, i: number) => ({
                  slug: `ai-recommended-${index + 1}-${i + 1}`,
                  title: lessonTitle,
                  level: "beginner",
                  href: `/learn/beginner`,
                }))
              : [],
          }));

          return {
            path: {
              goal,
              title: aiResponse.title || "Personalized AI Learning Path",
              introduction: aiResponse.introduction || "",
              stages,
              keywords: ["ai-generated", "siliconflow"],
            },
            provider: "SiliconFlow",
          };
        }
      } catch {
        // 降级失败
      }
    }
    
    return { path: null, provider: null };
  }
}

export function hasAIKey(): boolean {
  return hasGroqKey() || hasSiliconFlowKey();
}

export function getAIProviderInfo(): { available: boolean; providers: string[] } {
  const providers: string[] = [];
  if (hasGroqKey()) providers.push("Groq");
  if (hasSiliconFlowKey()) providers.push("SiliconFlow");
  
  return {
    available: providers.length > 0,
    providers,
  };
}

export function getPrimaryProvider(lang: Lang = "en"): string | null {
  const info = getAIProviderInfo();
  if (!info.available) return null;
  
  // 根据语言选择主提供商
  if (lang === "zh" && info.providers.includes("SiliconFlow")) {
    return "SiliconFlow";
  }
  
  if (info.providers.includes("Groq")) {
    return "Groq";
  }
  
  return info.providers[0] || null;
}
