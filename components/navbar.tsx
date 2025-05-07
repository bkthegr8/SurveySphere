"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b border-purple-900/30 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-white">
          <span className="text-purple-500">Survey</span>Sphere
        </Link>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-white">
            <Link href="/browse">Browse</Link>
          </Button>
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-white">
            <Link href="/add-survey">Add Survey</Link>
          </Button>
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-white">
            <Link href="/about">About</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
