import Link from "next/link";

export const metadata = {
  title: "提示工程基础 | 初学者提示词完全指南",
  description: "学习什么是提示词、如何使用提示工程技巧，以及如何为AI模型设计高效的提示词。掌握AI时代最重要的技能。",
  keywords: "提示词, 提示工程, ChatGPT提示, AI提示, prompt engineering",
  openGraph: {
    title: "提示工程基础 - 初学者完全指南",
    description: "掌握提示工程，学会如何设计高效的提示词来获得更好的AI输出。",
    type: "article",
  },
};

const content = `
  <section style="margin-bottom: 24px;">
    <p style="font-size: 1.05rem; color: #4b5563; line-height: 1.7;">
      提示词（Prompt）是AI时代最重要的概念之一。它决定了你与ChatGPT、Claude等AI工具互动的效率和成效。学会如何写出好的提示词，就像学会了开启AI力量的钥匙。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">1. 什么是提示词？</h2>
    <p style="color: #374151; line-height: 1.7;">
      提示词是你给AI模型的指令。它告诉模型你想要它做什么。提示词可以是：
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li>提问</li>
      <li>给出指令</li>
      <li>提供背景信息</li>
    </ul>
    <p style="color: #374151; line-height: 1.7; margin-top: 14px;">
      <strong>对比示例：</strong>
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li>❌ <strong>差的提示：</strong>写一些东西</li>
      <li>✅ <strong>好的提示：</strong>用李白的风格写一首4行的诗</li>
    </ul>
    <div style="background: #f3f4f6; border-left: 4px solid #2563eb; padding: 16px 18px; border-radius: 8px; margin-top: 14px; color: #1f2937; line-height: 1.7;">
      <strong>关键点：</strong>具体和清晰的提示会让AI模型产生更高质量的输出。
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">2. 什么是提示工程？</h2>
    <p style="color: #374151; line-height: 1.7;">
      提示工程是设计更好提示词的过程和技能。通过优化你的提示方式，可以显著提升AI的输出质量。
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li>更好的提示 = 更好的结果质量</li>
      <li>清晰的指令 = 减少错误</li>
      <li>优质的提示 = 更高的工作效率</li>
    </ul>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">3. 提示工程的核心原则</h2>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li>✅ <strong>清晰具体</strong> - 不含糊其辞</li>
      <li>✅ <strong>提供足够背景</strong> - 让模型充分理解</li>
      <li>✅ <strong>避免歧义</strong> - 用准确的词汇</li>
      <li>✅ <strong>保持结构简洁</strong> - 易于理解</li>
    </ul>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">4. 核心提示工程技巧</h2>
    
    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">✅ 清晰的指令</h3>
      <p style="color: #374151; line-height: 1.7; margin: 0;">
        不要模糊其辞，要给出具体明确的指令。对比：
      </p>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 8px 0 0 0;">
        <li>❌ 简述一下AI</li>
        <li>✅ 用100字以内解释人工智能对初学者的定义</li>
      </ul>
    </div>

    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">✅ 角色提示</h3>
      <p style="color: #374151; line-height: 1.7; margin: 0;">
        定义一个角色让模型进入状态。示例：
      </p>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 8px 0 0 0;">
        <li>你是一位专业的英文教师</li>
        <li>你是一位经验丰富的健身教练</li>
        <li>你是一位技术文档编写专家</li>
      </ul>
    </div>

    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">✅ 输出格式规定</h3>
      <p style="color: #374151; line-height: 1.7; margin: 0;">
        明确指定你想要的输出格式，这样可以得到结构化的结果。例如：
      </p>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 8px 0 0 0;">
        <li>请以JSON格式输出</li>
        <li>请用Markdown表格格式</li>
        <li>请列出5个要点，每个不超过20字</li>
      </ul>
    </div>

    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">✅ 少样本学习</h3>
      <p style="color: #374151; line-height: 1.7; margin: 0;">
        通过提供示例来教会模型。这通常比文字说明更有效。
      </p>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 8px 0 0 0;">
        <li>输入输出对比示例</li>
        <li>风格参考示例</li>
        <li>格式示例</li>
      </ul>
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">5. 完整的提示词结构</h2>
    <p style="color: #374151; line-height: 1.7;">
      一个高效的提示词通常包含以下部分：
    </p>
    <ol style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li><strong>角色</strong> - 定义AI的身份</li>
      <li><strong>任务</strong> - 说明要完成什么</li>
      <li><strong>背景</strong> - 提供必要的上下文</li>
      <li><strong>示例</strong> - 展示期望的输出</li>
      <li><strong>格式</strong> - 指定输出的结构</li>
    </ol>
    
    <div style="background: #f3f4f6; padding: 16px 18px; border-radius: 8px; margin-top: 14px; color: #1f2937; line-height: 1.7;">
      <strong>模板示例：</strong>
      <pre style="background: #fff; padding: 12px; border-radius: 6px; overflow-x: auto; margin-top: 8px;">你是一位专业的文案翻译官。
任务：将下面的中文文案翻译成英文。
要求：
- 保持原意
- 使用专业商务用语
- 请以JSON格式输出，格式为：{"原文":"...", "译文":"..."}

原文：这是一个示例</pre>
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">6. 常见错误</h2>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li>❌ <strong>过于模糊</strong> - 模型难以理解你的需求</li>
      <li>❌ <strong>缺乏背景</strong> - 模型无法理解上下文</li>
      <li>❌ <strong>过度复杂</strong> - 冗长的提示反而会降低效果</li>
      <li>❌ <strong>混乱的逻辑</strong> - 指令前后不一致</li>
    </ul>
  </section>

  <section style="margin-top: 30px; padding: 18px 20px; background: linear-gradient(180deg, #eff6ff, #dbeafe); border-radius: 12px; border: 1px solid #bfdbfe;">
    <h2 style="font-size: 1.2rem; margin-bottom: 10px; color: #1e3a8a;">课程总结</h2>
    <p style="color: #1e3a8a; line-height: 1.7; margin: 0;">
      提示词是解锁AI力量的钥匙。学会设计高效的提示词，你就掌握了在AI时代提升工作效率的核心技能。从清晰的指令、明确的角色定位，到结构化的输出格式，每一个细节都会影响最终的结果质量。
    </p>
  </section>

  <section style="margin-top: 24px;">
    <a href="/learn/beginner/how-chatgpt-works" style="display: inline-block; background: #2563eb; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 8px; font-weight: 700;">下一课：深入理解 ChatGPT 工作原理 →</a>
  </section>
`;

