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
    title: "RAG vs Agentic Retrieval",
    description:
      "A live side-by-side comparison of classic RAG and a LangGraph ReAct agent, both querying a ChromaDB knowledge base built from GitHub source files. Backs an authenticated Streamlit UI with Google OAuth.",
    tags: ["Python", "LangChain", "LangGraph", "ChromaDB", "OpenAI", "Streamlit"],
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
          A hands-on exploration of two retrieval strategies for LLM applications.
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
                <li>✦ 1 LLM call, low latency (~2s)</li>
                <li>✦ Deterministic, cheap, predictable</li>
                <li>✦ Struggles with multi-hop questions</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-semibold dark:text-white">Agentic ReAct</h4>
              <ul className="space-y-1 text-sm dark:text-gray-300 text-gray-700">
                <li>✦ LLM decides what &amp; when to retrieve</li>
                <li>✦ 3–8+ LLM calls, higher latency (~10s)</li>
                <li>✦ Handles cross-repo &amp; live GitHub queries</li>
                <li>✦ Full reasoning trace visible in UI</li>
              </ul>
            </div>
          </div>

          {/* Tech stack row */}
          <div className="border-t border-white/10 pt-4">
            <p className="mb-2 text-xs uppercase tracking-widest dark:text-gray-500 text-gray-500">Built with</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "LangChain", "LangGraph", "ChromaDB", "OpenAI", "Streamlit", "Google OAuth", "MCP Server", "Railway"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs dark:text-gray-300 text-gray-600">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
