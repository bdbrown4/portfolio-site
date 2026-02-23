import { FC } from "react";

export const Introduction: FC = () => {
    return (
        <>
            <h1 className="xl:text-5xl lg:text-4xl md:text-2xl sm: text-lg font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
                Hey, I&apos;m Ben Brown
            </h1>
            <div className="flex flex-col items-center gap-2">
                <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl dark:text-white text-center">
                    Full-stack developer exploring the frontier of AI &mdash; from RAG
                    pipelines and MCP servers to agentic retrieval systems.
                </p>
                <p className="xl:text-xl lg:text-xl md:text-lg dark:text-gray-300 text-gray-600 text-center">
                    Always learning, always building.
                </p>
            </div>
        </>
    )
}