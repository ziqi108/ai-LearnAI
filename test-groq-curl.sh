/**
 * Groq API - cURL 测试命令
 *
 * ============================
 * 第一步：获取 Groq API Key
 * ============================
 * 访问: https://console.groq.com/keys
 * 注册并创建一个新的 API Key
 *
 * ============================
 * 第二步：使用 cURL 测试
 * ============================
 * 将下面的 YOUR_API_KEY 替换为你的实际 API Key
 * 然后在终端运行：
 */

# ================================================================
# 测试 1: 成为 Prompt Engineer
# ================================================================
curl -X POST "https://api.groq.com/openai/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.1-8b-instant",
    "messages": [
      {
        "role": "system",
        "content": "You are a professional AI learning path planner. Generate a detailed, practical learning path based on the users goal. Output must be strictly JSON format with: title, introduction, stages array. Each stage has: id, title, summary (50-100 words), estimatedHours, recommendedLessons (3-5 course names). Keep 3-5 stages. Output only JSON."
      },
      {
        "role": "user",
        "content": "I want to become a prompt engineer"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 2000
  }'

echo ""
echo "============================================================"
echo ""

# ================================================================
# 测试 2: 从零开始学习 AI
# ================================================================
curl -X POST "https://api.groq.com/openai/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.1-8b-instant",
    "messages": [
      {
        "role": "system",
        "content": "You are a professional AI learning path planner. Generate a detailed, practical learning path based on the users goal. Output must be strictly JSON format with: title, introduction, stages array. Each stage has: id, title, summary (50-100 words), estimatedHours, recommendedLessons (3-5 course names). Keep 3-5 stages. Output only JSON."
      },
      {
        "role": "user",
        "content": "How to learn AI from scratch"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 2000
  }'

echo ""
echo "============================================================"
echo ""

# ================================================================
# 测试 3: 构建 AI 聊天机器人
# ================================================================
curl -X POST "https://api.groq.com/openai/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.1-8b-instant",
    "messages": [
      {
        "role": "system",
        "content": "You are a professional AI learning path planner. Generate a detailed, practical learning path based on the users goal. Output must be strictly JSON format with: title, introduction, stages array. Each stage has: id, title, summary (50-100 words), estimatedHours, recommendedLessons (3-5 course names). Keep 3-5 stages. Output only JSON."
      },
      {
        "role": "user",
        "content": "Build an AI chatbot from scratch"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 2000
  }'

echo ""
echo "============================================================"
echo "✅ All tests completed!"
