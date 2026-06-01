import Link from "next/link";

export const metadata = {
  title: "What is Artificial Intelligence? Complete Beginner's Guide to AI Fundamentals | LearnAI",
  description: "Discover what artificial intelligence is, how it works, its core concepts, real-world applications, and why AI matters. A comprehensive SEO-optimized guide for beginners.",
  keywords: "artificial intelligence, AI basics, what is AI, machine learning, AI definition, AI applications, AI fundamentals, AI for beginners",
  authors: [{ name: "LearnAI Team" }],
  openGraph: {
    title: "What is Artificial Intelligence? Complete Beginner's Guide",
    description: "Learn AI fundamentals: definition, capabilities, real-world applications, and why it's transforming industries.",
    type: "article",
  },
};

const content = `
  <section style="margin-bottom: 24px;">
    <p style="font-size: 1.05rem; color: #4b5563; line-height: 1.8;">Artificial Intelligence (AI) is not some mysterious "machine thinking," but rather a comprehensive system of technologies that enables machines to perceive, reason, learn, and make decisions through data and rules.</p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">Core Definition of AI</h2>
    <p style="color: #374151; line-height: 1.8;">AI focuses on enabling machines to complete complex tasks without explicit programming. Examples include image recognition, natural language understanding, content recommendation, and robotic control.</p>
    <ul style="color: #374151; line-height: 1.8; padding-left: 20px;">
      <li><strong>Perception</strong> – Recognizing images, speech, and text</li>
      <li><strong>Understanding</strong> – Converting input into actionable information</li>
      <li><strong>Reasoning</strong> – Making logical decisions based on patterns</li>
      <li><strong>Action</strong> – Generating outputs and executing tasks</li>
    </ul>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">Why AI Matters</h2>
    <p style="color: #374151; line-height: 1.8;">In the past, software needed manual coding of every rule. Today, AI systems learn from massive datasets, enabling faster, more accurate solutions across countless scenarios.</p>
    <div style="background: #f3f4f6; border-left: 4px solid #2563eb; padding: 16px 18px; border-radius: 8px; margin-top: 10px; color: #1f2937;">
      <strong>Real-World Examples:</strong>
      <ul style="padding-left: 20px; margin-top: 8px;">
        <li>E-commerce platforms recommend products based on browsing history</li>
        <li>Email systems automatically identify and filter spam</li>
        <li>Navigation apps predict efficient routes in real-time</li>
        <li>Healthcare systems diagnose diseases from medical images</li>
      </ul>
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">AI is Not a Single Technology</h2>
    <p style="color: #374151; line-height: 1.8;">AI encompasses multiple specialized subfields like Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Reinforcement Learning.</p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">How to Think About AI</h2>
    <p style="color: #374151; line-height: 1.8;"><strong>AI doesn't think like humans; it finds patterns in data and applies those patterns to new situations.</strong></p>
  </section>

  <section style="margin-top: 30px; padding: 18px 20px; background: linear-gradient(180deg, #eff6ff, #dbeafe); border-radius: 12px; border: 1px solid #bfdbfe;">
    <h2 style="font-size: 1.2rem; margin-bottom: 10px; color: #1e3a8a;">Key Takeaways</h2>
    <p style="color: #1e3a8a; line-height: 1.8; margin: 0;">AI is a comprehensive system enabling machines to learn, reason, and act. It's pattern recognition at scale. These fundamentals prepare you for exploring LLMs and building AI applications.</p>
  </section>

  <section style="margin-top: 24px;">
    <a href="/learn/beginner/what-is-llm" style="display: inline-block; background: #2563eb; color: #fff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: 700;">Next: What is LLM? →</a>
  </section>
`;
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
    <a href="/learn/beginner/what-is-llm" style="display: inline-block; background: #2563eb; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 8px; font-weight: 700;">Next Lesson: What is LLM →</a>
  </section>
`;

export default function Lesson() {
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
        <Link href="/learn" style={{ color: "#2563eb", textDecoration: "none" }}>Learn</Link>
        {" > "}
        <Link href="/learn/beginner" style={{ color: "#2563eb", textDecoration: "none" }}>Beginner</Link>
        {" > What is AI?"}
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
          ← Back to Beginner Track
        </Link>

        {/* 课程标签 */}
        <div style={{
          borderRadius: "8px",
          padding: "8px 12px",
          background: "#dcfce7",
          color: "#166534",
          display: "inline-block",
          fontSize: "12px",
          fontWeight: "600",
          marginBottom: "20px",
          marginLeft: "0"
        }}>
          Beginner Lesson 01 · 8 min read
        </div>

        {/* 主标题 */}
        <h1 style={{ 
          fontSize: "2.8rem", 
          margin: "24px 0 20px 0", 
          color: "#111827",
          lineHeight: "1.2",
          fontWeight: "800"
        }}>
          What is AI?
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
          从定义、核心能力到实际应用，本课帮助你建立对人工智能的系统认知。
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
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "12px" }}>Next Lesson</p>
          <Link href="/learn/beginner/what-is-llm" style={{
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
            What is LLM? →
          </Link>
        </div>
      </article>
    </main>
  );
}