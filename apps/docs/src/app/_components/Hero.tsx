"use client";

import {
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { HeroIllustration } from "./CardContainer";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import { Spotlight } from "../../components/ui/spotlight";
import { ArrowDown } from "lucide-react";

export function BackgroundGrid() {
  return (
    <div className="relative h-full w-full">
      <div className="moving-grid-background absolute h-[200%] w-full" />
      <div className="shadow-background absolute h-full w-full rounded-full shadow-[inset_0_0_5rem_3rem]" />
    </div>
  );
}

export function GooniLogo({ height = 160, width = 160 }: SVGProps<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width={width}
      height={height}
      viewBox="0 0 841.89 841.89"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="#ffffff" stroke="none">
        <path d="M616.9 689.82c-11.24-11.76-16.06-25.83-16.04-41.96.12-54.86.2-109.71-.03-164.57-.03-10.87-.49-21.9-2.45-32.55-11.61-62.9-47.36-106.71-105.95-132.07-2.47-1.07-4.87-2.28-7.14-3.34 5.17-21.08 5.04-22.27-4.75-41.23 3.68-2.28 7.41-4.65 11.17-6.92 25.88-15.6 51.82-31.11 77.63-46.79 10.26-6.21 11.35-11.15 5.43-21.47-13.44-23.31-44.34-33.24-69.6-22.39-2.44 1.06-4.9 2.03-8.35 3.48.52-2.82.72-4.42 1.11-5.98 3.98-16.01 8.13-31.98 11.94-48.04 3.19-13.39-1.41-19.15-15-19.27-8.4-.05-16.81-.39-25.18.1-22.86 1.33-42.28 9.88-56.75 28.2-2.54 3.21-5.14 6.35-7.74 9.56-16.91-9.71-34.3-13.24-53.06-10.25-28.64 4.59-45.94 25.23-63.67 44.95-4.99 5.54-2.44 13.22 4.13 17.15 3.12 1.86 6.43 3.39 9.71 4.97 17.89 8.57 33.63 20.04 46.84 34.82 8.36 9.36 15.92 19.32 21.13 31.48-16.33 12.28-21.2 27.83-13 47.53-6.53 2.87-12.29 5.02-17.72 7.84-63.76 33.27-97.2 85.88-98.39 157.8-.91 54.55-.37 109.16.02 163.73.13 17.97-4.9 33.19-17.17 46.61-13.19 14.43-6.58 36.67 12.11 42.59 3.64 1.16 7.69 1.44 11.56 1.46 115.31.07 230.61.05 345.92.05 1.41 0 2.8.02 4.2-.07 11.69-.55 20.51-5.76 24.88-16.78 4.2-10.56 2.18-20.34-5.76-28.65zM321.4 184.48c-.71-.39-1.28-1.04-1.9-1.56 13.59-23.65 46.74-32.87 70.24-19.84 5.44 3.02 8.11 6.62 7.91 13.24-.45 16.23-.25 32.47-.05 48.69.03 3.56.62 7.29 1.85 10.62 1.78 4.82 6.62 7.37 11.34 6.85 4.87-.52 9.52-4.7 10.36-9.64.39-2.18.25-4.47.25-6.7.02-15.67.6-31.38-.13-47.01-.86-17.74 8.01-29.7 21.23-39.39 11.96-8.78 25.7-10.06 41.17-8.53-2.2 9.47-4.23 18.59-6.48 27.66-3.56 14.38-7.24 28.72-10.95 43.08-1.58 6.1-1.51 11.82 4.17 15.84 5.36 3.76 10.58 2.23 15.55-1.21 2.3-1.6 4.65-3.11 6.99-4.65 5.85-3.85 11.67-7.71 17.54-11.54 10.38-6.79 29.63-5.78 37.94 4.64-2.54 1.65-4.55 3.06-6.67 4.33-27.58 16.59-55.21 33.09-82.7 49.8-4.74 2.89-9.47 4.25-15.02 4.15-14.28-.24-28.55-.18-42.81-.03-4.1.03-6.72-1.19-8.65-5.04-16.04-31.96-39.96-56.37-71.17-73.75zm132.24 123.67c-10.92.24-21.83.07-32.75.07-10.9-.02-21.83.17-32.74-.08-7.86-.18-12.03-5.48-10.53-12.63 1.01-4.87 4.25-7.64 10.31-8.16 4.17-.35 8.38-.17 12.58-.17 17.35 0 34.7-.08 52.05.05 7.24.05 11.15 3.33 11.91 9.22.87 6.84-3.26 11.56-10.83 11.71zm-212.3 401.44c1.07-1.97 1.8-3.98 3.09-5.51 14.73-17.48 20.93-37.52 20.73-60.42-.49-54.84-.17-109.7-.05-164.55.08-41.84 15.4-77.5 44.91-106.87 16.91-16.83 37.15-28.62 60.01-35.71 1.55-.49 3.21-.64 6.99-1.34-2.75 2.69-4.06 4.13-5.53 5.39-34.23 29.54-54.5 66.83-61.49 111.38-1.07 6.89-1.46 13.91-1.66 20.88-.3 10.41 3.93 15.72 11.93 15.7 7.64-.02 11.62-4.97 11.98-15.02.89-26.5 7.81-51.26 20.93-74.34 12.43-21.87 29.78-39.02 50.42-53.04.66-.45 1.55-.54 3.31-1.11-.65 8.65-1.23 16.83-1.91 25.01-1.44 17-2.99 33.98-4.43 50.96-.87 10.31-1.63 20.63-2.45 30.94-.44 5.44 1.24 9.96 5.91 13.03 3.63 2.37 7.91 2.55 11.04-.05 2.75-2.28 5.51-5.85 6.13-9.22 1.65-9.05 2.33-18.29 3.07-27.48 1.93-23.68 3.64-47.38 5.54-71.06.37-4.64 1.14-9.25 1.98-15.82 8.25 6.08 15.45 10.75 21.95 16.28 28.03 23.82 46.14 53.68 53.29 89.88 1.49 7.66 1.85 15.54 2.65 23.31.2 1.93-.02 3.91.17 5.86.77 7.66 5.59 12.19 12.5 11.86 6.57-.32 11.34-4.89 11.22-12.19-.15-8.92-.74-17.9-2.12-26.71-7.05-45.03-28.77-81.81-63.41-111.19-.62-.5-1.09-1.19-2.67-2.97 3.24.6 5.27.76 7.16 1.39 55.95 19.03 89.72 57.83 101.95 115.37 1.9 8.95 2.27 18.34 2.3 27.53.22 55.7.25 111.39.1 167.07-.05 20.69 6 39.03 18.98 55.14 1.8 2.23 3.29 4.74 5.11 7.37-7.64 2.59-351.29 2.72-359.62.25z" />
      </g>
    </svg>
  );
}

