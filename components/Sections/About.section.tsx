import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">André Marques</p>
        <p className="mt-1 text-lg font-medium text-gray-300">
          Desenvolvedor Fullstack
        </p>

        <p className="mt-4 text-gray-400">
          Criação de Sites e Apps e desenvolvimento de APIs <br /> para
         trazer dados e informações .
        </p>

      </div>

      <div className="hidden custom:block">

      </div>
    </div>
  );
};

export default About;
