export const metadata = {
  title: "What is Prompt? Beginner Guide to Prompt Engineering",
  description: "Learn what prompt is and how to use prompt engineering effectively.",
};

export default function PromptBasicsPage() {
  return (
    <main
      style={{
        display: "flex",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* 主内容 */}
      <div
        style={{
          flex: 3,
          padding: "40px",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <h1>What is Prompt? Beginner Guide to Prompt Engineering</h1>

        <p>
          Prompt is one of the most important concepts in the age of AI. It determines how effectively you can interact with tools like ChatGPT.
        </p>

        <hr />

        <h2>1. What is a Prompt?</h2>
        <p>
          A prompt is the instruction you give to an AI model. It tells the model what you want it to do.
        </p>

        <ul>
          <li>Ask questions</li>
          <li>Give instructions</li>
          <li>Provide context</li>
        </ul>

        <p>
          Example:
        </p>

        <ul>
          <li>❌ Write something</li>
          <li>✅ Write a 4-line poem in the style of Li Bai</li>
        </ul>

        <hr />

        <h2>2. What is Prompt Engineering?</h2>

        <p>
          Prompt engineering is the process of designing better prompts to get better results from AI models.
        </p>

        <ul>
          <li>Better prompts improve quality</li>
          <li>Clear instructions reduce errors</li>
          <li>Good prompts increase productivity</li>
        </ul>

        <hr />

        <h2>3. Core Principles</h2>

        <ul>
          <li>✅ Be clear and specific</li>
          <li>✅ Provide enough context</li>
          <li>✅ Avoid ambiguity</li>
          <li>✅ Keep structure simple</li>
        </ul>

        <hr />

        <h2>4. Important Techniques</h2>

        <h3>✅ Clear Instructions</h3>
        <p>
          Instead of vague prompts, give precise instructions.
        </p>

        <h3>✅ Role Prompting</h3>
        <p>
          Example:
        </p>
        <ul>
          <li>You are a professional teacher</li>
          <li>You are a fitness coach</li>
        </ul>

        <h3>✅ Output Format</h3>
        <p>
          Specify how the answer should be structured.
        </p>

        <h3>✅ Few-shot Learning</h3>
        <p>
          Provide examples to improve results.
        </p>

        <hr />

        <h2>5. Prompt Structure</h2>

        <ul>
          <li>Role</li>
          <li>Instruction</li>
          <li>Context</li>
          <li>Example</li>
          <li>Output format</li>
        </ul>

        <pre
          style={{
            background: "#eee",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
{`You are a professional translator.
Translate the text into Chinese.
Output in JSON format.`}
        </pre>

        <hr />

        <h2>6. Common Mistakes</h2>

        <ul>
          <li>❌ Too vague</li>
          <li>❌ No context</li>
          <li>❌ Over-complicated prompt</li>
        </ul>

        <hr />

        <h2>Conclusion</h2>

        <p>
          Prompt is the key to unlocking AI. Learning how to design effective prompts will greatly improve your productivity and results.
        </p>

        {/* 下一课 */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Next Lesson</h3>

          <Link href="/learn/beginner/what-is-llm">
            <button
              style={{
                marginTop: "10px",
                padding: "10px 16px",
                background: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              What is LLM →
            </button>
          </Link>
        </div>
      </div>

      {/* 侧边栏 */}
      <aside
        style={{
          flex: 1,
          padding: "30px",
          borderLeft: "1px solid #eee",
          background: "#fff",
        }}
      >
        <h3>📚 Course Content</h3>

        <ul style={{ lineHeight: "2", marginTop: "20px" }}>
          <li>
            <Link href="/learn/beginner/what-is-ai" style={{ textDecoration: "none", color: "#2563eb" }}>
              What is AI
            </Link>
          </li>
          <li>
            <Link href="/learn/beginner/what-is-llm" style={{ textDecoration: "none", color: "#2563eb" }}>
              What is LLM
            </Link>
          </li>
          <li style={{ fontWeight: "bold" }}>
            ✅ Prompt Basics
          </li>
        </ul>
      </aside>
    </main>
  );
}