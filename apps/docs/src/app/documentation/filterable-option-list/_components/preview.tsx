'use client'
import { FilterableOptionList } from "@/components/FilterableOptionList"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"
import { sampleOptions, sampleTagsList } from "@/app/_components/Benefits"

export function FilterableOptionListPreview() {
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