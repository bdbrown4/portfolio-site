import Head from "next/head";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";
import {  } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Home() {
  const [toggleTheme, setToggleTheme] = useState(false);

  const icons = [
    {
      element: <BsGithub className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer"/>,
      link: "https://github.com/bdbrown4"
    },
    {
      element: <BsLinkedin className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer"/>,
      link: "https://www.linkedin.com/in/bdbrown4/"
    },
    {
      element: <BsDiscord className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer"/>,
      link: "https://discordapp.com/users/292819074688352257"
    },
    {
      element: <BsFacebook className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer"/>,
      link: "https://www.facebook.com/ben.brown.75685/"
    },
    {
      element: <BsInstagram className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer"/>,
      link: "https://www.instagram.com/cosmicspacenaut/"
    }
  ];

  useEffect(() => {
    if (!toggleTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleTheme]);

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
            <FiSun className={`mx-3 xl:w-8 xl:h-8 text-white lg:w-8 lg:h-8 md:w-6 md:h-6 cursor-pointer ${toggleTheme ? 'display-none' : ''}`} />
          </button>
          <button type="button" onClick={() => setToggleTheme(!toggleTheme)}>
            <FaMoon className={`mx-3 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-6 md:h-6 cursor-pointer ${!toggleTheme ? 'display-none' : ''}`} />
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
            {icons.map((icon, key) => <a key={key} href={icon.link} target="_blank" rel="noreferrer">{icon.element}</a>)}
          </div>
        </div>
      </main>
    </>
  );
}
