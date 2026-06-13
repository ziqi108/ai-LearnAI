/**
 * Groq API 测试脚本
 *
 * 使用方法：
 * 1. 首先获取 Groq API Key: https://console.groq.com/keys
 * 2. 设置环境变量: export GROQ_API_KEY=gsk_xxxxxx
 * 3. 运行: npx tsx lib/test-groq.ts
 */

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const testGoals = [
  "I want to become a prompt engineer",
  "How to learn AI from scratch",
  "Build an AI chatbot from scratch",
  "Learn RAG and vector databases",
];

async function testGroqAPI() {
  console.log("🔄 Testing Groq API...\n");

  if (!process.env.GROQ_API_KEY) {
    console.error("❌ Error: GROQ_API_KEY environment variable is not set!");
    console.log("\n📝 To set your API key, run:");
    console.log("   export GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxx\n");
    return;
  }

  for (const goal of testGoals) {
    console.log("=".repeat(60));
    console.log(`🎯 Testing Goal: "${goal}"`);
    console.log("=".repeat(60));

    try {
      const systemPrompt = `You are a professional AI learning path planner. Generate a detailed, practical learning path based on the user's goal.

Requirements:
1. Output must be strictly JSON format
2. Include title (path title), introduction (brief intro), stages (array of stages)
3. Each stage contains: id, title (stage name), summary (50-100 words), estimatedHours (estimated hours), recommendedLessons (list of 3-5 specific AI-related course names)
4. Keep 3-5 stages with reasonable time estimates
5. recommendedLessons should be specific course names like "Prompt Engineering Basics", "RAG Implementation" etc.

Please output only JSON, no other text.`;

      const startTime = Date.now();

      const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: goal },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      });

      const responseTime = Date.now() - startTime;
      const content = completion.choices[0]?.message?.content;

      if (!content) {
        console.log("❌ No response content received\n");
        continue;
      }

      // 清理 JSON 输出
      let jsonStr = content.trim();
      const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        jsonStr = jsonMatch[1].trim();
      }

      const result = JSON.parse(jsonStr);

      console.log(`✅ Success! (Response time: ${responseTime}ms)\n`);
      console.log(`📌 Title: ${result.title}`);
      console.log(`📝 Introduction: ${result.introduction}`);
      console.log(`\n📚 Stages (${result.stages?.length || 0}):`);

      result.stages?.forEach((stage: any, index: number) => {
        console.log(`\n  Stage ${index + 1}: ${stage.title}`);
        console.log(`    ⏱️  Estimated time: ${stage.estimatedHours}h`);
        console.log(`    📖 Summary: ${stage.summary}`);
        console.log(`    📖 Recommended lessons:`);
        stage.recommendedLessons?.forEach((lesson: string) => {
          console.log(`      - ${lesson}`);
        });
      });

      console.log("\n");
    } catch (error) {
      console.error(`❌ Error:`, error);
      console.log("\n");
    }
  }

  console.log("✅ All tests completed!");
}

// 运行测试
testGroqAPI().catch(console.error);
