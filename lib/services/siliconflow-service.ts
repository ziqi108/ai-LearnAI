import OpenAI from "openai";

type Lang = "en" | "zh";

const siliconflow = new OpenAI({
  apiKey: process.env.SILICONFLOW_API_KEY,
  baseURL: "https://api.siliconflow.cn/v1",
  dangerouslyAllowBrowser: false,
  timeout: 120000, // 2分钟全局超时
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

export async function generateAIPathWithSiliconFlow(
  goal: string,
  lang: Lang = "en"
): Promise<AIResponse | null> {
  if (!process.env.SILICONFLOW_API_KEY) {
    return null;
  }

  try {
    const systemPrompt = lang === "zh"
      ? `你是AI学习路径规划师。根据用户目标生成学习路径JSON。

输出格式：
{
  "title": "路径标题",
  "introduction": "简短简介",
  "stages": [
    {"id":"s1","title":"阶段1","summary":"概述","estimatedHours":4,"recommendedLessons":["课程1","课程2","课程3"]},
    {"id":"s2","title":"阶段2","summary":"概述","estimatedHours":6,"recommendedLessons":["课程1","课程2","课程3"]},
    {"id":"s3","title":"阶段3","summary":"概述","estimatedHours":8,"recommendedLessons":["课程1","课程2","课程3"]}
  ]
}

用户目标：${goal}

只输出JSON，不要其他内容！`
      : `You are an AI learning path planner. Output ONLY JSON format.

Format:
{
  "title": "Path Title",
  "introduction": "Brief intro",
  "stages": [
    {"id":"s1","title":"Stage 1","summary":"Summary","estimatedHours":4,"recommendedLessons":["Course1","Course2","Course3"]},
    {"id":"s2","title":"Stage 2","summary":"Summary","estimatedHours":6,"recommendedLessons":["Course1","Course2","Course3"]},
    {"id":"s3","title":"Stage 3","summary":"Summary","estimatedHours":8,"recommendedLessons":["Course1","Course2","Course3"]}
  ]
}

User goal: ${goal}

Output ONLY valid JSON, no other text!`;

    console.log("SiliconFlow: Calling API with goal:", goal.substring(0, 50));
    
    const stream = await siliconflow.chat.completions.create({
      model: "Qwen/Qwen2.5-7B-Instruct",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: goal }
      ],
      temperature: 0.7,
      max_tokens: 1500,
      stream: true,
    });

    let content = "";
    for await (const chunk of stream) {
      const delta = chunk.choices[0]?.delta?.content;
      if (delta) {
        content += delta;
      }
    }
    
    console.log("SiliconFlow: Response content:", content ? content.substring(0, 100) : "null");
    
    if (!content) {
      console.log("SiliconFlow: No content returned");
      return null;
    }

    const parsed = parseAIResponse(content);
    console.log("SiliconFlow: Parsed result:", parsed ? "success" : "failed");
    
    // 如果解析成功但没有 stages，创建默认阶段
    if (parsed && (!parsed.stages || parsed.stages.length === 0)) {
      parsed.stages = [
        {
          id: "stage-1",
          title: "Getting Started",
          summary: "Start your AI learning journey with the basics.",
          estimatedHours: 4,
          recommendedLessons: ["Introduction to AI", "What is LLM", "Prompt Engineering Basics"],
        },
        {
          id: "stage-2",
          title: "Advanced Topics",
          summary: "Deepen your understanding with advanced concepts.",
          estimatedHours: 8,
          recommendedLessons: ["Advanced Prompting", "RAG Systems", "Model Fine-tuning"],
        },
      ];
    }
    
    return parsed;
  } catch (error) {
    console.error("SiliconFlow API error:", error);
    return null;
  }
}

function parseAIResponse(content: string): AIResponse | null {
  try {
    let jsonStr = content.trim();
    
    // 移除代码块标记
    const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }
    
    // 修复可能被截断的 JSON
    jsonStr = fixTruncatedJSON(jsonStr);
    
    // 修复常见的 JSON 格式问题
    jsonStr = jsonStr
      .replace(/,\s*}/g, "}")  // 移除末尾多余的逗号
      .replace(/,\s*]/g, "]")  // 移除数组末尾多余的逗号
      .replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, '"$1":');  // 添加缺失的引号
    
    const data = JSON.parse(jsonStr);
    
    // 处理不同的响应格式
    return {
      title: data.title || data.path || "AI Learning Path",
      introduction: data.introduction || data.brief_intro || data.intro || data.summary || "",
      stages: data.stages || data.phases || data.modules || [],
    };
  } catch (error) {
    console.error("SiliconFlow: JSON parse error:", error);
    return null;
  }
}

function fixTruncatedJSON(jsonStr: string): string {
  let fixed = jsonStr;
  
  // 统计括号
  let openBrace = 0;
  let openBracket = 0;
  let inString = false;
  
  for (let i = 0; i < fixed.length; i++) {
    const char = fixed[i];
    
    if (char === '"' && (i === 0 || fixed[i - 1] !== '\\')) {
      inString = !inString;
    }
    
    if (!inString) {
      if (char === '{') openBrace++;
      if (char === '}') openBrace--;
      if (char === '[') openBracket++;
      if (char === ']') openBracket--;
    }
  }
  
  // 修复未闭合的括号
  while (openBrace > 0) {
    fixed += '}';
    openBrace--;
  }
  while (openBracket > 0) {
    fixed += ']';
    openBracket--;
  }
  
  // 修复可能未闭合的字符串
  const lastQuote = fixed.lastIndexOf('"');
  if (lastQuote > 0 && fixed[lastQuote - 1] !== '\\') {
    // 检查最后一个引号后面是否有内容
    const afterLastQuote = fixed.substring(lastQuote + 1).trim();
    if (afterLastQuote.length > 0 && !afterLastQuote.startsWith('}') && !afterLastQuote.startsWith(']') && !afterLastQuote.startsWith(',')) {
      // 可能字符串没有正确闭合
      fixed = fixed.substring(0, lastQuote + 1) + '"' + afterLastQuote;
    }
  }
  
  return fixed;
}

export function hasSiliconFlowKey(): boolean {
  const key = process.env.SILICONFLOW_API_KEY;
  return !!key && !key.includes("your_") && !key.includes("here");
}
