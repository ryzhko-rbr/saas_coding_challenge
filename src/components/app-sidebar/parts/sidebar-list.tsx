'use client';

import { MessageCircle, Plus, Send, Share2, Users } from 'lucide-react';

import {
  Button,
  IconHome,
  IconPuzzle,
  IconSettings,
  SidebarGroupContent,
} from '@/components';
import { List } from './list';

const mainNav = [
  {
    title: 'Home',
    icon: IconHome,
    submenu: [],
  },
  {
    title: 'Chats',
    icon: MessageCircle,
    notifications: 32,
    submenu: [
      {
        title: 'Unassigned',
        notifications: 20,
        submenu: [],
      },
    ],
  },
  {
    title: 'Central',
    notifications: 32,
    submenu: [
      {
        title: 'Unassigned',
        notifications: 20,
        submenu: [],
      },
      {
        title: 'Assigned to me',
        notifications: 12,
        submenu: [],
      },
      {
        title: 'Unread',
        notifications: 32,
        submenu: [],
      },
      {
        title: 'Trash',
        submenu: [],
      },
    ],
  },
  {
    title: 'Test inbox',
    notifications: 0,
    submenu: [
      {
        title: 'Unassigned',
        notifications: 20,
        submenu: [],
      },
    ],
  },
];

const automationNav = [
  { title: 'Automation', icon: Share2, submenu: [] },
  {
    title: 'Contacts',
    icon: Users,
    submenu: [
      {
        title: 'Unread',
        notifications: 32,
        submenu: [],
      },
    ],
  },
  {
    title: 'Campaigns',
    icon: Send,
    submenu: [
      {
        title: 'Unread',
        notifications: 32,
        submenu: [],
      },
    ],
  },
];

const settingsNav = [
  { title: 'Integrations', icon: IconPuzzle, submenu: [] },
  { title: 'Settings', icon: IconSettings, submenu: [] },
];

export function SidebarList() {
  return (
    <SidebarGroupContent className="flex flex-col h-full overflow-hidden">
      <div className="overflow-y-auto mb-2">
        <List list={mainNav} />

        <Button
          className="flex items-center justify-start w-full hover:bg-secondary-background rounded-[0.75rem]"
          variant="ghost">
          <Plus className="min-w-5 min-h-5 max-w-5 max-h-5 text-placeholder-gray" />
          <span className="text-placeholder-gray body-2-loose">
            Add new inbox
          </span>
        </Button>

        <List list={automationNav} />
      </div>

      <div className="mt-auto">
        <List list={settingsNav} />
      </div>
    </SidebarGroupContent>
  );
}
