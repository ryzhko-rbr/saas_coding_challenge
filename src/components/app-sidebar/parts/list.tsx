'use client';

import {
  Collapsible,
  CollapsibleContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { SVGProps } from 'react';

type Item = {
  title: string;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  notifications?: number;
  submenu: Item[];
};

type ListProps = {
  list: Item[];
};

export function List({ list }: ListProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };

  return (
    <SidebarMenu>
      {list.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <Collapsible key={item.title} open={isOpen}>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => toggleIndex(index)}
                className="bg-white hover:bg-light-stone rounded-[0.75rem] h-10.5 px-4">
                <span className="flex items-center gap-2">
                  {item.icon ? (
                    <item.icon className="min-w-5 min-h-5 max-w-5 max-h-5" />
                  ) : (
                    <div className="w-5 h-5" />
                  )}
                  <span className="body-2-loose text-charcoal">
                    {item.title}
                  </span>
                </span>

                <span className="flex items-center gap-2 ml-auto">
                  {item.notifications !== undefined && (
                    <span className="bg-accent rounded-2xl h-5.5 px-1 min-w-6.5 center body-1 text-charcoal">
                      {item.notifications}
                    </span>
                  )}
                  {item.submenu.length > 0 && (
                    <ChevronUp
                      className={cn(
                        'transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  )}
                </span>
              </SidebarMenuButton>

              {item.submenu.length > 0 && isOpen && (
                <div className="pl-6 pr-8 relative">
                  <span className="absolute w-0.5 h-full left-6 top-0 bg-platinum" />
                  {item.submenu.map(menuItem => (
                    <CollapsibleContent
                      key={menuItem.title}
                      className="flex items-center h-10.5 px-4">
                      <div className="flex justify-between items-center w-full">
                        <span className="body-2-loose text-charcoal">
                          {menuItem.title}
                        </span>

                        {menuItem.notifications !== undefined && (
                          <span className="bg-lightgray rounded-2xl h-5.5 px-1 min-w-6.5 center body-1 text-charcoal">
                            {menuItem.notifications}
                          </span>
                        )}
                      </div>
                    </CollapsibleContent>
                  ))}
                </div>
              )}
            </SidebarMenuItem>
          </Collapsible>
        );
      })}
    </SidebarMenu>
  );
}
