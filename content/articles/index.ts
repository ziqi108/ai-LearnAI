import type { Article } from "../../lib/content/types";

/** 在此文件添加/编辑文章，前端 /articles/[slug] 会自动生成页面 */
export const articles: Article[] = [
  {
    slug: "ai-learning",
    title: "How AI Can Help Students Learn Better",
    description: "Learn how AI improves learning.",
    category: "learning",
    publishedAt: "2026-01-15",
    keywords: ["AI learning", "students", "education"],
    content: `<p>Artificial Intelligence is transforming education in many ways. Students can now use AI tools to study more efficiently.</p>
<h2>Benefits of AI Learning</h2>
<ul>
<li>Personalized learning paths</li>
<li>Instant answers to questions</li>
<li>Better understanding through explanations</li>
</ul>
<p>By using AI tools effectively, students can learn faster and retain more information.</p>`,
  },
  {
    slug: "essay-ai",
    title: "Free AI Tools for Writing Essays",
    description: "Best tools for essay writing.",
    category: "writing",
    publishedAt: "2026-01-20",
    keywords: ["AI writing", "essay tools"],
    content: `<p>Writing essays can be challenging, but with the right AI tools, the process becomes much easier.</p>
<h2>Top Free AI Writing Tools</h2>
<ul>
<li><strong>ChatGPT</strong> - Great for brainstorming and outlines</li>
<li><strong>Grammarly</strong> - Improves grammar and style</li>
<li><strong>Hemingway Editor</strong> - Simplifies complex sentences</li>
</ul>`,
  },
  {
    slug: "ai-thinking",
    title: "How AI Is Changing Thinking",
    description: "Explore thinking impact.",
    category: "learning",
    publishedAt: "2026-02-01",
    content: `<p>Artificial Intelligence is not just a tool—it's changing how we approach problems and think about solutions.</p>
<h2>Ways AI Is Changing Our Thinking</h2>
<ul>
<li>We ask better questions</li>
<li>We think more critically about AI outputs</li>
<li>We collaborate differently with technology</li>
</ul>`,
  },
  {
    slug: "chatgpt-homework",
    title: "How to Use ChatGPT for Homework",
    description: "A complete guide for students using ChatGPT for homework.",
    category: "learning",
    publishedAt: "2026-03-01",
    keywords: ["ChatGPT", "homework", "students"],
    content: `<p>ChatGPT has become one of the most powerful AI tools for students. It can help you complete homework faster, understand difficult topics, and improve learning efficiency.</p>
<h2>1. What is ChatGPT?</h2>
<p>ChatGPT is an AI chatbot that can answer questions, explain concepts, and help generate text.</p>
<h2>2. Why ChatGPT is Helpful for Homework</h2>
<ul>
<li>Saves time on research</li>
<li>Explains difficult topics clearly</li>
<li>Helps generate ideas</li>
</ul>
<h2>3. How to Use ChatGPT for Homework (Step-by-Step)</h2>
<p>Ask clear questions, understand don't copy, ask follow-ups, and use it to improve your work.</p>
<h2>Conclusion</h2>
<p>ChatGPT is a powerful tool for students, but its value depends on how you use it.</p>`,
  },
  {
    slug: "prompt-engineering-mastery",
    title: "The Complete Guide to Prompt Engineering: Communicate Better with AI",
    description: "Learn the four core components of a strong prompt, three proven techniques, and the most common mistakes that kill output quality.",
    category: "learning",
    publishedAt: "2026-06-03",
    keywords: ["prompt engineering", "AI prompts", "ChatGPT techniques", "LLM optimization"],
    content: `<p>Prompt engineering is the skill of writing clear, structured instructions for AI models to get the best possible outputs. In 2026, it has become one of the most valuable professional skills — and the good news is that anyone can learn it.</p>

<h2>What is a Prompt?</h2>
<p>A prompt is any text you send to an AI model. It can be a question, an instruction, a description, or a combination of all three. The AI reads your prompt and generates a response based on patterns it learned during training.</p>
<p>The quality of your prompt directly determines the quality of the output. A vague prompt produces a generic response. A precise, well-structured prompt produces exactly what you need.</p>

<h2>Why Prompt Engineering Matters</h2>
<p>Consider the difference between these two prompts:</p>
<ul>
<li><strong>Weak:</strong> "Write about AI."</li>
<li><strong>Strong:</strong> "Write a 300-word introduction to AI for high school students. Use simple language, avoid jargon, and include one relatable analogy."</li>
</ul>
<p>The second prompt gives the model a role, an audience, a format constraint, a style guide, and a specific requirement. The result is dramatically more useful.</p>

<h2>The Four Core Components of a Strong Prompt</h2>

<h3>1. Role</h3>
<p>Tell the AI who it should be. This sets tone, expertise level, and communication style.</p>
<ul>
<li>"You are a senior Python developer reviewing code for security issues."</li>
<li>"You are a patient tutor helping a beginner understand machine learning."</li>
<li>"You are a professional copywriter optimizing for conversion."</li>
</ul>

<h3>2. Task</h3>
<p>State clearly what you want. Use action verbs: explain, analyze, rewrite, compare, summarize, debug, generate, critique.</p>
<ul>
<li><strong>Weak:</strong> "Something about machine learning."</li>
<li><strong>Strong:</strong> "Explain the difference between supervised and unsupervised learning with two real-world examples each."</li>
</ul>

<h3>3. Context</h3>
<p>Give the AI the background it needs. Include relevant constraints, audience, and specifics that affect the output.</p>
<ul>
<li>"My audience is non-technical executives who care about business impact, not technical details."</li>
<li>"The code is a Python 3.11 Flask API that handles user authentication."</li>
</ul>

<h3>4. Format</h3>
<p>Specify the desired output structure — length, sections, tone, and presentation all matter.</p>
<ul>
<li>"Respond in bullet points, maximum 5 items."</li>
<li>"Write three paragraphs: problem, solution, expected outcome."</li>
<li>"Output valid JSON with fields: title, summary, tags."</li>
</ul>

<h2>Three Proven Techniques</h2>

<h3>Few-Shot Prompting</h3>
<p>Show the AI examples of what you want before asking it to do the task. This is the most effective way to control output format and style.</p>
<p>Input: "The movie was fantastic." → Sentiment: Positive<br>
Input: "I fell asleep halfway through." → Sentiment: Negative<br>
Input: "It was fine, nothing special." → Sentiment: [AI completes]</p>
<p>By showing the pattern, you eliminate ambiguity about the expected output format.</p>

<h3>Chain-of-Thought Prompting</h3>
<p>For complex reasoning tasks, ask the AI to think step by step before giving a final answer. This dramatically improves accuracy on math, logic, and multi-step problems.</p>
<p>Simply add: "Think through this step by step before giving your answer." This forces the model to surface its intermediate reasoning, catching errors before they compound.</p>

<h3>Iterative Refinement</h3>
<p>Treat prompting as a conversation. Get a first response, identify what is missing or wrong, then ask for specific improvements.</p>
<ul>
<li>"Make it 50% shorter while keeping the key points."</li>
<li>"Rewrite the third paragraph to be more persuasive."</li>
<li>"Add a concrete example to support the second argument."</li>
</ul>
<p>Expert prompt engineers rarely get perfect output on the first try — they iterate quickly and efficiently.</p>

<h2>Common Mistakes That Kill Output Quality</h2>
<p><strong>Vague success criteria.</strong> "Make it better" is not actionable. Specify the dimension to improve: more concise, more specific, more formal, better structured.</p>
<p><strong>Overloading one prompt.</strong> Asking for ten things at once produces mediocre results across all of them. Break complex requests into focused, sequential prompts.</p>
<p><strong>Assuming the AI has context.</strong> Every conversation starts fresh. Always include relevant background, even if you discussed it before.</p>
<p><strong>Not specifying the audience.</strong> "Explain transformers" gets different responses for a machine learning engineer vs. a high school student. State who the explanation is for.</p>
<p><strong>Accepting the first output.</strong> First drafts are starting points. Real value comes from two or three rounds of targeted refinement.</p>

<h2>A Reusable Prompt Template</h2>
<p>Use this structure as a starting point for any serious task:</p>
<ul>
<li><strong>Role:</strong> You are a [expert type].</li>
<li><strong>Context:</strong> [Relevant background and constraints].</li>
<li><strong>Task:</strong> [Specific action verb + what exactly to do].</li>
<li><strong>Audience:</strong> [Who will read or use this output].</li>
<li><strong>Format:</strong> [Length, structure, tone, style].</li>
<li><strong>Constraints:</strong> Do not [specific things to avoid].</li>
</ul>
<p>You will not always need every component — a simple question needs less scaffolding than a complex creation task. But when output quality matters, this template removes ambiguity.</p>

<h2>Real-World Example: Content Creation</h2>
<p><strong>Weak prompt:</strong> "Write a blog post about remote work."</p>
<p><strong>Strong prompt:</strong> "You are an experienced productivity writer. Write a 400-word blog post for busy professionals on three practical strategies for staying focused while working from home. Use a direct, conversational tone. Structure it as: brief intro (50 words), three H2 sections with one actionable tip each (100 words each), and a one-sentence conclusion. Do not use clichés like 'new normal' or 'unprecedented times'."</p>
<p>The strong prompt specifies role, word count, audience, topic, tone, structure, section lengths, and exclusions. The AI has everything it needs to produce a useful first draft.</p>

<h2>Measuring Prompt Quality</h2>
<p>After getting a response, ask yourself:</p>
<ul>
<li><strong>Consistency:</strong> Would the same prompt produce similar quality across multiple runs?</li>
<li><strong>Completeness:</strong> Did the output address every part of the request?</li>
<li><strong>Accuracy:</strong> Are the facts and logic correct?</li>
<li><strong>Efficiency:</strong> Could a simpler prompt achieve the same result?</li>
</ul>
<p>If you answer "no" to any of these, revise the prompt — not your expectations.</p>

<h2>Prompt Engineering in Different Domains</h2>
<p><strong>Software development:</strong> Include language, framework version, the specific error message, and what you have already tried. Ask for comments explaining the logic alongside the code.</p>
<p><strong>Data analysis:</strong> Describe your dataset structure, the question you are answering, and whether you want raw numbers or interpretation. Specify the output format — table, chart description, or plain text.</p>
<p><strong>Education:</strong> State the student's current level, common misconceptions to address, and whether you want a Socratic dialogue or a direct explanation.</p>
<p><strong>Writing and marketing:</strong> Provide tone of voice guidelines, target audience demographics, key messages, and things to avoid. Include a brand example if you have one.</p>

<h2>Conclusion</h2>
<p>Prompt engineering is a learnable skill that compounds quickly. The professionals who invest in mastering it consistently get better results from AI tools than those who treat every interaction as a one-sentence search query.</p>
<p>Start by applying the four core components — role, task, context, format — to your next AI interaction. Notice the difference in output quality. Then practice iterative refinement, few-shot examples, and chain-of-thought reasoning as your tasks grow more complex.</p>
<p>The gap between a weak prompt and a strong one is not intelligence — it is specificity. The more clearly you communicate what you need, the more reliably AI delivers it.</p>`,
  },
];
