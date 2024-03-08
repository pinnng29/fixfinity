'use client';

import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { Avatar, AvatarImage } from './ui/avatar';
import { NavigationBar } from './Navigation-Bar';
import ContactButton from './contact-button';

export default function Navbar() {
    return (
        <nav className="flex h-[64px] items-center justify-between border-b border-border px-4 shadow-md">
            <Logo />
            <NavigationBar />
            <div className="flex items-center gap-3">
                <ContactButton />
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                </Avatar>
            </div>
        </nav>
    );
}
