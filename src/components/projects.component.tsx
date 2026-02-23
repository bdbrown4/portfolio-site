import type { FC } from "react";
import { BsGithub } from "react-icons/bs";

interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
}

const projects: Project[] = [
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
    <section className="w-full max-w-4xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
        Featured Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
          >
            <div>
              <div className="mb-3 flex items-center gap-2">
                <BsGithub className="text-xl dark:text-white" />
                <h3 className="text-lg font-semibold dark:text-white">
                  {project.title}
                </h3>
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
          </a>
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
  );
};
