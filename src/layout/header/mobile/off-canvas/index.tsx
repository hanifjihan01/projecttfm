import { ScrollArea } from '@/src/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { cn } from '@/src/utils/shadcn';

import { X } from 'lucide-react';
import { HeaderProps } from '../../desktop/v1';
import { Navigation } from '../navigation';
import { MdMenu } from 'react-icons/md';
import { BrandLogo } from '@/src/layout/brand-logo';

export function OffCanvas({ menuItems }: Pick<HeaderProps, 'menuItems'>) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Mobile hamburger menu"
        aria-controls="mobile-hamburger-menu"
        className={cn(
          'group text-[2rem]/[1] text-primary transition-colors duration-300 hover:text-primary-light'
        )}
      >
        <MdMenu className="icon-menu" id="mobile-hamburger-menu" />
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="z-444 h-[44vh] !max-w-[300px] border-none bg-white p-0 dark:bg-black"
      >
        <ScrollArea viewportClassName={cn('h-[70vh]')} scrollBarClassName="w-0">
          <div className="grid gap-8">
            {/* Logo area  */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white/90 px-5 py-3 shadow-sm backdrop-blur-sm dark:bg-black/90">
              <BrandLogo />
              <SheetClose className="data-[state=open]:bg-secondary rounded-sm text-accent-900 ring-offset-0 transition-colors hover:text-primary focus:outline-none  focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none  dark:text-white dark:hover:text-primary">
                <X className="h-8 w-8" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>

            <Navigation menuItems={menuItems} />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
