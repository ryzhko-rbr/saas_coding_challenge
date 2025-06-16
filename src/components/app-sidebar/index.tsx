import { Sidebar, SidebarContent, SidebarGroup } from '@/components';
import { AppSidebarDropdown, SidebarList } from './parts';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="mb-4">
            <AppSidebarDropdown />
          </div>

          <SidebarList />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
