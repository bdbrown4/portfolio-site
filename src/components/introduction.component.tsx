import type { FC } from "react";

export const Introduction: FC = () => {
    return (
        <>
            <h1 className="xl:text-5xl lg:text-4xl md:text-2xl sm: text-lg font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
                Hey, I&apos;m Ben Brown
            </h1>
            <div className="flex flex-col items-center gap-2">
                <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl dark:text-white text-center">
                    Full-stack developer and AI researcher &mdash; from RAG
                    pipelines and agentic systems to novel graph neural network
                    architectures for relational reasoning.
                </p>
                <p className="xl:text-xl lg:text-xl md:text-lg dark:text-gray-300 text-gray-600 text-center">
                    Always learning, always building.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="https://bdbrown4.github.io/bens-blog/"
                        className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                        Read my blog
                    </a>
                    <a
                        href="#projects"
                        className="rounded-full border border-slate-400 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-700 hover:text-slate-900 dark:border-slate-500 dark:text-slate-200 dark:hover:border-slate-200 dark:hover:text-white"
                    >
                        View projects
                    </a>
                </div>
            </div>
        </>
    )
}