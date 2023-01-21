import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
/* import "@/public/fonts/yekanBakh/css/yekanBakh.css"; */

export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <header className='bg-red-500'>
      <Link href='/'>هزارپای لنگ</Link>
      <Link href='/about'>دربارهٔ ما</Link>
      <Link href='/contact'>ارتباط با ما</Link>
    </header>
    <main>
      <Component {...pageProps} />
    </main>
    <footer className='bg-red-500'>
      <p>footer</p>
    </footer>
  </div>)
}
