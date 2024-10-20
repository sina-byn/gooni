"use client"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { PanelsTopLeft } from "lucide-react"

export const OpenDashboardButton = () => {
    const { setOpenMobile } = useSidebar()
    return (
        <Button
            variant="ghost"
            className="lg:hidden mb-4"
            onClick={() => setOpenMobile(true)}
        >
            <PanelsTopLeft />
        </Button>
    )
}