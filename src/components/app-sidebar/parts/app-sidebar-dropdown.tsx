import {
  Avatar,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconArrows,
} from '@/components';

export function AppSidebarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full bg-white px-2 py-3.5 rounded-2xl flex items-center">
        <span className="flex items-center gap-3">
          <Avatar className="w-9 h-9">
            <AvatarFallback>LI</AvatarFallback>
          </Avatar>

          <span className="column justify-between items-start">
            <p className="text-sm font-semibold leading-tight">Lorem ipsum</p>
            <p className="text-sm text-gray-400">Pro plan</p>
          </span>
        </span>
        <span className="column ml-auto">
          <IconArrows />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="right">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
