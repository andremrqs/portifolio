import { FC } from "react";

import Link from "next/link";
import { VscGithubAlt } from "../Misc/Icons.collection"

import type { linkProps } from "../../@types/prop.types";

const TextLink: FC<linkProps> = ({ text, url }) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </a>
  );
};

const Header: FC = () => {

  return (
    <header
      className={`sm:flex sm:flex-row sm:items-center sm:justify-between py-8 font-jost`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" url="#" />
        <TextLink text="Skills" url="#skills" />
        <TextLink text="Projects" url="#projects" />
        <TextLink text="Contact" url="#contact" />
      </p>

      <Link href="https://github.com/andremrqs/portifolio" passHref>
        <a
          className="float-right mr-2 sm:mr-0 sm:float-none rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          <VscGithubAlt />
        </a>
      </Link>
    </header>
  );
};

export default Header;
