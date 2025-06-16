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
      <DropdownMenuTrigger className="w-full bg-white pl-2 pr-1.5 py-3.5 rounded-2xl flex items-center">
        <span className="flex items-center gap-3">
          <Avatar className="w-9 h-9">
            <AvatarFallback>
              <span className="body-1 text-charcoal">LI</span>
            </AvatarFallback>
          </Avatar>

          <span className="column items-start">
            <p className="title-2 font-semibold text-charcoal">Lorem ipsum</p>
            <p className="body-2-tight text-placeholder-gray">Pro plan</p>
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
