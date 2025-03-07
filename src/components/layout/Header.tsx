
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BellRing } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

function UserMenu() {
  const { user, signOut, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <Button variant="outline" asChild>
        <Link to="/login">Sign In</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative rounded-full h-10 w-10 p-0">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.user_metadata?.avatar_url || ""} alt={user.user_metadata?.full_name || user.email || ""} />
            <AvatarFallback>
              {user.user_metadata?.full_name ? user.user_metadata.full_name.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : "U")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="grid gap-6 px-2 py-4">
              <div className="flex items-center gap-2">
                <div className="relative flex h-8 w-8 overflow-hidden rounded-xl bg-gradient-to-br from-primary-purple to-primary-blue">
                  <span className="absolute inset-0 flex items-center justify-center font-medium text-white">S</span>
                </div>
                <span className="text-lg font-semibold">Sarathi</span>
              </div>
              <nav className="grid gap-3">
                <Link
                  to="/"
                  className="flex items-center rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/conversations"
                  className="flex items-center rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Conversations
                </Link>
                <Link
                  to="/analytics"
                  className="flex items-center rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Analytics
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 overflow-hidden rounded-xl bg-gradient-to-br from-primary-purple to-primary-blue">
              <span className="absolute inset-0 flex items-center justify-center font-medium text-white">S</span>
            </div>
            <span className="text-lg font-semibold hidden md:block">Sarathi</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 mx-6">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/conversations"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Conversations
          </Link>
          <Link
            to="/analytics"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Analytics
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button variant="ghost" size="icon">
            <BellRing className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
