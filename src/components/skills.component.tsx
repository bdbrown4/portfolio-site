import type { FC } from "react";

interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    title: "RAG Pipelines",
    description:
      "Designing and implementing Retrieval-Augmented Generation systems — embedding stores, chunking strategies, and hybrid search for grounded LLM responses.",
  },
  {
    title: "MCP Servers",
    description:
      "Building Model Context Protocol servers that expose tools, resources, and prompts so AI agents can interact with external systems safely and predictably.",
  },
  {
    title: "Agentic Retrieval",
    description:
      "Orchestrating multi-step agent workflows that autonomously research, reason, and act — including tool-use loops, planning, and self-correction.",
  },
  {
    title: "Claude Code",
    description:
      "Hands-on experience using Anthropic's Claude Code for end-to-end software engineering: planning, implementing, debugging, and shipping features inside the terminal.",
  },
  {
    title: "GitHub Copilot SDK",
    description:
      "Extending GitHub Copilot's capabilities through its SDK — building custom agents and integrations that plug into developer workflows.",
  },
];

export const Skills: FC = () => {
  return (
    <section className="w-full max-w-4xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
        AI &amp; Engineering Focus
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
          >
            <h3 className="mb-2 text-lg font-semibold dark:text-white">
              {skill.title}
            </h3>
            <p className="text-sm leading-relaxed dark:text-gray-300 text-gray-700">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
