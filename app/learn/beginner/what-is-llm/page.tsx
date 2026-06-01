import Link from "next/link";

const content = `
  <section style="margin-bottom: 24px;">
    <p style="font-size: 1.05rem; color: #4b5563; line-height: 1.7;">
      LLM（Large Language Model）是大语言模型，它擅长理解和生成自然语言。你可以把它看成一个“语言能力非常强”的智能系统。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">1. LLM 是什么</h2>
    <p style="color: #374151; line-height: 1.7;">
      它通过大量文本数据学习语言规律，能够完成写作、总结、翻译、问答、改写等任务。
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li>理解用户问题</li>
      <li>生成符合上下文的文本</li>
      <li>依据提示词调整风格与格式</li>
    </ul>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">2. 为什么它那么强</h2>
    <p style="color: #374151; line-height: 1.7;">
      之所以强，是因为模型在海量文本上学习到了词汇、语法、逻辑、表达方式和上下文关系。
    </p>
    <div style="background: #f3f4f6; border-left: 4px solid #2563eb; padding: 16px 18px; border-radius: 8px; margin-top: 10px; color: #1f2937; line-height: 1.7;">
      <strong>直观理解：</strong>如果把语言比作工具，LLM 就是在海量材料里练成“通用语言高手”的模型。
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">3. 真实应用</h2>
    <p style="color: #374151; line-height: 1.7;">
      代码生成、内容写作、客服问答、翻译工具、学习助手、数据总结，这些都是 LLM 的典型应用。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">4. 学习下一步</h2>
    <p style="color: #374151; line-height: 1.7;">
      了解 AI 與 LLM 的关系后，下一步会进入“如何让模型更好地回答问题”的思维方式，也就是 Prompt 的核心。
    </p>
  </section>

  <section style="margin-top: 30px; padding: 18px 20px; background: linear-gradient(180deg, #eff6ff, #dbeafe); border-radius: 12px; border: 1px solid #bfdbfe;">
    <h2 style="font-size: 1.2rem; margin-bottom: 10px; color: #1e3a8a;">课程总结</h2>
    <p style="color: #1e3a8a; line-height: 1.7; margin: 0;">
      LLM 是大语言模型，擅长“理解和生成语言”，是当下 AI 产品中最常见的核心能力之一。
    </p>
  </section>

  <section style="margin-top: 24px;">
    <a href="/learn/beginner/how-chatgpt-works" style="display: inline-block; background: #2563eb; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 8px; font-weight: 700;">Next Lesson: How ChatGPT Works →</a>
  </section>
`;

export default function WhatIsLlmLessonPage() {
  return (
    <main style={{
      padding: "40px 20px",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "auto",
        background: "#fff",
        padding: "28px 30px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>
        <Link href="/learn/beginner" style={{
          display: "inline-block",
          marginBottom: "20px",
          color: "#2563eb",
          textDecoration: "none",
          fontWeight: "700"
        }}>
          ← Back to Beginner Track
        </Link>

        <div style={{
          borderRadius: "12px",
          padding: "10px 12px",
          background: "#fef3c7",
          color: "#92400e",
          display: "inline-block",
          fontSize: "12px",
          fontWeight: "700",
          marginBottom: "14px"
        }}>
          Beginner Lesson 02
        </div>

        <h1 style={{ fontSize: "2.4rem", margin: "0 0 12px 0", color: "#111827" }}>
          What is LLM?
        </h1>

        <p style={{
          color: "#4b5563",
          lineHeight: "1.7",
          marginBottom: "22px",
          fontSize: "1.05rem"
        }}>
          这一节带你理解大语言模型为什么能写字、解释概念、回答问题。
        </p>

        <div
          style={{
            color: "#1f2937",
            lineHeight: "1.7"
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  );
}
