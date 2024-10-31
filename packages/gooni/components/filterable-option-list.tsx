import { useState, useMemo, useEffect } from "react";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type GenericTag<B> = B & {
  id: number;
  label: string;
};

type GenericOption<T> = T & {
  id: number;
  label: string;
  tags: number[];
};

interface Props<T, B> {
  tagsList: GenericTag<B>[];
  selectedOptions: number[];
  options: GenericOption<T>[];
  onSelectedOptionsChange: (selectedOptions: number[]) => void;
}


export const FilterableOptionList = <T, B>(props: Props<T, B>) => {
  const { options, tagsList, selectedOptions, onSelectedOptionsChange } = props;

  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [internalSelectedOptions, setInternalSelectedOptions] = useState<
    number[]
  >(selectedOptions || []);

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tagId) => option.tags.includes(tagId));
      const matchesSearch = option.label
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesTags && matchesSearch;
    });
  }, [options, selectedTags, searchTerm]);

  const tagCounts = useMemo(() => {
    const counts: { [key: number]: number } = {};
    internalSelectedOptions.forEach((optionId) => {
      const option = options.find((opt) => opt.id === optionId);
      if (option) {
        option.tags.forEach((tagId) => {
          counts[tagId] = (counts[tagId] || 0) + 1;
        });
      }
    });
    return counts;
  }, [options, internalSelectedOptions]);

  const allFilteredSelected = useMemo(() => {
    return filteredOptions.every((option) =>
      internalSelectedOptions.includes(option.id)
    );
  }, [filteredOptions, internalSelectedOptions]);

  useEffect(() => {
    setInternalSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  const handleTagToggle = (tagId: number) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleOptionToggle = (optionId: number) => {
    setInternalSelectedOptions(
      internalSelectedOptions.includes(optionId)
        ? internalSelectedOptions.filter((id) => id !== optionId)
        : [...internalSelectedOptions, optionId]
    );
  };

  const handleToggleAll = () => {
    if (allFilteredSelected) {
      setInternalSelectedOptions(
        internalSelectedOptions.filter(
          (id) => !filteredOptions.some((option) => option.id === id)
        )
      );
    } else {
      const newSelectedOptions = Array.from(
        new Set([
          ...internalSelectedOptions,
          ...filteredOptions.map((option) => option.id),
        ])
      );
      setInternalSelectedOptions(newSelectedOptions);
    }
  };

  const handleCanceling = () => {
    setOpen(false);
    setTimeout(() => {
      setSearchTerm("");
      setSelectedTags([]);
      setInternalSelectedOptions(selectedOptions);
    }, 500);
  };

  const handleApplying = () => {
    setOpen(false);
    onSelectedOptionsChange(internalSelectedOptions);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={selectedOptions.length > 0 ? "default" : "secondary"}
          className="justify-between"
        >
          <span>
            Filter Button:
            <span>
              {" " + getFilterButtonActiveText(selectedOptions, options)}
            </span>
          </span>

          {open ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[364px] p-4"
        avoidCollisions={false}
        side="bottom"
        align="start"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {tagsList.map((tag) => (
            <Badge
              key={tag.id}
              className="cursor-pointer"
              onClick={() => handleTagToggle(tag.id)}
              variant={selectedTags.includes(tag.id) ? "default" : "outline"}
            >
              {tag.label}
              {tagCounts[tag.id] && (
                <span className="ml-1 bg-white text-gray-900 rounded-full w-4 h-4 inline-flex items-center justify-center text-xs">
                  {tagCounts[tag.id]}
                </span>
              )}
            </Badge>
          ))}
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-8"
            value={searchTerm}
            placeholder="Search option"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredOptions.length > 0 && (
          <div className="flex items-center mb-2">
            <div
              className="flex items-center space-x-2 w-full px-2 py-1 hover:bg-accent rounded-md cursor-pointer"
              onClick={handleToggleAll}
            >
              <Checkbox
                className="data-[state=indeterminate]:bg-primary"
                checked={allFilteredSelected || (!allFilteredSelected && internalSelectedOptions.length > 0 ? 'indeterminate' : false)}
              />
              <p className="text-sm">
                {filteredOptions?.length} items {getTagsCount(selectedTags?.length) || '(all tags)'}
              </p>
            </div>
          </div>
        )}

        <Separator className="my-2" />

        <ScrollArea className="h-[250px]">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => handleOptionToggle(option.id)}
                className="flex items-center space-x-2 w-full px-2 py-2 hover:bg-accent rounded-md cursor-pointer"
              >
                <Checkbox
                  id={`option-${option.id}`}
                  checked={internalSelectedOptions.includes(option.id)}
                />
                <label
                  htmlFor={`option-${option.id}`}
                  className="text-sm font-medium pointer-events-none"
                >
                  {option.label}
                </label>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No results found.</p>
          )}
        </ScrollArea>

        <Separator className="my-2" />

        <div className="flex items-center justify-between pt-4">
          <span className="text-sm text-muted-foreground">
            {getSelectedOptionsText(internalSelectedOptions, options)}
          </span>
          <div className="space-x-2">
            <Button variant={"ghost"} onClick={handleCanceling}>
              Cancel
            </Button>
            <Button onClick={handleApplying}>Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const getTagsCount = (count: number) => (count > 0 ? `(${count} tags)` : "");

const getFilterButtonActiveText = <T,>(
  selectedOptions: number[],
  options: GenericOption<T>[]
): string => {
  if (selectedOptions.length === options.length) {
    return "All";
  } else if (selectedOptions.length === 1)
    return `${options.find((opt) => opt.id === selectedOptions[0])?.label}`;
  else if (selectedOptions.length > 1)
    return `${selectedOptions.length} options`;
  return "";
};


export const getSelectedOptionsText = <T,>(selectedOptions: number[], options: GenericOption<T>[]): string => {
  if (selectedOptions?.length === options?.length) {
    return 'All items selected';
  } else if (selectedOptions?.length === 1) return `${options.find((opt) => opt.id === selectedOptions[0])?.label}`;
  else if (selectedOptions?.length > 1) return `${selectedOptions?.length} items selected`;
  return '';
};