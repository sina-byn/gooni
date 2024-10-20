"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "./ui/badge";

const components = [
  {
    name: "FilterableOptionList",
    href: "/documentation/filterable-option-list",
  },

];

export function Sidebar() {
  const pathname = usePathname();

  return (
      <ShadcnSidebar className="w-64 border-r">
        <SidebarHeader>
          <Link href="/" className="flex items-center space-x-2 py-2">
            <span className="text-2xl font-bold">Documentation</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Components</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {components.map((component) => (
                  <SidebarMenuItem key={component.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === component.href}
                    >
                      <Link href={component.href}>{component.name}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>utils</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton disabled>
                    <Link href={"/installation"}>matchQueryStatus</Link>
                    <Badge className="ml-2 bg-[#adfa1d]">Soon</Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </ShadcnSidebar>
  );
}
