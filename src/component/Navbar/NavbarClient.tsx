"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

interface NavbarClientPageProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavbarClientPage({
  mobile = false,
  onNavigate,
}: NavbarClientPageProps) {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    onNavigate?.();
  };

  return (
    <div
      className={
        mobile
          ? "flex flex-col items-start gap-4"
          : "hidden items-center gap-5 md:flex lg:gap-8"
      }
    >
      {user ? (
        <>
          <Link
            onClick={onNavigate}
            className={`flex items-center gap-2 ${
              pathname === "/profile"
                ? "text-[#15A1BF] underline underline-offset-8"
                : "hover:text-[#15A1BF]"
            }`}
            href="/profile"
          >
            <FaUser />
            <span>Profile</span>
          </Link>

          <Popover>
            <PopoverTrigger >
              <button type="button" aria-label="Open user menu">
                <Avatar className="h-[50px] w-[50px]">
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={user.image ?? ""}
                    alt={user.name ?? "User"}
                  />
                  <AvatarFallback>
                    {user.name?.charAt(0) ?? "U"}
                  </AvatarFallback>
                </Avatar>
              </button>
            </PopoverTrigger>

            <PopoverContent>
              <PopoverHeader className="text-center">
                <PopoverTitle>{user.name}</PopoverTitle>
                <PopoverDescription>
                  {user.email}
                </PopoverDescription>
              </PopoverHeader>

              <button
                onClick={handleSignOut}
                className="mt-3 w-full rounded-xl bg-red-400 px-3 py-2 text-black"
              >
                Sign Out
              </button>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <>
          <Link
            onClick={onNavigate}
            className={
              pathname === "/login"
                ? "text-[#15A1BF] underline underline-offset-8"
                : "hover:text-[#15A1BF]"
            }
            href="/login"
          >
            Login
          </Link>

          <Link
            onClick={onNavigate}
            className={
              pathname === "/signUp"
                ? "text-[#15A1BF] underline underline-offset-8"
                : "hover:text-[#15A1BF]"
            }
            href="/signUp"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}