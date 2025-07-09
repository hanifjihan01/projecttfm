import './globals.css';
import { Metadata } from 'next';
import { primary, secondary } from '@/fonts';
import { AOSInit } from '@/src/utils/aos';

import { cn } from '@/src/utils/shadcn';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/src/components/theme-provider';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Transforme',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'dark',
        primary.variable,
        secondary.variable,
        'text-base leading-[1.875] text-accent-800 [&.dark]:text-body'
      )}
    >
      <AOSInit />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              'bg-white text-accent-800 dark:bg-accent-900 dark:text-body'
            )}
          >
            <main>{children}</main>
          </div>
        </ThemeProvider>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
      </body>
    </html>
  );
}
