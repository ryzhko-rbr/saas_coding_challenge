import { Button } from '@/components';
import { BellRing } from 'lucide-react';

export function Actions() {
  return (
    <div className="flex items-center gap-1.5">
      <Button variant="secondary" className="!max-h-8 px-3.5">
        <span className="body-2 font-semibold text-charcoal">
          Account plans
        </span>
      </Button>

      <Button
        variant="ghost"
        className="hover:bg-gray-foreground !px-1 !max-h-8 ml-2">
        <BellRing color="white" className="min-w-5 min-h-5 max-w-5 max-h-5" />
      </Button>

      <Button
        variant="ghost"
        className="px-2 hover:bg-gray-foreground !max-h-8">
        <span className="body-2 text-white">Support</span>
      </Button>

      <div className="center w-9 h-9 bg-secondary-background rounded-full">
        <span className="body-1 text-charcoal">KC</span>
      </div>
    </div>
  );
}
