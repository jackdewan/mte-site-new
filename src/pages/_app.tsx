import "@/styles/globals.css";
import "@/styles/flippin.css";
import "@/styles/line.css";

import type { AppProps } from "next/app";

import { MainLayout } from "@/components/layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
