import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="text-lg font-bold text-blue-600">Boilerplate Directory</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-blue-700">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
            Submit Boilerplate
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
            asChild
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

