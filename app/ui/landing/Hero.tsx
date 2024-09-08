import { FaMagic } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Hero(): JSX.Element {
  return (
    <section className="relative z-20 hero w-full h-fit">
      <div className="content-all-center-wrapper w-full h-fit flex flex-col items-center justify-center gap-5 p-4">
        <div className="updates-click w-fit h-fit group cursor-pointer flex flex-row gap-1 items-center border-2 rounded-2xl px-2 py-1 dark:border-neutral-600 border-purple-300 dark:hover:border-purple-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-200 dark:bg-transparent bg-neutral-200 duration-300">
          <FaMagic className="text-sm dark:text-neutral-400 text-purple-700 dark:group-hover:text-purple-300 group-hover:text-purple-800 duration-300" />
          <span className="text-sm dark:text-neutral-400 text-neutral-800 dark:group-hover:text-neutral-300 duration-300">
            New updates!
          </span>
        </div>
        <div className="head-description-and-buttons-wrapper flex flex-col w-fit h-fit items-center justify-center gap-12">
          <div className="head-and-description w-fit h-fit flex items-center justify-center flex-col gap-4">
            <h1 className="w-fit h-fit font-extrabold sm:text-5xl text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br dark:from-neutral-200 dark:to-neutral-500 from-neutral-900 to-neutral-700 text-center">
              Welcone to Landify
            </h1>
            <p className="w-fit h-fit max-w-[512px] text-center dark:text-neutral-400 text-neutral-900 text-sm sm:text-base md:text-lg">
              A killer template for your next SaaS product. Its all free, no
              fees, download it and your are ready to go.
            </p>
          </div>
          <div className="buttons w-fit h-fit flex flex-row flex-wrap gap-6 items-center justify-center">
            <button className="px-4 py-2 bg-transparent bg-gradient-to-tr from-[#7e3eee] to-[#a384f9] duration-300 rounded-lg w-fit h-fit border border-[#7e3eee] font-semibold text-neutral-200">
              Get started
            </button>
            <button className="px-4 py-2 flex flex-row gap-2 items-center justify-center dark:bg-black bg-neutral-300 border border-purple-600 rounded-lg  hover:border-purple-800 duration-300 group">
              <span className="text-neutral-800 dark:text-neutral-200">
                Overview
              </span>
              <FaLongArrowAltRight className="group-hover:translate-x-1 duration-300 group-hover:text-purple-700 text-neutral-800 dark:text-neutral-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
