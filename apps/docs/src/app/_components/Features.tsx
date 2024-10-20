import {
  ClockIcon,
  PaletteIcon,
  FeatherIcon,
  RefreshCwIcon,
} from "lucide-react";

export const Features = () => {
  return (
    <div className="pb-20 min-h-screen">
      <div className="container mx-auto px-3 lg:px-8">
        <h1 className="mb-24 text-center text-3xl font-bold  sm:text-4xl md:text-6xl text-white/80 ">
          Why Choose Gooni?
        </h1>
        <div className="grid grid-cols-1 gap-8  mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {advantages.map((advantage, index) => (
              <BenefitItem key={index} {...advantage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const advantages = [
  {
    title: "Time-saving",
    description:
      "Quickly add pre-built, customizable components to your project.",
    icon: ClockIcon,
  },
  {
    title: "Consistency",
    description: "Maintain a consistent look and feel across your application.",
    icon: PaletteIcon,
  },
  {
    title: "Flexibility",
    description:
      "Choose only the components you need, keeping your project lean.",
    icon: FeatherIcon,
  },
  {
    title: "Up-to-date",
    description:
      "Always get the latest versions of components and their dependencies.",
    icon: RefreshCwIcon,
  },
];


interface BenefitItemProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

function BenefitItem({ title, description, icon: Icon }: BenefitItemProps) {
  return (
    <div className="animated-feature-cards relative w-full drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)]">
      <div className="group relative w-full overflow-hidden rounded-3xl border bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 border-transparent md:bg-gradient-to-br">
        <div className="m-6 min-h-32 w-full sm:m-10 ">
          <div className="flex w-5/6 flex-col gap-3 sm:w-4/6 md:w-4/5 xl:w-4/6">
            <Icon className="h-8 w-8 text-blue-500" />
            <h2 className="text-xl font-bold tracking-tight md:text-xl">
              {title}
            </h2>
            <p className="text-sm leading-5 text-zinc-600 sm:text-base sm:leading-7 dark:text-zinc-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
