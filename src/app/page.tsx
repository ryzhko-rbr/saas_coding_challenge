import { SidebarTrigger } from '@/components';
import { Hero, HomeInfo } from './_home-sections';

export default function Home() {
  return (
    <>
      <div className="mb-12.5 relative">
        <SidebarTrigger className="absolute top-0 left-0 hover:bg-secondary-background" />
        <HomeInfo />
      </div>

      <Hero />
    </>
  );
}
