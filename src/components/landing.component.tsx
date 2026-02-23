import { useState } from "react";
import type { FC } from "react";
import { api } from "~/utils/api";
import { DarkLightTheme } from "./dark-light-theme.component";
import { Introduction } from "./introduction.component";
import { Icon } from "./icons.component";
import { Skills } from "./skills.component";
import { Projects } from "./projects.component";

export const Landing: FC = () => {
    const [toggleTheme, setToggleTheme] = useState(false);
    const { data, isLoading } = api.icon.getAll.useQuery();
    if (!data && isLoading) return <main className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen flex items-center justify-center"><div className="lds-hourglass"></div></main>;

    return (
        <main className={!toggleTheme ? "dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black" : "bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300"}>
            <DarkLightTheme toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 px-8 py-8">
                <Introduction />
                <div className="flex items-center justify-center gap-4">
                    <Icon icons={data} />
                </div>
                <Skills />
                <Projects />
                <footer className="pb-8 text-center text-xs dark:text-gray-500 text-gray-400">
                    &copy; {new Date().getFullYear()} Ben Brown
                </footer>
            </div>
        </main>
    );
}