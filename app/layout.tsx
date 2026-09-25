import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/providers';

export const metadata: Metadata = {
  title: { default: 'KappaFood — Crispy. Juicy. Irresistible.', template: '%s — KappaFood' },
  description: 'KappaFood premium fast-food ordering experience for Islamabad, Pakistan.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><AppProvider>{children}</AppProvider>

    <script src="https://cdn.zanderio.ai/widget/loader.js" data-id="wdg_rlPsMsOxKr7DZNOnSgBjplrQ" defer></script>
  </body></html>;
}
