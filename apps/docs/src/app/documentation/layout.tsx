import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OpenDashboardButton } from "./_components/OpenDashboardButton";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex container mx-auto">
        <Sidebar />
        <main className="flex-1 py-4 lg:p-6 grow-1 overflow-x-hidden ">
          <OpenDashboardButton />
          {children}
        </main>

      </div>
    </SidebarProvider>

  );
}
