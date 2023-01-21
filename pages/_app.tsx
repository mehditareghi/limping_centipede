import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return <div className='flex flex-col h-full'>
    <header className='bg-red-500 flex gap-2 flex-wrap'>
      <Link href='/'>هزارپای لنگ</Link>
      <Link href='/blog'>مقالات</Link>
      <Link href='/about'>دربارهٔ ما</Link>
      <Link href='/contact'>ارتباط با ما</Link>
    </header>
    <main className='flex-grow'>
      <Component {...pageProps} />
    </main>
    <footer className='bg-red-500'>
      <p>footer</p>
    </footer>
  </div>
}
