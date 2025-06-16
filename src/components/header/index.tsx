import { Actions, SearchBar, Status } from './parts';

export function Header() {
  return (
    <header className="py-2.5 pr-2 pl-2.5 xl:pl-28 bg-charcoal fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center justify-between gap-2">
        <Status status="beta" />

        <SearchBar />

        <Actions />
      </div>
    </header>
  );
}
