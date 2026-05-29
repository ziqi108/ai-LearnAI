import Link from "next/link";

const content = `
  <section style="margin-bottom: 24px;">
    <p style="font-size: 1.05rem; color: #4b5563; line-height: 1.7;">
      人工智能（AI）不是某一种神秘的“机器思维”，而是让机器通过数据和规则完成感知、判断、学习与决策的技术体系。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">1. AI 的核心定义</h2>
    <p style="color: #374151; line-height: 1.7;">
      AI 关注的是：机器如何在没有被明确逐条写死的情况下，完成复杂任务。比如识别图像、理解语言、推荐内容、控制机器人。
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li><strong>感知</strong>：识别图片、语音、文本</li>
      <li><strong>理解</strong>：把输入数据转换成可处理的信息</li>
      <li><strong>判断</strong>：根据模式做出合理选择</li>
      <li><strong>行动</strong>：输出结果、生成内容、执行任务</li>
    </ul>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">2. 为什么 AI 会变得重要</h2>
    <p style="color: #374151; line-height: 1.7;">
      过去，软件需要人写每一条规则；现在，AI 可以通过大量数据学习规律，从而在很多场景中更快、更准、更省人工。
    </p>
    <div style="background: #f3f4f6; border-left: 4px solid #2563eb; padding: 16px 18px; border-radius: 8px; margin-top: 10px; color: #1f2937; line-height: 1.7;">
      <strong>例子：</strong>电商平台会根据你的浏览历史推荐商品；邮件系统会自动识别垃圾邮件；地图软件会预测你最可能想走的路线。
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">3. AI 不是单一技术</h2>
    <p style="color: #374151; line-height: 1.7;">
      AI 背后包含多个子方向：机器学习、深度学习、自然语言处理、计算机视觉、强化学习等。它们共同组成了今天的智能应用生态。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">4. 你如何理解 AI</h2>
    <p style="color: #374151; line-height: 1.7;">
      最容易记住的思维方式是：AI 不是“像人类一样思考”，而是“通过数据找到规律并应用规律”。
    </p>
    <p style="color: #374151; line-height: 1.7;">
      这也是为什么现在很多产品能做到自动翻译、自动生成摘要、智能客服、智能写作——它们都在利用“从数据中学习”的能力。
    </p>
  </section>

  <section style="margin-bottom: 24px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">5. 学习建议</h2>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li>先理解 AI 的“目标”和“应用场景”</li>
      <li>再学习机器学习和深度学习的关系</li>
      <li>最后进入 LLM、Prompt、Agent 这些更贴近实际产品的方向</li>
    </ul>
  </section>

  <section style="margin-top: 30px; padding: 18px 20px; background: linear-gradient(180deg, #eff6ff, #dbeafe); border-radius: 12px; border: 1px solid #bfdbfe;">
    <h2 style="font-size: 1.2rem; margin-bottom: 10px; color: #1e3a8a;">课程总结</h2>
    <p style="color: #1e3a8a; line-height: 1.7; margin: 0;">
      AI 代表的是让机器具备学习、推理和执行能力的技术体系。理解 AI，能帮助你后续更自然地进入 LLM、生成式 AI、智能应用开发等核心内容。
    </p>
  </section>

  <section style="margin-top: 24px;">
    <a href="/Learn/beginner/what-is-llm" style="display: inline-block; background: #2563eb; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 8px; font-weight: 700;">Next Lesson: What is LLM →</a>
  </section>
`;

export default function Lesson() {
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
        <Link href="/Learn/beginner" style={{
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
          background: "#dcfce7",
          color: "#166534",
          display: "inline-block",
          fontSize: "12px",
          fontWeight: "700",
          marginBottom: "14px"
        }}>
          Beginner Lesson 01
        </div>

        <h1 style={{ fontSize: "2.4rem", margin: "0 0 12px 0", color: "#111827" }}>
          What is AI?
        </h1>

        <p style={{
          color: "#4b5563",
          lineHeight: "1.7",
          marginBottom: "22px",
          fontSize: "1.05rem"
        }}>
          从定义、核心能力到实际应用，本课帮助你建立对人工智能的系统认知。
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