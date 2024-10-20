import Link from "next/link";
import { Github, Package } from "lucide-react";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="w-full  px-4 sm:px-6 lg:px-8">
      <Separator />

      <div className="max-w-7xl py-4 mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-100">
        <p>&copy; {new Date().getFullYear()} Gooni. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link
            href="https://www.npmjs.com/package/gooni"
            className="text-gray-200"
            aria-label="npm"
          >
            <Package size={20} />
          </Link>
          <Link
            href="https://github.com/hsnards/gooni"
            className="text-gray-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
