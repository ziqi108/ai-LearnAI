import Link from "next/link";

const content = `
  <section style="margin-bottom: 24px;">
    <p style="font-size: 1.05rem; color: #4b5563; line-height: 1.7;">
      大模型（Large Language Model, LLM）是当今AI领域最重要的技术方向。从ChatGPT的爆火到国产大模型的崛起，理解大模型的核心原理、发展历程和应用前景，已经成为每个AI学习者的必修课。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">1. 什么是大模型？</h2>
    <p style="color: #374151; line-height: 1.7;">
      <strong>大模型</strong>（Large Language Model, LLM）是一种基于机器学习和自然语言处理技术的模型，它通过对大量的文本数据进行训练，来学习服务人类语言理解和生成的能力。
    </p>
    <p style="color: #374151; line-height: 1.7; margin-top: 10px;">
      简单理解：大模型就是通过学习互联网上的海量文本，掌握语言规律和知识，从而能够进行自然、流畅的对话和内容生成。
    </p>
    <div style="background: #f3f4f6; border-left: 4px solid #2563eb; padding: 16px 18px; border-radius: 8px; margin-top: 10px; color: #1f2937; line-height: 1.7;">
      <strong>关键词：</strong>基座大模型（基础能力）vs 对话产品（应用场景）。GPT、LLaMA、Qwen等是基座大模型；ChatGPT、通义千问、智谱清言等是基于大模型开发的应用产品。
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">2. AI 1.0 vs AI 2.0：一个重要分界</h2>
    <p style="color: #374151; line-height: 1.7;">
      理解大模型的前提，是理解AI技术的发展脉络。
    </p>
    
    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">AI 1.0 时代（基于规则和早期机器学习）</h3>
      <p style="color: #374151; line-height: 1.7; margin: 0;">
        特点：人工编写规则，系统基于这些规则做判断
      </p>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 8px 0 0 0;">
        <li>图像识别：早期的面部识别技术（CNN）</li>
        <li>语音助手：苹果Siri（基于关键词匹配）</li>
        <li>推荐系统：Amazon的个性化推荐</li>
      </ul>
    </div>

    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">AI 2.0 时代（深度学习和大模型）</h3>
      <p style="color: #374151; line-height: 1.7; margin: 0;">
        特点：模型通过大数据和深度学习自动学习规律，而非人工编写规则
      </p>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 8px 0 0 0;">
        <li><strong>ChatGPT</strong>：生成式预训练模型，能进行自然对话</li>
        <li><strong>自动驾驶</strong>：特斯拉FSD，基于深度学习的端到端决策</li>
        <li><strong>大模型应用</strong>：从文本生成、代码编写到图像生成</li>
      </ul>
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">3. 大模型 vs 通用人工智能（AGI）</h2>
    <p style="color: #374151; line-height: 1.7;">
      现在很多人把大模型和AGI混淆了。我们需要明确两者的区别和联系。
    </p>
    
    <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px 18px; border-radius: 8px; margin-top: 10px; color: #92400e; line-height: 1.7;">
      <strong>AGI（通用人工智能）：</strong>一种理想的智能，能够理解、学习和应用知识，在任何人类智能能够执行的广泛任务上表现得和人类一样好，甚至更好。
    </div>

    <p style="color: #374151; line-height: 1.7; margin-top: 14px;">
      <strong>区别：</strong>
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li>大模型是当前已实现的技术</li>
      <li>AGI是一个未来的目标（尚未实现）</li>
      <li>大模型虽然很强，但在某些领域（如数学计算）仍有明显不足</li>
    </ul>

    <p style="color: #374151; line-height: 1.7; margin-top: 14px;">
      <strong>联系：</strong>大模型是通向AGI的一种可能途径。通过改进算法、提升泛化能力、增加模型规模和多模态能力，大模型有望逐步接近AGI的特性。
    </p>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">4. GPT 模型的发展历程</h2>
    <p style="color: #374151; line-height: 1.7;">
      要理解大模型的能力进展，最好的方式是看GPT系列的发展。
    </p>

    <div style="background: #f9fafb; padding: 14px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div><strong>GPT-1 (2018)</strong></div>
        <div>1.17亿参数，首次展示预训练+微调范式</div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div><strong>GPT-2 (2019)</strong></div>
        <div>15亿参数，优秀的文本生成能力，OpenAI因安全担忧一度不完全开放</div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div><strong>GPT-3 (2020)</strong></div>
        <div>1750亿参数，引入"少样本学习"，极少示例指导下快速适应新任务</div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div><strong>GPT-3.5 & InstructGPT (2022)</strong></div>
        <div>引入RLHF（人类反馈强化学习），优化指令跟随能力，减少有害内容</div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div><strong>GPT-4 (2023)</strong></div>
        <div>进一步增强复杂性，更强的逻辑推理和上下文连贯性</div>
      </div>
    </div>

    <div style="background: #dbeafe; border-left: 4px solid #0284c7; padding: 14px 16px; border-radius: 8px; margin-top: 12px; color: #0c4a6e; line-height: 1.7;">
      <strong>进步规律：</strong>参数越来越多 → 数据越来越大 → 训练方法越来越精 → 能力越来越强。
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">5. 国产大模型的崛起</h2>
    <p style="color: #374151; line-height: 1.7;">
      中国在大模型领域的进展非常快。以下是主要的国产大模型：
    </p>

    <div style="background: #f9fafb; padding: 14px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb; overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; color: #374151; font-size: 0.95rem;">
        <thead>
          <tr style="border-bottom: 2px solid #e5e7eb;">
            <th style="text-align: left; padding: 8px; font-weight: 700;">模型</th>
            <th style="text-align: left; padding: 8px; font-weight: 700;">公司</th>
            <th style="text-align: left; padding: 8px; font-weight: 700;">主要特点</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">通义千问 (Qwen)</td>
            <td style="padding: 8px;">阿里巴巴</td>
            <td style="padding: 8px;">开源大模型，中文理解强，推理能力强</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">智谱清言</td>
            <td style="padding: 8px;">智谱科技</td>
            <td style="padding: 8px;">聚焦中文NLP，跨行业能力强</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">文心一言</td>
            <td style="padding: 8px;">百度</td>
            <td style="padding: 8px;">多轮对话、情感理解，知识增强</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">DeepSeek</td>
            <td style="padding: 8px;">深度求索</td>
            <td style="padding: 8px;">视觉与语言多模态，图像生成与推理</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 8px;">讯飞星火</td>
            <td style="padding: 8px;">科大讯飞</td>
            <td style="padding: 8px;">认知智能，多NLP和机器学习技术融合</td>
          </tr>
          <tr>
            <td style="padding: 8px;">混元大模型</td>
            <td style="padding: 8px;">腾讯</td>
            <td style="padding: 8px;">强大的中文创作能力，复杂语境推理</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">6. 大模型的核心工作原理</h2>
    <p style="color: #374151; line-height: 1.7;">
      大模型之所以能理解和生成文本，背后有三个核心技术：
    </p>

    <div style="background: #f9fafb; padding: 14px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">1. Transformer 架构</h3>
      <p style="color: #374151; line-height: 1.7; margin: 0;">
        Transformer 是GPT的核心架构。它引入了<strong>注意力机制（Attention）</strong>，让模型能够理解文本中不同词汇之间的关系，从而更好地捕捉语义。
      </p>
    </div>

    <div style="background: #f9fafb; padding: 14px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">2. Token 的概念</h3>
      <p style="color: #374151; line-height: 1.7; margin: 0;">
        Token 是大模型处理的最小单位（类似于"词"）。比如，"ChatGPT" 可能被分成 ["Chat", "GPT"] 两个tokens。
      </p>
      <p style="color: #374151; line-height: 1.7; margin-top: 8px; margin-bottom: 0;">
        <strong>重要</strong>：大模型的输入输出都受到token限制。比如GPT-3.5的上下文窗口是4K tokens，这意味着它最多能记住约3000个中文字符。
      </p>
    </div>

    <div style="background: #f9fafb; padding: 14px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">3. 三大训练阶段</h3>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 0;">
        <li><strong>预训练（Pre-training）</strong>：在海量文本上无监督学习，学习语言规律</li>
        <li><strong>监督微调（SFT）</strong>：用高质量的对话数据微调，让模型学会按人类期望回答</li>
        <li><strong>RLHF</strong>：基于人类反馈的强化学习，进一步优化输出质量和安全性</li>
      </ul>
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">7. 大模型为什么有时会"出错"？</h2>
    <p style="color: #374151; line-height: 1.7;">
      大模型虽然强大，但也有明显的局限：
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li><strong>数学计算</strong>：连小学数学题都能算错，因为它在处理严格逻辑而非在学习数学规则</li>
      <li><strong>知识截断</strong>：训练数据有时间截点，无法获知最新信息</li>
      <li><strong>幻觉问题</strong>：模型可能生成看起来合理但实际不存在的事实</li>
      <li><strong>推理能力有限</strong>：需要多步推理的复杂问题容易出错</li>
    </ul>
    <div style="background: #fecaca; border-left: 4px solid #dc2626; padding: 14px 16px; border-radius: 8px; margin-top: 12px; color: #7f1d1d; line-height: 1.7;">
      <strong>理解：</strong>大模型本质是"统计规律学习"，而不是"真正的理解"或"逻辑推理"。
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">8. 大模型赋能各行业</h2>
    <p style="color: #374151; line-height: 1.7;">
      大模型不仅在对话领域有用，它正在改造多个传统行业：
    </p>

    <div style="background: #f9fafb; padding: 14px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">医疗行业</h3>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 0;">
        <li>智能诊断辅助：分析症状和病历，提供初步诊断建议</li>
        <li>个性化治疗方案：基于患者基因数据和病史</li>
        <li>药物研发加速：快速筛选药物候选分子</li>
        <li>医学文献分析：自动生成研究摘要，追踪学术进展</li>
      </ul>
    </div>

    <div style="background: #f9fafb; padding: 14px; border-radius: 8px; margin-top: 12px; border: 1px solid #e5e7eb;">
      <h3 style="color: #111827; margin-top: 0; margin-bottom: 8px; font-size: 1.1rem;">政务和法律行业</h3>
      <ul style="color: #374151; line-height: 1.7; padding-left: 20px; margin: 0;">
        <li>智能政务服务：AI客服、政策咨询</li>
        <li>政策分析制定：基于历史数据和社会反馈</li>
        <li>法律文书生成：自动起草合同、审查法律风险</li>
        <li>司法裁决辅助：分析案例，保证法律适用一致性</li>
      </ul>
    </div>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">9. 大模型的发展趋势</h2>
    <p style="color: #374151; line-height: 1.7;">
      未来大模型的发展方向：
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li><strong>规模继续扩大</strong>：更多参数 → 更强能力</li>
      <li><strong>效率提升</strong>：同样能力下消耗更少资源</li>
      <li><strong>定制化和专用化</strong>：针对特定领域优化的模型（如医疗、法律专用模型）</li>
      <li><strong>多模态融合</strong>：文本、图像、音频、视频的统一理解和生成</li>
      <li><strong>可解释性</strong>：让模型决策过程更透明、更可信</li>
    </ul>
  </section>

  <section style="margin-bottom: 28px;">
    <h2 style="font-size: 1.45rem; margin-bottom: 10px; color: #111827;">10. 大模型面临的挑战</h2>
    <p style="color: #374151; line-height: 1.7;">
      大模型技术虽然先进，但也面临重大挑战：
    </p>
    <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
      <li><strong>伦理和安全</strong>：如何防止滥用、保护隐私、避免有害内容</li>
      <li><strong>资源消耗</strong>：训练和部署需要巨大的计算资源和能源</li>
      <li><strong>数据治理</strong>：数据隐私、版权、安全等问题</li>
      <li><strong>技术不均衡</strong>：大模型技术高成本，可能加剧贫富差距</li>
    </ul>
  </section>

  <section style="margin-top: 30px; padding: 18px 20px; background: linear-gradient(180deg, #eff6ff, #dbeafe); border-radius: 12px; border: 1px solid #bfdbfe;">
    <h2 style="font-size: 1.2rem; margin-bottom: 10px; color: #1e3a8a;">课程总结</h2>
    <p style="color: #1e3a8a; line-height: 1.7; margin: 0;">
      <strong>大模型的认知框架：</strong>
    </p>
    <ul style="color: #1e3a8a; line-height: 1.7; margin-top: 8px; padding-left: 20px;">
      <li>定义和历史：从AI 1.0到AI 2.0，大模型是当代AI的核心</li>
      <li>技术原理：Transformer + 注意力机制 + 三阶段训练</li>
      <li>能力和局限：强大但不完美，理解其边界很重要</li>
      <li>发展方向：更大、更高效、更专用、更可信</li>
      <li>实际应用：正在改造医疗、法律、政务等多个行业</li>
    </ul>
  </section>

  <section style="margin-top: 24px;">
    <a href="/Learn/beginner/what-is-llm" style="display: inline-block; background: #2563eb; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 8px; font-weight: 700;">下一课：更深入理解LLM →</a>
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
          ← 返回初级课程
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
          初级课程 · 核心认知
        </div>

        <h1 style={{ fontSize: "2.4rem", margin: "0 0 12px 0", color: "#111827" }}>
          大模型的认知
        </h1>

        <p style={{
          color: "#4b5563",
          lineHeight: "1.7",
          marginBottom: "22px",
          fontSize: "1.05rem"
        }}>
          从定义、发展历程到技术原理和实际应用，建立对大模型（LLM）的系统认知。
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
