import type { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "DELTA",
    description:
      "Dual Edge-Linked Transformer Architecture — a novel graph neural network elevating edges to first-class computational entities via edge-to-edge attention over multi-hop adjacency. Submitted to NeurIPS 2026. Achieves depth-monotonic compositional reasoning gains no node-centric baseline matches: +0.573/+0.290/+0.095 on synthetic structural benchmarks, 5-hop MRR 0.790 vs GraphGPS 0.690 on FB15k-237, and +24% noise robustness — with 31% fewer parameters than GraphGPS.",
    tags: ["Python", "PyTorch", "Graph Neural Networks", "AI Research", "Knowledge Graphs"],
    repoUrl: "https://github.com/bdbrown4/DELTA",
    demoUrl: "https://bdbrown4.github.io/DELTA/",
  },
  {
    title: "RAG vs Agentic Retrieval",
    description:
      "A multi-page AI demo app comparing classic RAG and a LangGraph PLAN→EXECUTE→SYNTHESIZE agent on a live ChromaDB portfolio knowledge base. Features live token streaming, RAGAS evaluation, model cost comparison (GPT-4o vs GPT-4o-mini), knowledge graph explorer, LangSmith tracing, Pydantic guardrails, A/B test framework, and Google OAuth — all deployed on Streamlit Cloud.",
    tags: ["Python", "LangChain", "LangGraph", "ChromaDB", "OpenAI", "Streamlit", "RAGAS", "Pydantic", "LangSmith"],
    repoUrl: "https://github.com/bdbrown4/rag-vs-agentic",
    demoUrl: "https://rag-vs-agentic-fmm3inchpstkf5eobfgqqb.streamlit.app",
  },
  {
    title: "GitHub Portfolio MCP Server",
    description:
      "A Model Context Protocol server that exposes tools for AI agents to query GitHub repos, languages, READMEs, and profile data. Runs as stdio locally or HTTP/SSE when hosted on Railway.",
    tags: ["MCP", "TypeScript", "AI Agents", "GitHub API"],
    repoUrl: "https://github.com/bdbrown4/github-portfolio-mcp-server",
  },
  {
    title: "crypto-web-component",
    description:
      "A custom-built web component for displaying live cryptocurrency data — showcasing skills in native Web Components, shadow DOM, and real-time data fetching.",
    tags: ["Web Components", "JavaScript", "Crypto API"],
    repoUrl: "https://github.com/bdbrown4/crypto-web-component",
  },
  {
    title: "NASA Picture of the Day",
    description:
      "An Android application that fetches and displays NASA's Astronomy Picture of the Day — built to explore mobile development and consume public REST APIs.",
    tags: ["Android", "Kotlin", "NASA API"],
    repoUrl: "https://github.com/bdbrown4/NasaPictureOfTheDayAndroid",
  },
];

