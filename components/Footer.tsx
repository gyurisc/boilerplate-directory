import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-8 px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-2">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Boilerplate Directory. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium text-gray-500 hover:text-vibrant-purple transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-500 hover:text-vibrant-purple transition-colors">
            Contact
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-500 hover:text-vibrant-purple transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

