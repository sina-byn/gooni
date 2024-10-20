import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FilterableOptionListPreview } from "./_components/preview";
import { Separator } from "@/components/ui/separator";
import CodeBlock from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";

export default function FilterableOptionListPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Filterable Option List
      </h1>

      <p className="text-base md:text-lg mb-6 text-muted-foreground">
        A component like autocomplete can filter the options with search input and a list of tags.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mb-4">Installation</h2>
      <Separator className="my-4" />

      <div className="bg-gray-400/10 p-4 rounded-md mt-4">
        <h6 className="text-xs font-semibold mb-2 relative">CLI

          <CopyButton textToCopy="npx gooni@latest add filterable-option-list" />
        </h6>

        <pre className="overflow-x-auto relative">
          <code className="text-sm text-muted-foreground">
            npx gooni@latest add filterable-option-list
          </code>
        </pre>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Usage</h2>
      <Separator className="my-4" />

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <FilterableOptionListPreview />
        </TabsContent>
        <TabsContent value="code" className="text-sm">
          <div className="bg-gray-400/10 p-4 rounded-md mt-4">
            <div className="overflow-x-auto">
              <div className="text-sm text-muted-foreground">
                <CodeBlock code={`export function FilterableOptionListPreview() {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    sampleOptions.map((item) => item.id)
  )

  return (
    <div className="border rounded-md p-4 h-[700px] flex gap-4 my-4">
      <FilterableOptionList
        options={sampleOptions}
        tagsList={sampleTagsList}
        selectedOptions={selectedOptions}
        onSelectedOptionsChange={setSelectedOptions}
      />

      <Button
        variant="ghost"
        onClick={() => setSelectedOptions([])}
        disabled={selectedOptions.length === 0}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
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
 `} />
              </div>
            </div>

          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
