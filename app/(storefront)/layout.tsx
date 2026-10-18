import { AiChatFloatingButton } from "components/ai-chat/floating-button";
import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { WelcomeToast } from "components/welcome-toast";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import { ReactNode, Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const { NEXT_PUBLIC_SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: NEXT_PUBLIC_SITE_NAME!,
    template: `%s | ${NEXT_PUBLIC_SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <CartProvider cartPromise={cart}>
      <Navbar />
      <main className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Suspense>{children}</Suspense>
        <Toaster closeButton />
        <WelcomeToast />
      </main>
      <AiChatFloatingButton />
    </CartProvider>
  );
}
