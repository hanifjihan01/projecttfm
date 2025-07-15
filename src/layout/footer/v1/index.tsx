'use client';

import { footerSectionData } from '@/data/layout/footer/v1';
import { ImageProps, LinkProps, SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { BrandLogo } from 'src/layout/brand-logo';
import { FaChevronRight } from 'react-icons/fa6';
import { NewsletterForm } from '@/data/layout/footer/v1/NewsletterForm';
import { motion } from 'framer-motion';

interface RecentBlog {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date: string;
  title: string;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export interface FooterSectionProps {
  about: {
    description: string;
    socialLinks: SocialLinkProps[];
  };
  columnOne: {
    title: string;
    links: LinkProps[];
  };
  columnTwo: {
    title: string;
    location: string;
    mails: string[];
    phoneNumbers: string[];
  };
  columnThree: {
    title: string;
    blogs: RecentBlog[];
  };
  footerBottom: {
    copyrightText: string;
    links: LinkProps[];
  };
}

const titleClasses = cn(
  'text-gray-900 dark:text-white text-md font-bold leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]'
);

const addressItemClasses = cn('flex items-center gap-5');
const textColor = cn(
  'transition-colors duration-300 hover:text-primary dark:hover:text-white'
);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Footer({ className }: SectionProps) {
  const { about, columnOne, columnTwo, columnThree, footerBottom } =
    footerSectionData;

  return (
    <footer
      id="contact"
      className={cn(
        'overflow-visible bg-white text-accent-800 dark:bg-accent-900 dark:text-body',
        className
      )}
    >
      <div className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
            {/* About */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeInUp}
            >
              <BrandLogo />
              <p className="mb-7 mt-3">{about.description}</p>
              {about.socialLinks?.length > 0 && (
                <nav aria-label="social links">
                  <ul className="mt-6 flex items-center gap-3">
                    {about.socialLinks.map((socialLink, index) => (
                      <li key={index}>
                        <CustomLink
                          aria-label={socialLink.href}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800"
                          href={socialLink.href}
                          openNewTab
                        >
                          <span className="text-base">{socialLink.icon}</span>
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </motion.div>

            {/* Column one */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
            >
              <h3 className={titleClasses}>{columnOne.title}</h3>
              {columnOne.links?.length > 0 && (
                <nav aria-label="footer links navigation">
                  <ul className="grid gap-2">
                    {columnOne.links.map((link) => (
                      <li
                        key={link.label}
                        className="flex items-center gap-2.5"
                      >
                        <span className="flex-none text-sm/[1] text-gray-900 dark:text-white">
                          <FaChevronRight />
                        </span>
                        <CustomLink
                          href={link.href}
                          openNewTab={link.openNewTab}
                          className={textColor}
                        >
                          {link.label}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </motion.div>

            {/* Column Two */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeInUp}
            >
              <h3 className={titleClasses}>{columnTwo.title}</h3>
              <ul aria-label="addresses" className="grid gap-5">
                <li className={addressItemClasses}>
                  <address className="not-italic">{columnTwo.location}</address>
                </li>
                <li className={addressItemClasses}>
                  <div className="grid gap-1">
                    {columnTwo.mails.map((mail, index) => (
                      <a
                        key={index}
                        href={`mailto:${mail}`}
                        className={textColor}
                      >
                        {mail}
                      </a>
                    ))}
                  </div>
                </li>
                <li className={addressItemClasses}>
                  <div className="grid gap-1">
                    {columnTwo.phoneNumbers.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.split(' ').join('')}`}
                        className={textColor}
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Column three */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeInUp}
            >
              <h3 className={titleClasses}>{columnThree.title}</h3>
              <NewsletterForm />
            </motion.div>
          </div>
        </Container>
      </div>

      <div className="flex min-h-[90px] items-center border-t border-accent-800 border-opacity-20 bg-black py-5 text-white dark:border-body dark:border-opacity-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 md:gap-x-10">
            <p>{footerBottom.copyrightText}</p>
            {footerBottom.links?.length > 0 && (
              <nav aria-label="footer bottom navigation">
                <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-7">
                  {footerBottom.links.map((link) => (
                    <li key={link.label}>
                      <CustomLink
                        aria-label={`Go to page ${link.label}`}
                        href={link.href}
                        openNewTab={link.openNewTab}
                        className={textColor}
                      >
                        {link.label}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </Container>
      </div>
    </footer>
  );
}
