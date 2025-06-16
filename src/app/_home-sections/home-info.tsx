import { Button, Container } from '@/components';
import { Plus } from 'lucide-react';

export function HomeInfo() {
  return (
    <div className="border border-white-smoke py-3">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="title-1 font-semibold text-charcoal">Lorem ipsum</h1>

          <span className="body-2 text-placeholder-gray">(12)</span>

          <span className="body-2 text-charcoal">
            Lorem ipsum dolar sit amet
          </span>
        </div>

        <Button>
          <Plus color="white" className="min-w-5 min-h-5" />
          <span className="text-white body-2 font-semibold">Lorem ipsum</span>
        </Button>
      </Container>
    </div>
  );
}
