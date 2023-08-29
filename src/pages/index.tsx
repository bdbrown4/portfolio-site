import Head from "next/head";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import { iconElements } from "../static-content/constants";

export default function Home() {
  const [toggleTheme, setToggleTheme] = useState(false);

  const { data, isLoading } = api.icon.getAll.useQuery();

  useEffect(() => {
    !toggleTheme ?
      document.documentElement.classList.add("dark") :
      document.documentElement.classList.remove("dark");
  }, [toggleTheme]);

  if (!data && isLoading) return <main className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen flex items-center justify-center"><div className="lds-hourglass"></div></main>;

  return (
    <>
      <Head>
        <title>Ben Brown</title>
        <meta name="description" content="Ben Brown's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={!toggleTheme ? "dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black" : "bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300"}>
        <div className="flex justify-end pt-3">
          <button type="button" onClick={() => setToggleTheme(!toggleTheme)}>
            <FiSun className={`mx-3 dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer ${toggleTheme ? 'display-none' : ''}`} />
          </button>
          <button type="button" onClick={() => setToggleTheme(!toggleTheme)}>
            <FaMoon className={`mx-3 dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer ${!toggleTheme ? 'display-none' : ''}`} />
          </button>
        </div>
        <div className="container flex flex-col items-center gap-12 px-8 py-8 min-h-screen">
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
          <div className="flex items-center justify-center gap-4">
            {!!data ?
                data.map((icon, key) => <a key={key} href={icon.link} target="_blank" rel="noreferrer">
                  {iconElements[icon.id]}</a>)
                  : ""}
          </div>
        </div>
      </main>
    </>
  );
}
