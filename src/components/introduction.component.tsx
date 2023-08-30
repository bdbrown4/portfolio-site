import { FC } from "react";

export const Introduction: FC = () => {
    return (
        <>
            <h1 className="xl:text-5xl lg:text-4xl md:text-2xl sm: text-lg font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
                My Name is Ben Brown...
            </h1>
            <div className="flex flex-col items-center gap-2">
                <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl whitespace-nowrap dark:text-white">
                I am a developer who loves to learn new things.
                </p>
                <p className="xl:text-2xl lg:text-2xl md:text-xl dark:text-white">
                Check out my links below!
                </p>
            </div>
          </>
    )
}