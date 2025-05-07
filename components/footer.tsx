import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-purple-900/30 bg-black/40 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl text-white">
              <span className="text-purple-500">Survey</span>Sphere
            </Link>
            <p className="text-sm text-muted-foreground mt-1">A community-driven survey platform</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              Created by <span className="text-purple-400">B K Danush</span>
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <Mail className="h-3 w-3" />
              <a href="mailto:danushbk16@gmail.com" className="hover:text-purple-400 transition-colors">
                danushbk16@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-purple-900/30 text-sm text-muted-foreground">
          <div className="flex gap-6">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/browse" className="hover:text-purple-400 transition-colors">
              Browse
            </Link>
            <Link href="/add-survey" className="hover:text-purple-400 transition-colors">
              Add Survey
            </Link>
            <Link href="/about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
          </div>
          <div>&copy; {new Date().getFullYear()} SurveySphere. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
