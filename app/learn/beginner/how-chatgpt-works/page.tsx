import Link from "next/link";

const content = `
  <section style="margin-bottom: 24px;">
    <p style="font-size: 1.05rem; color: #4b5563; line-height: 1.7;">
      ChatGPT 不是“想出来”的，而是通过预训练、推理和提示词工程，把语言模型的能力转化成可用答案。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">1. 训练阶段：学语言模式</h2>
    <p style="color: #374151; line-height: 1.7;">
      模型先在大量文本上学习语言规律，形成“下一个词可能是什么”的经验。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">2. 推理阶段：根据提示生成回答</h2>
    <p style="color: #374151; line-height: 1.7;">
      当你输入问题时，模型会根据上下文和训练知识生成最可能的回答。Prompt 的写法会直接影响结果质量。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">3. 为什么 Prompt 很重要</h2>
    <p style="color: #374151; line-height: 1.7;">
      好的 Prompt 能引导模型更准确、结构化、专业地输出内容。它不是魔法，而是“控制输入方式”。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">4. 课程收束</h2>
    <p style="color: #374151; line-height: 1.7;">
      现在你已经理解 AI、LLM、以及 ChatGPT 的工作方式。下一步可以进入 Prompt Engineering 和真正的应用构建。
    </p>
  </section>

  <section style="margin-top: 30px; padding: 18px 20px; background: linear-gradient(180deg, #eff6ff, #dbeafe); border-radius: 12px; border: 1px solid #bfdbfe;">
    <h2 style="font-size: 1.2rem; margin-bottom: 10px; color: #1e3a8a;">课程总结</h2>
    <p style="color: #1e3a8a; line-height: 1.7; margin: 0;">
      ChatGPT 的核心是通过大语言模型生成文本，Prompt 决定了模型的输出方向和质量。
    </p>
  </section>
`;

export default function HowChatgptWorksLessonPage() {
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
          background: "#dbeafe",
          color: "#1d4ed8",
          display: "inline-block",
          fontSize: "12px",
          fontWeight: "700",
          marginBottom: "14px"
        }}>
          Beginner Lesson 03
        </div>

        <h1 style={{ fontSize: "2.4rem", margin: "0 0 12px 0", color: "#111827" }}>
          How ChatGPT Works
        </h1>

        <p style={{
          color: "#4b5563",
          lineHeight: "1.7",
          marginBottom: "22px",
          fontSize: "1.05rem"
        }}>
          这节课把 ChatGPT 的工作原理拆解成训练、推理和 Prompt 三个核心环节。
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
