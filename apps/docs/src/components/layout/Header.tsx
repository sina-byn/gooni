import { Github, Menu, PackageOpen } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export const Header = () => {
    return (
        <>
            <header
                className={`sticky top-0  backdrop-blur-sm transition-all duration-200 border-b transition-colors border-foreground/10 px-4 md:px-6 z-50`}
            >
                <div className="flex items-center gap-4 max-w-[1440px] mx-auto  h-16">
                    <nav className="hidden flex-1 flex text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                        <Link
                            href="/"
                            className="flex text-gray-100 items-center gap-2 text-lg font-semibold md:text-base text-white hover:text-white"
                        >
                            <PackageOpen className="h-6 w-6 text-primary" />
                            <span>Gooni</span>
                        </Link>
                    </nav>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-background text-foreground">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-lg font-semibold  text-white hover:text-white"
                                >
                                    <PackageOpen className="h-6 w-6" />
                                    <span>Gooni</span>
                                </Link>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/documentation/filterable-option-list"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Documentation
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="flex w-full flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 flex-row-reverse">
                        <a
                            href="https://github.com/hsnards/gooni"
                            rel="noreferrer noopener"
                            target="_blank"
                            aria-label="GitHub"
                            className="text-gray-600 dark:text-gray-300 "
                        >
                            <Github className="h-5 w-5" />
                        </a>

                        <Button asChild variant="ghost">
                            <Link href="/documentation/filterable-option-list">
                                Documentation
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
};
