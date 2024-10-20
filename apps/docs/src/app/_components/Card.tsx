import { clsx } from 'clsx';
import { motion, type SVGMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';
// Add these new imports
import { useState } from 'react';
import { ClipboardIcon, ClipboardCheck } from 'lucide-react';

function getRandomWidth() {
  const min = 100;
  const range = 240 - min;
  let rand = Math.random();
  rand = Math.floor(Math.random() * range);
  rand = rand + min;

  return rand;
}

export interface FakeChallengeCardProps {
  username: string;
  title: string;
  className?: string;
  prompt: ReactNode;
}


const codeLineProps = {
  width: 0,
  rx: '4.5',
  height: 10,
  initial: { width: 0 },
  transition: { duration: 0.5, delay: 0.15 },
} as SVGMotionProps<SVGRectElement>;

export function HeroChallengeCard({
  username,
  prompt,
  title,
  className,
}: FakeChallengeCardProps) {
  // Add this state for managing copy status
  const [isCopied, setIsCopied] = useState(false);

  // Add this function to handle copying
  const handleCopy = () => {
    navigator.clipboard.writeText('npx gooni@latest add  filterable-option-list');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      className={clsx(className, {
        'group/card flex w-[400px] flex-col gap-3 rounded-2xl border border-neutral-300 bg-zinc-100 p-5 drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] duration-300 hover:-skew-x-3 hover:scale-105 hover:shadow-[2rem_2rem_2rem_-1rem_#0004,inset_1rem_1rem_4rem_-1rem_#fff1] dark:border-zinc-800 dark:bg-zinc-900 dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.35)] dark:hover:border-zinc-600':
          true,
      })}
    >
      <p className="translate-x-1 text-lg font-medium">{title}</p>
      <div className="flex gap-3">
        <div
          className={`inline-flex w-fit translate-x-1 items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold text-white duration-300 group-hover/card:-translate-x-0 group-hover/card:-translate-y-1 group-hover/card:shadow-[0.5rem_0.5rem_0.25rem_-0.25rem_#0004] dark:bg-green-300 dark:text-black`}
        >
          {username}
        </div>
        
      </div>
      <div className="translate-x-1 text-xs">{prompt}</div>
      <div className="mt-4 rounded-lg bg-[#1c1c1c] p-4 font-mono text-xs relative items-center flex justify-between">
        <pre className="overflow-x-auto">
          <code className="text-[#e6e6e6]">npx gooni@latest add filterable-option-list</code>
        </pre>
        <button
          onClick={handleCopy}
          className=" text-gray-400 hover:text-gray-200 "
          aria-label={isCopied ? "Copied" : "Copy to clipboard"}
        >
          {isCopied ? (
            <ClipboardCheck className="h-4 w-5" />
          ) : (
            <ClipboardIcon className="h-4 w-5" />
          )}
        </button>
      </div>
      <div className="mt-4 h-40 flex-grow rounded-xl bg-zinc-300/70 p-4 duration-300 group-hover/card:-translate-x-1 group-hover/card:-translate-y-3 group-hover/card:shadow-[1rem_1rem_2.5rem_-1rem_#0008] dark:bg-zinc-800/70">
        <svg
          fill="none"
          height="193"
          viewBox="0 0 256 193"
          width="256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            className="fill-[#ABABB2] dark:fill-neutral-700"
            y="0"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            className="fill-[#A48088] dark:fill-[#544048]"
            y="19"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            className="fill-[#A48088] dark:fill-[#544048]"
            y="38"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            className="fill-[#809F94] dark:fill-[#404F54]"
            y="57"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            className="fill-[#ABABB2] dark:fill-neutral-700"
            y="90"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            className="fill-[#ABABB2] dark:fill-neutral-700"
            y="109"
          />
        </svg>
    </div>



    </div>
  );
}
