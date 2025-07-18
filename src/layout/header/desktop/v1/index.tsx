'use client';

import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { BrandLogo } from '../../../brand-logo';
import { ContactBox, ContactBoxProps } from './contact-box';
import { useStickyHeader } from '../../utils/use-sticky-header';
import { cn } from '@/src/utils/shadcn';
import { Navigation } from '../common/navigation';
import { headerData } from 'data/layout/header/v1';

interface SubMenu {
  title: string;
  subMenuItems: LinkProps[];
}

export interface HeaderProps {
  contactInfo: ContactBoxProps;
  menuItems: (LinkProps | SubMenu)[];
}

export function Header() {
  const { menuItems, contactInfo } = headerData;
  const isSticky = useStickyHeader(700);

  return (
    <header
      className={cn(
        'left-0 right-0 top-0 z-99 mx-auto hidden w-full py-[26px] lg:block',
        isSticky
          ? 'sticky-header fixed left-0 top-0 w-full animate-fadeInDown bg-white/90 backdrop-blur-md [box-shadow:0px_0px_15px_10px_rgba(74,196,243,0.3)] dark:bg-accent-900/90'
          : 'absolute'
      )}
    >
      <Container>
        <div className="flex items-center gap-x-10">
          {/* Brand logo */}
          <div className="flex-none">
            <BrandLogo />
          </div>

          {/* Spacer to push nav and contact to the right */}
          <div className="ml-auto flex items-center gap-x-10">
            {/* Navigation */}
            {menuItems && menuItems.length > 0 && (
              <Navigation menuItems={menuItems} />
            )}

            {/* Contact box */}
            <ContactBox {...contactInfo} />
          </div>
        </div>
      </Container>
    </header>
  );
}