export async function Hero() {
  return (
    <section className="pointer-events-none min-h-screen lg:min-h-0 lg:pt-[1rem]">
      <div className="absolute inset-10 -z-30 overflow-hidden rounded-full opacity-70 lg:hidden">
        <BackgroundGrid />
      </div>
      <div className="container relative -mt-[3rem] grid min-h-screen items-center justify-center py-24 lg:min-h-0 lg:grid-cols-2 lg:py-0 [&>*]:pointer-events-auto">
        <Spotlight
          className="top-[7.5rem] left-10 md:left-40 md:top-0 -z-10"
          fill="white"
        />
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:items-start">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hsnards/gooni"
            className="animate-bg-gradient-to-center group rounded-full bg-gradient-to-r from-yellow-600 via-[#3178c6] to-[#3178c6] to-70% bg-[length:420%_420%] bg-right-bottom p-[1px] brightness-90 contrast-150 duration-500 hover:bg-left-top hover:shadow-[0_0_2rem_-0.5rem_#3178c6] dark:from-yellow-500 dark:via-white dark:to-[#3178c6] dark:brightness-125 dark:contrast-100 dark:hover:shadow-[0_0_2rem_-0.5rem_#fff8]"
          >
            <div className="rounded-full bg-white/80 px-3 py-1 dark:bg-black/80">
              <span className="animate-bg-gradient-to-center relative flex select-none items-center bg-gradient-to-r to-70% bg-[length:420%_420%] bg-clip-text bg-right-bottom text-transparent duration-500 group-hover:bg-left-top dark:from-yellow-500 dark:via-white dark:to-[#3178c6]">
                Star us on GitHub
              </span>
            </div>
          </a>
          <div className="relative flex w-full items-center justify-center gap-4 lg:justify-start flex-wrap">
            <div className="absolute left-1/2 top-1/2 -z-10 hidden h-40 w-40 lg:h-56 lg:w-56 -translate-x-[15%] -translate-y-[50%] rounded-full bg-slate-400/10 blur-3xl dark:block" />
            <div className="absolute right-1/2 top-1/2 -z-10 hidden h-40 w-40 lg:h-56 lg:w-56 -translate-y-[40%] rounded-full bg-[#3178c6]/20 blur-3xl dark:block" />
            <GooniLogo />
            <h1 className="animate-bg-gradient-to-center-title dark:to-69% select-none bg-gradient-to-br from-[#3178c6] from-[69%] to-black/0 bg-clip-text bg-right-bottom text-6xl font-extrabold text-transparent sm:text-8xl sm:leading-[5.5rem] dark:from-white dark:from-30% dark:via-[#3178c6] dark:to-[#3178c6] dark:bg-[length:300%_300%] ">
              Gooni
            </h1>
          </div>

          <p className="max-w-[55ch] bg-transparent text-center font-medium leading-8  sm:px-8 lg:px-0 lg:text-left text-white/50">
            Beautifully designed components that you can copy and paste into
            your apps.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <button
              onClick={() => {
                document.getElementById('components-demo')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="hero-join-button-dark group relative mx-auto hidden w-fit overflow-hidden rounded-xl p-[1px] font-bold transition-all duration-300 md:mr-0 lg:mr-auto dark:block dark:hover:shadow-[0_0_2rem_-0.5rem_#fff8] order-last md:order-first"
            >
              <span className="inline-flex h-full w-fit items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 dark:bg-neutral-900 dark:text-white group-hover:dark:bg-black">
                <ArrowDown className="h-4 w-4" />
                {"Start exploring"}
              </span>
            </button>
            <Button asChild variant="outline" >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/typehero/typehero"
              >
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}