export default function PromptBasicsPage() {
  return (
    <main style={{
      padding: "20px",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>
      {/* 面包屑导航 */}
      <nav style={{
        maxWidth: "900px",
        margin: "0 auto 20px",
        fontSize: "14px",
        color: "#666"
      }} aria-label="breadcrumb">
        <Link href="/learn" style={{ color: "#2563eb", textDecoration: "none" }}>学习</Link>
        {" > "}
        <Link href="/learn/beginner" style={{ color: "#2563eb", textDecoration: "none" }}>初级</Link>
        {" > 提示工程基础"}
      </nav>

      <article style={{
        maxWidth: "900px",
        margin: "auto",
        background: "#fff",
        padding: "40px 50px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>
        {/* 返回链接 */}
        <Link href="/learn/beginner" style={{
          display: "inline-block",
          marginBottom: "20px",
          color: "#2563eb",
          textDecoration: "none",
          fontWeight: "500",
          fontSize: "14px"
        }}>
          ← 返回初级课程
        </Link>

        {/* 课程标签 */}
        <div style={{
          borderRadius: "8px",
          padding: "8px 12px",
          background: "#dbeafe",
          color: "#1d4ed8",
          display: "inline-block",
          fontSize: "12px",
          fontWeight: "600",
          marginBottom: "20px",
          marginLeft: "0"
        }}>
          初级课程 第5课 · 10 分钟
        </div>

        {/* 主标题 */}
        <h1 style={{ 
          fontSize: "2.8rem", 
          margin: "24px 0 20px 0", 
          color: "#111827",
          lineHeight: "1.2",
          fontWeight: "800"
        }}>
          提示工程基础
        </h1>

        {/* 子标题/导言 */}
        <p style={{
          color: "#4b5563",
          lineHeight: "1.8",
          marginBottom: "32px",
          fontSize: "1.1rem",
          borderLeft: "4px solid #2563eb",
          paddingLeft: "20px"
        }}>
          学习如何编写高效的提示词，掌握与AI互动的核心技能。
        </p>

        {/* 文章内容 */}
        <div
          style={{
            color: "#1f2937",
            lineHeight: "1.8",
            fontSize: "16px"
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* 底部导航 */}
        <div style={{
          marginTop: "48px",
          paddingTop: "32px",
          borderTop: "1px solid #e5e7eb"
        }}>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "12px" }}>下一课</p>
          <Link href="/learn/beginner/how-chatgpt-works" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            transition: "background 0.2s"
          }}>
            ChatGPT 工作原理 →
          </Link>
        </div>
      </article>
    </main>
  );
}