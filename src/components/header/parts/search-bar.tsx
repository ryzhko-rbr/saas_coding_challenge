'use client';

import { useCallback, useEffect, useState } from 'react';
import { Search } from 'lucide-react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
} from '@/components';

export function SearchBar() {
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => setOpen(true), []);

  const onOpenChange = useCallback(() => setOpen(prev => !prev), []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        onOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onOpen]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="relative w-full max-w-[33.75rem]">
        <Search className="absolute text-placeholder-gray left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
        <Button
          onClick={onOpen}
          className="w-full body-2 pl-10 justify-start pr-2 hover:bg-elevated-dark bg-elevated-dark text-placeholder-gray text-sm rounded-md h-9 border border-gray-foreground">
          Search
        </Button>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
          <kbd className="bg-gray-foreground text-placeholder-gray text-xs px-1.5 py-0.5 rounded">
            ⌘
          </kbd>
          <kbd className="bg-gray-foreground text-placeholder-gray text-xs px-1.5 py-0.5 rounded">
            K
          </kbd>
        </div>
      </div>

      <DialogContent
        className="sm:max-w-2xl pt-10"
        aria-describedby="search-dialog">
        <DialogHeader>
          <DialogHeader>
            <DialogTitle>Search Dialog</DialogTitle>
            <DialogDescription>
              Enter your search query and press enter.
            </DialogDescription>
          </DialogHeader>
          <Input id="query" name="query" />
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onOpenChange}>Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
