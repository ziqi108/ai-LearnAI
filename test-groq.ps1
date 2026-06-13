# Groq API 测试脚本 (PowerShell 版本)
#
# ============================
# 第一步：获取 Groq API Key
# ============================
# 访问: https://console.groq.com/keys
# 注册并创建一个新的 API Key (格式: gsk_xxxxxx)
#
# ============================
# 第二步：运行测试
# ============================
# 将下面的 YOUR_GROQ_API_KEY 替换为你的实际 API Key
# 然后在 PowerShell 中运行整个脚本

$apiKey = "YOUR_GROQ_API_KEY"

# 测试函数
function Test-GroqAPI {
    param([string]$goal)

    Write-Host ""
    Write-Host "============================================================" -ForegroundColor Cyan
    Write-Host "Testing Goal: `"$goal`"" -ForegroundColor Yellow
    Write-Host "============================================================" -ForegroundColor Cyan

    $body = @{
        model = "llama-3.1-8b-instant"
        messages = @(
            @{
                role = "system"
                content = "You are a professional AI learning path planner. Generate a detailed, practical learning path based on the users goal. Output must be strictly JSON format with: title, introduction, stages array. Each stage has: id, title, summary (50-100 words), estimatedHours, recommendedLessons (3-5 course names). Keep 3-5 stages. Output only JSON."
            }
            @{
                role = "user"
                content = $goal
            }
        )
        temperature = 0.7
        max_tokens = 2000
    } | ConvertTo-Json

    try {
        $startTime = Get-Date
        $response = Invoke-RestMethod -Uri "https://api.groq.com/openai/v1/chat/completions" `
            -Method Post `
            -Headers @{
                "Authorization" = "Bearer $apiKey"
                "Content-Type" = "application/json"
            } `
            -Body $body

        $endTime = Get-Date
        $duration = ($endTime - $startTime).TotalMilliseconds

        $result = $response.choices[0].message.content | ConvertFrom-Json

        Write-Host "`n✅ Success! (Response time: $duration ms)" -ForegroundColor Green
        Write-Host "`n📌 Title: $($result.title)" -ForegroundColor White
        Write-Host "📝 Introduction: $($result.introduction)" -ForegroundColor Gray

        $stageNum = 1
        foreach ($stage in $result.stages) {
            Write-Host "`n  Stage $stageNum : $($stage.title)" -ForegroundColor Cyan
            Write-Host "    ⏱️  Time: $($stage.estimatedHours)h" -ForegroundColor Yellow
            Write-Host "    📖 Summary: $($stage.summary)" -ForegroundColor Gray
            Write-Host "    📚 Recommended Lessons:" -ForegroundColor White

            foreach ($lesson in $stage.recommendedLessons) {
                Write-Host "      - $lesson" -ForegroundColor Green
            }
            $stageNum++
        }
    }
    catch {
        Write-Host "`n❌ Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# 测试用例
$testGoals = @(
    "I want to become a prompt engineer"
    "How to learn AI from scratch"
    "Build an AI chatbot from scratch"
)

foreach ($goal in $testGoals) {
    Test-GroqAPI -goal $goal
}

Write-Host "`n============================================================" -ForegroundColor Cyan
Write-Host "✅ All tests completed!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Cyan
