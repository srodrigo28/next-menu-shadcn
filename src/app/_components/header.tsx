"use client"

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {  href: '#', label: 'Profissionais' },
        {  href: '#', label: 'Contatos' },
    ]

    const NavLinks = () => (
        <>
            {navItems.map((item) => (
                <Button key={item.label} variant="link" 
                    onClick={() => setIsOpen(false)} 
                    className="border-2 border-green-500 w-28 
                    hover:bg-green-600 text-black shadow-none">
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </Button>
            ))}
        </>
    )

    return(
        <header className="fixed top-0 left-0 right-0 z-[99] bg-slate-100 py-5 border-b">
            <div className="container mx-auto flex items-center justify-between px-5">
                <Link href="" className="text-3xl font-bold text-zinc-900">
                    Logo<span className="text-green-600">Pro</span>
                </Link>


                <nav className="hidden md:flex gap-2">
                    <NavLinks />
                </nav>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="bg-green-600">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[250px] px-4 sm:w-[300px] z-[999]">
                        <SheetTitle className="pt-4">Menu</SheetTitle>
                        <SheetHeader />
                        <SheetDescription>Veja nossos Links</SheetDescription>

                        <nav className="flex flex-col space-y-4 mt-4">
                            <NavLinks />
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}