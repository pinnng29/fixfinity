'use client';

import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { Avatar, AvatarImage } from './ui/avatar';
import { NavigationMenuBar } from './Navigation-Bar';

export default function Navbar() {
    // const { user } = useUser();

    return (
        <nav className="flex h-[64px] items-center justify-between border-b border-border px-4 shadow-md">
            <Logo />
            <NavigationMenuBar />
            <div className="flex items-center gap-3">
                <ThemeSwitcher />
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                </Avatar>
            </div>
        </nav>

        // <nav className="flex h-[64px] items-center justify-between border-b border-border px-4 shadow-md">
        //     <Logo />
        //     <div className="flex items-center gap-4">
        //         {user && (
        //             <Button
        //                 asChild
        //                 variant={'link'}
        //             >
        //                 <Link
        //                     href={'/'}
        //                     className="text-lg"
        //                 >
        //                     Home
        //                 </Link>
        //             </Button>
        //         )}
        //         <ThemeSwitcher />
        //         {user && <UserButton afterSignOutUrl="/" />}
        //         {!user && (
        //             <Button
        //                 variant={'secondary'}
        //                 className="flex items-center gap-2 font-bold text-foreground"
        //             >
        //                 <LogIn className="h-5 w-5" />
        //                 <SignInButton
        //                     afterSignInUrl="/"
        //                     mode="modal"
        //                 />
        //             </Button>
        //         )}
        //     </div>
        // </nav>
    );
}
