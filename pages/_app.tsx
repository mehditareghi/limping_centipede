import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return <div className='flex flex-col h-full'>
    <header className='bg-gray-500 text-white font-thin'>
      <div className='container flex gap-4 flex-wrap'>
        <Link href='/'>هزارپای لنگ</Link>
        <Link href='/blog'>مقالات</Link>
        <Link href='/about'>دربارهٔ ما</Link>
        <Link href='/contact'>ارتباط با ما</Link>
      </div>
    </header>
    <main className='flex-grow container'>
      <Component {...pageProps} />
    </main>
    <footer className='bg-gray-500 text-white'>
      <div className='container'>
        <p className='font-thin text-center'>تمامی حقوق این وب‌سایت، متعلق به «هزارپای لنگ» می‌باشد.</p>
      </div>
    </footer>
  </div>
}