export const Projects: FC = () => {
  return (
    <>
      {/* ── Featured Projects grid ── */}
      <section className="w-full max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
          Featured Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
            >
              <div>
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <BsGithub className="text-xl dark:text-white" />
                    <h3 className="text-lg font-semibold dark:text-white">{project.title}</h3>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-md border border-white/20 px-2 py-1 text-xs dark:text-gray-300 text-gray-600 hover:border-white/50 transition-colors flex items-center gap-1"
                      >
                        <MdOpenInNew className="text-sm" /> Demo
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-md border border-white/20 px-2 py-1 text-xs dark:text-gray-300 text-gray-600 hover:border-white/50 transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed dark:text-gray-300 text-gray-700">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs dark:text-gray-300 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm dark:text-gray-400 text-gray-600">
          More repositories at{" "}
          <a
            href="https://github.com/bdbrown4?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 transition-colors hover:dark:text-white hover:text-black"
          >
            github.com/bdbrown4
          </a>
        </p>
      </section>

      {/* ── AI Showcase: RAG vs Agentic deep-dive ── */}
      <section className="w-full max-w-4xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
          AI in Action
        </h2>
        <p className="mb-8 text-center text-sm dark:text-gray-400 text-gray-600">
          A full-stack AI engineering project evolving from a basic comparison to a production-grade multi-page demo — built and iterated over 8 weeks.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold dark:text-white">RAG vs Agentic Retrieval</h3>
              <p className="mt-1 text-sm dark:text-gray-400 text-gray-600">
                Same question. Same knowledge base. Two very different approaches.
              </p>
            </div>
            <a
              href="https://rag-vs-agentic-fmm3inchpstkf5eobfgqqb.streamlit.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium dark:text-white text-gray-800 transition-colors hover:bg-white/20 border border-white/20 whitespace-nowrap"
            >
              <MdOpenInNew /> Try the live demo
            </a>
          </div>

          {/* Comparison table */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-semibold dark:text-white">Classic RAG</h4>
              <ul className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                <li>✦ Single embed → retrieve top-k → generate</li>
                <li>✦ Pydantic guardrails + confidence gating</li>
                <li>✦ Live token streaming to UI</li>
                <li>✦ Deterministic, cheap, predictable (~2s)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-semibold dark:text-white">LangGraph Agentic</h4>
              <ul className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                <li>✦ PLAN → EXECUTE → TOOLS → SYNTHESIZE graph</li>
                <li>✦ Streaming plan + tool calls visible in real time</li>
                <li>✦ Handles cross-repo &amp; multi-hop questions</li>
                <li>✦ LangSmith traced, Pydantic validated</li>
              </ul>
            </div>
          </div>

          {/* Feature pages row */}
          <div className="mb-4 grid gap-2 sm:grid-cols-4 text-center">
            {[
              { icon: "🤖", label: "RAG vs Agentic", desc: "Live streaming comparison" },
              { icon: "📊", label: "Eval Dashboard", desc: "RAGAS faithfulness scoring" },
              { icon: "🧪", label: "Model Comparison", desc: "Cost vs quality trade-off" },
              { icon: "🕸️", label: "Knowledge Graph", desc: "Tech relationship explorer" },
            ].map((p) => (
              <div key={p.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-lg">{p.icon}</div>
                <div className="text-xs font-semibold dark:text-white mt-1">{p.label}</div>
                <div className="text-xs dark:text-gray-400 text-gray-600">{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Tech stack row */}
          <div className="border-t border-white/10 pt-4">
            <p className="mb-2 text-xs uppercase tracking-widest dark:text-gray-500 text-gray-500">Built with</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "LangChain", "LangGraph", "ChromaDB", "OpenAI", "Streamlit", "RAGAS", "Pydantic", "LangSmith", "Google OAuth", "networkx"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs dark:text-gray-300 text-gray-600">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Research: DELTA deep-dive ── */}
      <section className="w-full max-w-4xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
          AI Research
        </h2>
        <p className="mb-8 text-center text-sm dark:text-gray-400 text-gray-600">
          A from-scratch AI architecture exploring whether edges deserve first-class attention — validated across 51 experiment phases with real-world knowledge graph data.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold dark:text-white">DELTA — Dual Edge-Linked Transformer Architecture</h3>
              <p className="mt-1 text-sm dark:text-gray-400 text-gray-600">
                &ldquo;Reality is a graph. Language is a lossy compression of reality into sequences.&rdquo;
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://bdbrown4.github.io/DELTA/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium dark:text-white text-gray-800 transition-colors hover:bg-white/20 border border-white/20 whitespace-nowrap"
              >
                <MdOpenInNew /> Docs
              </a>
              <a
                href="https://github.com/bdbrown4/DELTA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium dark:text-white text-gray-800 transition-colors hover:bg-white/20 border border-white/20 whitespace-nowrap"
              >
                <BsGithub /> Code
              </a>
            </div>
          </div>

          {/* Three-paradigm comparison */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-semibold dark:text-white">Transformer</h4>
              <ul className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                <li>✦ Flat token sequences</li>
                <li>✦ Self-attention over positions</li>
                <li>✦ O(n²) full attention</li>
                <li>✦ No explicit relational structure</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-semibold dark:text-white">Graph Neural Network</h4>
              <ul className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                <li>✦ Nodes + passive scalar edges</li>
                <li>✦ Message passing between nodes</li>
                <li>✦ Fixed neighborhood aggregation</li>
                <li>✦ Edges are wires</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-semibold dark:text-white">DELTA</h4>
              <ul className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                <li>✦ Nodes + <strong>first-class edge features</strong></li>
                <li>✦ <strong>Dual parallel attention</strong> (node ↔ edge)</li>
                <li>✦ <strong>Post-attention soft gating</strong> at 50% sparsity</li>
                <li>✦ <strong>Edge-to-edge attention</strong> enables relational reasoning</li>
              </ul>
            </div>
          </div>

          {/* Key results */}
          <div className="mb-6 grid gap-2 sm:grid-cols-5 text-center">
            {[
              { icon: "🎯", label: "LP MRR 0.4887", desc: "Best on FB15k-237 link prediction" },
              { icon: "🔬", label: "51 Experiment Phases", desc: "Systematic validation" },
              { icon: "📈", label: "5p MRR 0.790", desc: "Advantage doubles per hop vs GraphGPS" },
              { icon: "🧪", label: "44/44 Tests Passing", desc: "Full backward compatibility" },
              { icon: "🧠", label: "Self-Bootstrap 157%", desc: "DELTA builds its own graph (Phase 39)" },
            ].map((r) => (
              <div key={r.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-lg">{r.icon}</div>
                <div className="text-xs font-semibold dark:text-white mt-1">{r.label}</div>
                <div className="text-xs dark:text-gray-400 text-gray-600">{r.desc}</div>
              </div>
            ))}
          </div>

          {/* Architecture pipeline */}
          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="mb-3 text-xs uppercase tracking-widest dark:text-gray-500 text-gray-500">Architecture Pipeline</p>
            <div className="flex flex-wrap items-center gap-1 text-xs dark:text-gray-300 text-gray-700">
              {[
                "Raw Input",
                "Graph Constructor",
                "BFS Partitioner",
                "Dual Parallel Attention",
                "Post-Attention Pruner",
                "Reconciliation",
                "Hierarchical Global Attention",
                "Variational Memory Compression",
                "Output + Updated Graph State",
              ].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-1">
                  <span className="rounded border border-white/20 bg-white/5 px-2 py-1">{step}</span>
                  {i < arr.length - 1 && <span className="dark:text-gray-500 text-gray-400">→</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Tech stack row */}
          <div className="border-t border-white/10 pt-4">
            <p className="mb-2 text-xs uppercase tracking-widest dark:text-gray-500 text-gray-500">Built with</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "PyTorch", "Graph Neural Networks", "Attention Mechanisms", "Sparse COO Tensors", "Knowledge Graphs", "FB15k-237", "CUDA"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs dark:text-gray-300 text-gray-600">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
