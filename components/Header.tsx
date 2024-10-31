import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Header = ({ children, className }: HeaderProps) => {
    return (
        <div className={cn("header",className)}>
            <Link href="/" className="md:flex-1">
                <div className="flex text-center items-center font-bold gap-1">
                <Image
                    src="/assets/icons/logo-icon.svg"
                    alt="logo"
                    width={32}
                    height={32}
                    className="hidden md:block"
                />
                <span className="hidden md:block">
                    DocHub
                </span>
                </div>
                <Image
                    src="/assets/icons/logo-icon.svg"
                    alt="logo"
                    width={32}
                    height={32}
                    className="md:hidden mr-2"
                />
            </Link>
            {children}
        </div>
    );
};

export default Header;
