import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Portfolio of R.S."
        description="R.S.のポートフォリオ"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url: 'https://rs2025portfolio.com/',
          site_name: 'R.S.のポートフォリオ',
          images: [
            {
              url: 'https://example.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'R.S.のポートフォリオ',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
