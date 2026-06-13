import Groq from "groq-sdk";

type Lang = "en" | "zh";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
  dangerouslyAllowBrowser: false,
});

export interface AIStage {
  id: string;
  title: string;
  summary: string;
  estimatedHours: number;
  recommendedLessons: string[];
}

export interface AIResponse {
  title: string;
  introduction: string;
  stages: AIStage[];
}

export async function generateAIPathWithGroq(
  goal: string,
  lang: Lang = "en"
): Promise<AIResponse | null> {
  if (!process.env.GROQ_API_KEY) {
    return null;
  }

  try {
    const systemPrompt = lang === "zh"
      ? `你是一位专业的 AI 学习路径规划师。请根据用户的学习目标，生成一个详细、实用的学习路径。

要求：
1. 输出格式必须是严格的 JSON
2. 包含 title（路径标题）、introduction（简介）、stages（阶段数组）
3. 每个阶段包含：id、title（阶段名称）、summary（阶段概述，50-100字）、estimatedHours（预计小时数）、recommendedLessons（推荐课程名称列表，3-5个）
4. 阶段数量控制在 3-5 个
5. recommendedLessons 应该是具体的、与 AI 学习相关的课程名称

用户目标：${goal}

请直接输出 JSON，不要有任何其他文字。`
      : `You are a professional AI learning path planner. Generate a detailed, practical learning path based on the user's goal.

Requirements:
1. Output must be strictly JSON format
2. Include title (path title), introduction (brief intro), stages (array of stages)
3. Each stage contains: id, title (stage name), summary (50-100 words), estimatedHours (estimated hours), recommendedLessons (list of 3-5 specific course names)
4. Keep 3-5 stages with reasonable time estimates
5. recommendedLessons should be specific course names related to AI learning

User goal: ${goal}

Please output only JSON, no other text.`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: goal }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return null;
    }

    return parseAIResponse(content);
  } catch (error) {
    console.error("Groq API error:", error);
    return null;
  }
}

function parseAIResponse(content: string): AIResponse | null {
  try {
    let jsonStr = content.trim();
    const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }
    return JSON.parse(jsonStr);
  } catch {
    return null;
  }
}

export function hasGroqKey(): boolean {
  const key = process.env.GROQ_API_KEY;
  return !!key && !key.includes("your_") && !key.includes("here");
}
