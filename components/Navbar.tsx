'use client';

import Logo from './Logo';
import { Avatar, AvatarImage } from './ui/avatar';
import { NavigationBar } from './Navigation-Bar';
import ContactButton from './contact-button';

export default function Navbar() {
    return (
        <div className="flex flex-col bg-background">
            <nav className="flex items-center justify-between border-border border-b h-[64px] px-6 py-2 shadow-md">
                    <Logo />
                    <NavigationBar />
                <div className="flex items-center gap-x-3">
                    <ContactButton />
                    <Avatar>
                        <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        />
                    </Avatar>
                </div>
            </nav>
        </div>
    );
}
