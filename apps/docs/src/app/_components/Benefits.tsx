"use client";

import React, { ReactNode, useState } from "react";

import { FilterableOptionList } from "../../components/FilterableOptionList";
import { CheckSquare, SearchIcon, Tags, SquareDashedMousePointer } from "lucide-react";



export function Benefits() {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    sampleOptions.map((item) => item.id)
  );
  return (
    <div className="min-h-screen py:16 md:py-24" id="components-demo">
      <div className="container mx-auto px-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight inline font-semibold from-[#fc5bff] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
              Components
              <br />
              Demo
            </h1>
            <p className="max-w-[55ch] bg-transparent  font-medium leading-8  sm:px-8 lg:px-0 lg:text-left text-white/50">
              Perfect companion for shadcn/ui or anything that you want
            </p>
            <p className="text-md w-full  my-2 text-md lg:text-lg font-normal text-default-500 block max-w-full">
              Filterable Option List is a select component with the following features :
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {componentFeatures.map((item) => (
                <ComponentFeature icon={item.icon} title={item.title} key={item.id} />
              ))}
            </div>

          </div>
          <div className="h-full relative  justify-center flex">
            <div className="absolute inset-0 bg-blue-500 rounded-lg filter blur-[50px] opacity-30 pointer-events-none"></div>
            <FilterableOptionList
              options={sampleOptions}
              tagsList={sampleTagsList}
              selectedOptions={selectedOptions}
              onSelectedOptionsChange={setSelectedOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample mock data for tagsList
export const sampleTagsList = [
  { id: 1, label: "Important", color: "red" },
  { id: 2, label: "Work", color: "blue" },
  { id: 3, label: "Personal", color: "green" },
  { id: 4, label: "Urgent", color: "orange" },
];

// Sample mock data for options
export const sampleOptions = [
  {
    id: 1,
    label: "Task 1",
    tags: [1, 2],
    description: "Complete project report",
  },
  { id: 2, label: "Task 2", tags: [2, 3], description: "Schedule team meeting" },
  { id: 3, label: "Task 3", tags: [3, 4], description: "Prepare presentation" },
  { id: 4, label: "Task 4", tags: [3], description: "Buy groceries" },
  { id: 5, label: "Task 5", tags: [4], description: "Submit expense report" },
];



interface Props {
  title: string;
  icon: ReactNode;
}

const ComponentFeature = (props: Props) => {
  const { icon, title } = props;
  return (
    <div className="flex flex-col relative overflow-hidden h-auto text-white box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-lg rounded-lg transition-transform-background motion-reduce:transition-none border-[1px]">

      <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2">
        <div className="flex justify-center  rounded-full items-center bg-default-100 bg-transparent text-default-500/50">
          {icon}
        </div>
        <p className="text-sm font-semibold">{title}</p>
      </div>
    </div>
  )
}

const componentFeatures = [
  { id: 0, title: 'Search on options', icon: <SearchIcon /> },
  { id: 1, title: 'Multi select', icon: <CheckSquare /> },
  { id: 2, title: 'Select / deselect all', icon: <SquareDashedMousePointer /> },
  { id: 3, title: 'Filter options based on tag', icon: <Tags /> },
]