import type { Lesson } from "../../../lib/content/types";

export const howChatgptClaudeGeminiWork: Lesson = {
  slug: "how-chatgpt-claude-gemini-work",
  level: "beginner",
  title: "How ChatGPT, Claude, and Gemini Work",
  description:
    "A beginner-friendly 3000+ word guide explaining how modern AI chat models understand prompts, generate answers, use context, and differ from traditional software.",
  keywords: [
    "ChatGPT",
    "Claude",
    "Gemini",
    "large language models",
    "how AI models work",
    "AI beginner guide",
  ],
  heroSubtitle:
    "Understand the core ideas behind modern AI assistants without heavy math or technical jargon.",
  badges: ["Beginner", "Lesson 9", "18 min read"],
  order: 9,
  readMinutes: 18,
  publishedAt: "2026-06-09",
  breadcrumbLabel: "How AI Models Work",
  sections: [
    {
      type: "heading",
      text: "Introduction: What Are These Models?",
    },
    {
      type: "paragraph",
      text: "ChatGPT, Claude, and Gemini are modern AI assistants built on a technology called large language models, often shortened to LLMs. They can answer questions, summarize documents, write code, translate languages, explain ideas, analyze images, and help with many knowledge tasks. To a user, they may feel like intelligent conversation partners. Under the hood, however, they are not thinking in the same way humans think. They are advanced pattern-learning systems trained to predict and generate useful sequences of text and other data.",
    },
    {
      type: "paragraph",
      text: "The most important idea is this: these models learn patterns from huge amounts of data, then use those patterns to generate a response based on your prompt. They do not store a perfect database of facts. They do not browse your mind. They do not automatically know whether every sentence they generate is true. Instead, they calculate what kind of answer is most likely and most helpful given the instructions, context, and training they have received.",
    },
    {
      type: "highlight",
      text: "A large language model is best understood as a prediction engine that has learned language, concepts, styles, reasoning patterns, and task formats from massive training data.",
    },
    {
      type: "heading",
      text: "1. From Text to Tokens",
    },
    {
      type: "paragraph",
      text: "Before a model can process your message, it must convert text into smaller units called tokens. A token can be a word, part of a word, a punctuation mark, or even a space-like pattern. For example, the sentence 'AI is useful' may be broken into tokens that roughly represent 'AI', ' is', and ' useful'. The exact tokenization depends on the model's tokenizer.",
    },
    {
      type: "paragraph",
      text: "Why does this matter? Because models do not directly read text the way humans do. They process numerical representations of tokens. Every token is mapped to an ID, and that ID is transformed into a vector, which is a list of numbers. These numbers allow the model to compare meanings, relationships, and patterns mathematically.",
    },
    {
      type: "card",
      title: "Simple Analogy",
      text: "Imagine translating every word fragment into coordinates on a giant meaning map. Words and phrases with related meanings are placed closer together, so the model can recognize relationships such as teacher/student, question/answer, cause/effect, and problem/solution.",
    },
    {
      type: "heading",
      text: "2. Training: Learning Patterns from Massive Data",
    },
    {
      type: "paragraph",
      text: "The first major phase is training. During training, a model is shown enormous amounts of text, code, and sometimes images, audio, or video depending on the system. The model repeatedly practices a basic task: given previous tokens, predict the next token. This may sound simple, but when repeated across trillions of examples, the model begins to learn grammar, facts, writing styles, reasoning structures, programming syntax, and common relationships between ideas.",
    },
    {
      type: "paragraph",
      text: "For example, if the model often sees the phrase 'The capital of France is Paris', it learns a strong association between France, capital, and Paris. If it sees many examples of step-by-step math solutions, it learns patterns for solving math problems. If it sees code repositories and documentation, it learns how functions, APIs, and programming languages are structured.",
    },
    {
      type: "paragraph",
      text: "Training is not the same as memorizing a library. Some memorization can happen, especially for repeated public text, but the central process is statistical pattern learning. The model adjusts billions or trillions of internal parameters so that its predictions become better over time. These parameters are not human-readable rules. They are numerical weights distributed across the neural network.",
    },
    {
      type: "list",
      items: [
        "The model sees many examples of language and tasks.",
        "It predicts the next token again and again.",
        "Wrong predictions create an error signal.",
        "The model updates internal weights to reduce future errors.",
        "Over time, it learns patterns that support conversation, writing, coding, and reasoning.",
      ],
      ordered: true,
    },
    {
      type: "heading",
      text: "3. The Transformer Architecture",
    },
    {
      type: "paragraph",
      text: "Most modern language models are based on an architecture called the Transformer. The Transformer became famous because it handles language context more effectively than earlier neural network designs. Its key mechanism is called attention. Attention allows the model to decide which parts of the input are most relevant when generating the next token.",
    },
    {
      type: "paragraph",
      text: "Suppose you ask: 'In the sentence, the student gave her teacher the homework because she finished it early, who finished it?' The model must connect 'she' to the correct person. Attention helps the model weigh relationships between words across the sentence. In long prompts, attention helps the model connect instructions, examples, constraints, and user questions.",
    },
    {
      type: "card",
      title: "What Attention Does",
      items: [
        "It compares tokens with other tokens in the context.",
        "It gives higher weight to information that matters for the current prediction.",
        "It helps the model follow instructions and maintain coherence.",
        "It allows the model to use earlier parts of a conversation when producing later answers.",
      ],
    },
    {
      type: "paragraph",
      text: "This does not mean the model truly understands like a person. It means it has a powerful mechanism for modeling relationships. The surprising result is that when the model becomes large enough and is trained on enough diverse data, many useful abilities emerge: summarization, translation, coding help, question answering, planning, explanation, and even some forms of reasoning.",
    },
    {
      type: "heading",
      text: "4. Pretraining vs. Fine-Tuning",
    },
    {
      type: "paragraph",
      text: "A raw pretrained model is not automatically a helpful assistant. It may be good at continuing text, but it may not reliably follow instructions or refuse unsafe requests. After pretraining, companies usually apply additional training stages to make the model more useful, polite, and aligned with human expectations.",
    },
    {
      type: "paragraph",
      text: "Fine-tuning teaches the model how to behave in specific formats. For chat models, this includes learning how to respond to user messages, follow system instructions, answer in a clear tone, ask clarifying questions, and avoid certain types of harmful content. Human feedback is often used to compare different answers and reward the model for responses that are more helpful, honest, and safe.",
    },
    {
      type: "list",
      items: [
        "Pretraining gives the model broad language and knowledge patterns.",
        "Instruction tuning teaches it to follow tasks and commands.",
        "Human feedback improves helpfulness and safety.",
        "Safety training reduces harmful, private, or policy-violating outputs.",
      ],
    },
    {
      type: "heading",
      text: "5. Inference: How the Model Answers You",
    },
    {
      type: "paragraph",
      text: "When you type a prompt into ChatGPT, Claude, or Gemini, the model enters the inference phase. Inference means using the trained model to generate an output. Your message, previous conversation history, system instructions, attached files, and tool results are converted into tokens and placed inside the model's context window. The model then begins generating one token at a time.",
    },
    {
      type: "paragraph",
      text: "At each step, the model calculates probabilities for many possible next tokens. It might decide that the next token should be 'The', 'AI', 'First', or thousands of other options. The system then selects a token based on decoding settings. After that token is added, the model repeats the process to select the next token. This continues until the answer is complete or a limit is reached.",
    },
    {
      type: "highlight",
      text: "AI responses are generated token by token. The model does not write the full answer instantly; it builds the answer sequentially based on probability, context, and instructions.",
    },
    {
      type: "paragraph",
      text: "This token-by-token generation explains why AI sometimes changes direction, repeats phrases, or makes mistakes. It also explains why a clear prompt matters. A prompt gives the model stronger signals about the destination, format, audience, constraints, and quality level of the answer.",
    },
    {
      type: "heading",
      text: "6. Context Window and Memory",
    },
    {
      type: "paragraph",
      text: "The context window is the amount of information the model can consider at once. It includes your current prompt, earlier messages, system instructions, and any inserted documents or tool outputs. If information is outside the context window, the model cannot directly use it in that response. Modern models can have very large context windows, but they are still limited.",
    },
    {
      type: "paragraph",
      text: "It is important to separate context from memory. Context is what the model sees right now. Memory, if enabled by a product, is information stored outside the model and later reinserted into future prompts. The base model itself does not automatically remember everything from every conversation unless the application is designed to store and retrieve that information.",
    },
    {
      type: "card",
      title: "Context vs. Memory",
      items: [
        "Context: information currently included in the prompt or conversation window.",
        "Memory: saved information that an application may retrieve and add to a future prompt.",
        "Training data: patterns learned before deployment, not a live memory of your conversation.",
      ],
    },
    {
      type: "heading",
      text: "7. Why Prompting Changes the Output",
    },
    {
      type: "paragraph",
      text: "Prompting works because the model is highly sensitive to context. If you ask 'Explain AI', the model has many possible ways to respond: technical, simple, long, short, historical, business-focused, or beginner-friendly. If you ask 'Explain AI to a 12-year-old using three examples and no technical jargon', you narrow the possible answer space. The model now has much clearer signals.",
    },
    {
      type: "paragraph",
      text: "A good prompt usually includes role, task, context, constraints, and output format. Role tells the model what perspective to use. Task tells it what to do. Context gives background. Constraints define limits. Format tells it how to structure the result. These elements do not control the model perfectly, but they strongly influence the probability distribution of the generated answer.",
    },
    {
      type: "list",
      items: [
        "Role: You are an expert tutor.",
        "Task: Explain how LLMs generate answers.",
        "Context: The audience is complete beginners.",
        "Constraints: Avoid heavy math and jargon.",
        "Format: Use short sections, examples, and a final summary.",
      ],
    },
    {
      type: "heading",
      text: "8. Why Models Sometimes Hallucinate",
    },
    {
      type: "paragraph",
      text: "A hallucination happens when the model produces information that sounds confident but is inaccurate, unsupported, or invented. This occurs because the model's core objective is to generate plausible text, not to directly verify truth. If the prompt asks about a topic where the model has incomplete knowledge, outdated information, ambiguous context, or conflicting patterns, it may still generate a fluent answer.",
    },
    {
      type: "paragraph",
      text: "Hallucinations do not mean the model is useless. They mean users and developers must design systems carefully. For factual tasks, AI applications often use retrieval augmented generation, or RAG. In RAG, the system searches a trusted knowledge base, inserts relevant documents into the prompt, and asks the model to answer based on those sources. This reduces hallucination because the model has specific evidence in context.",
    },
    {
      type: "card",
      title: "How to Reduce Hallucinations",
      items: [
        "Provide reliable source material in the prompt.",
        "Ask the model to cite sources or quote evidence.",
        "Use RAG for private or fast-changing information.",
        "Tell the model to say 'I do not know' when evidence is missing.",
        "Verify important facts with external tools or human review.",
      ],
    },
    {
      type: "heading",
      text: "9. How ChatGPT, Claude, and Gemini Differ",
    },
    {
      type: "paragraph",
      text: "ChatGPT, Claude, and Gemini share many foundational ideas: tokenization, neural networks, transformer-like architectures, pretraining, fine-tuning, context windows, and inference. The differences come from training data choices, model architecture details, safety philosophy, tool integrations, multimodal capabilities, context length, product design, and optimization priorities.",
    },
    {
      type: "paragraph",
      text: "ChatGPT is known for broad general usefulness, strong tool ecosystems, coding assistance, and a mature product experience. Claude is often praised for careful writing, long-context document analysis, and a safety-focused conversational style. Gemini is deeply connected with Google's ecosystem and emphasizes multimodal understanding, search-related capabilities, and integration across Google products. These strengths can change over time as companies release new versions.",
    },
    {
      type: "highlight",
      text: "Do not think of one model as permanently best. In real AI application development, you choose models based on task quality, speed, cost, context length, tool support, safety requirements, and user experience.",
    },
    {
      type: "heading",
      text: "10. Multimodal Models",
    },
    {
      type: "paragraph",
      text: "Earlier language models mainly handled text. Modern systems increasingly support multimodal input and output, meaning they can process text, images, audio, video, and sometimes files or screen content. A multimodal model may analyze a chart, read text in an image, describe a photo, understand a screenshot, or participate in a voice conversation.",
    },
    {
      type: "paragraph",
      text: "The basic idea is similar: convert different types of input into numerical representations that the model can process. An image can be broken into visual patches, audio can be converted into signal representations, and documents can be parsed into text and layout information. The model then connects these representations with language so it can answer questions about them.",
    },
    {
      type: "heading",
      text: "11. Tools, Function Calling, and Agents",
    },
    {
      type: "paragraph",
      text: "A language model by itself generates text. It cannot actually send an email, query a database, search the web, or run code unless the surrounding application gives it tools. Tool calling allows the model to output a structured request such as 'search this query', 'call this API', or 'retrieve this user record'. The application executes the tool and returns the result to the model, which then uses it to produce the final answer.",
    },
    {
      type: "paragraph",
      text: "This is the foundation of AI agents. An agent is an AI system that can plan steps, call tools, observe results, and continue working toward a goal. For example, a research agent might search the web, summarize sources, compare evidence, and draft a report. A coding agent might inspect files, edit code, run tests, and fix errors. The model provides reasoning and language ability, while tools provide access to the outside world.",
    },
    {
      type: "card",
      title: "Model vs. AI Application",
      items: [
        "Model: generates predictions and responses from context.",
        "Application: manages users, data, tools, prompts, memory, billing, safety, and interface.",
        "Agent system: combines the model with tools, planning, state, and feedback loops.",
      ],
    },
    {
      type: "heading",
      text: "12. Safety and Alignment",
    },
    {
      type: "paragraph",
      text: "Modern AI assistants include safety layers because powerful text generation can be misused. Safety training attempts to reduce harmful instructions, privacy violations, dangerous guidance, manipulation, and other risky outputs. Product systems may also include content filters, monitoring, rate limits, policy checks, and human review.",
    },
    {
      type: "paragraph",
      text: "Alignment means shaping model behavior so it better matches human values and user intentions. Perfect alignment is extremely difficult because users, cultures, tasks, and contexts vary widely. A helpful answer in one context may be unsafe in another. Developers must therefore combine model behavior with product design, clear user controls, secure tool permissions, and careful evaluation.",
    },
    {
      type: "heading",
      text: "13. What This Means for AI Application Developers",
    },
    {
      type: "paragraph",
      text: "If you want to build AI applications, you do not need to train a frontier model from scratch. Most AI application developers use existing models through APIs or open-source deployments. Your job is to design the product workflow around the model: collect user input, build effective prompts, retrieve relevant data, call tools, validate outputs, manage cost, protect user data, and create a smooth interface.",
    },
    {
      type: "paragraph",
      text: "The best AI applications are not just chat boxes. They combine model intelligence with domain-specific context, user experience, reliable data, automation, and feedback. A legal assistant needs trustworthy documents and citations. A learning assistant needs pedagogy and progress tracking. A customer support assistant needs company policies and escalation rules. The model is powerful, but the application design determines whether it becomes genuinely useful.",
    },
    {
      type: "list",
      items: [
        "Use prompts to define behavior and output format.",
        "Use RAG to connect the model to trusted knowledge.",
        "Use tools to let the model take action safely.",
        "Use evaluation to measure quality before shipping.",
        "Use monitoring to detect failures, cost spikes, and user pain points.",
      ],
    },
    {
      type: "heading",
      text: "14. A Simple End-to-End Example",
    },
    {
      type: "paragraph",
      text: "Imagine you build an AI study assistant. A student asks: 'Explain photosynthesis in simple words and give me a quiz.' Your application sends the user's message, a system instruction, and perhaps the student's grade level to the model. The model generates an explanation and quiz questions. If the assistant uses a biology textbook, the app first retrieves relevant textbook sections and adds them to the prompt. If the student answers the quiz, the app sends the answer back to the model for feedback.",
    },
    {
      type: "paragraph",
      text: "In this example, the model provides language generation and explanation ability. The application provides the user interface, student profile, textbook retrieval, quiz workflow, answer storage, and progress tracking. This separation is essential: the model is the engine, but the product is the vehicle.",
    },
    {
      type: "heading",
      text: "15. Limitations You Should Remember",
    },
    {
      type: "paragraph",
      text: "Large language models are powerful, but they have limitations. They can make factual errors, misunderstand ambiguous instructions, reflect bias from training data, struggle with very complex multi-step tasks, or produce outputs that look better than they are. They may also be sensitive to prompt wording. A small change in instruction can sometimes produce a noticeably different answer.",
    },
    {
      type: "paragraph",
      text: "For everyday brainstorming and drafting, these limitations may be acceptable. For medicine, law, finance, education, security, and business-critical decisions, developers must add verification, references, human review, access control, and clear disclaimers. Responsible AI development means understanding both the power and the boundaries of the technology.",
    },
    {
      type: "card",
      title: "Beginner Mental Model",
      text: "Think of ChatGPT, Claude, and Gemini as extremely advanced language engines. They are trained on massive data, guided by prompts, limited by context, improved by tools, and made useful by thoughtful application design.",
    },
    {
      type: "heading",
      text: "Conclusion",
    },
    {
      type: "paragraph",
      text: "ChatGPT, Claude, Gemini, and similar systems work by converting inputs into tokens, processing those tokens through large neural networks, using attention to understand relationships, and generating responses one token at a time. They learn broad patterns during pretraining, become more assistant-like through fine-tuning and human feedback, and become more useful when connected to tools, retrieval systems, and well-designed applications.",
    },
    {
      type: "paragraph",
      text: "For beginners, the key is not to memorize every mathematical detail. The key is to understand the practical model: data creates patterns, prompts provide direction, context provides working memory, tools provide action, and product design turns a model into a useful application. Once you understand this foundation, you can start building real AI products with confidence.",
    },
    {
      type: "summary",
      text: "Modern AI assistants are large language models that learn patterns from data and generate responses from prompts. They are powerful but imperfect, so effective AI applications combine good prompts, trusted data, tool use, safety design, and human judgment.",
    }
  ],
};
