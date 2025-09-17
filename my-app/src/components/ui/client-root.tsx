'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from '@/components/ui/toaster';
import { SmoothScroll } from '@/components/ui/smooth-scroll';
import { YandexMetrica } from '@/components/analytics/yandex-metrica';
import { CookieConsent } from '@/components/ui/cookie-consent';
import { usePathname } from 'next/navigation';

const FixedViewport = dynamic(() => import('@/components/ui/fixed-viewport'), { ssr: false });

type ClientRootProps = {
  children: React.ReactNode;
};

const ClientRoot: React.FC<ClientRootProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [disableFixed, setDisableFixed] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    handle();
    window.addEventListener('resize', handle);
    window.addEventListener('orientationchange', handle);
    return () => {
      window.removeEventListener('resize', handle);
      window.removeEventListener('orientationchange', handle);
    };
  }, []);

  const content = (
    <>
      <SmoothScroll />
      {children}
      <Toaster />
      <YandexMetrica id={process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || '104148332'} />
      <CookieConsent className="custom-cookie-banner" cookiePolicyUrl="/privacy" />
    </>
  );

  // Determine per-page override in an effect to avoid SSR/client mismatch
  React.useEffect(() => {
    const el = document.getElementById('no-fixed-viewport');
    // Disable FixedViewport for main page and 404 page
    setDisableFixed(!!el || pathname === '/404' || pathname === '/');
  }, [pathname]);

  const shouldWrap = Boolean(isMobile && !disableFixed);

  // Debug logging
  console.log('ClientRoot debug:', { isMobile, disableFixed, shouldWrap, pathname });

  return shouldWrap ? <FixedViewport>{content}</FixedViewport> : content;
};

export default ClientRoot;
