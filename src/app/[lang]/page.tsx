import Anchor from '@/components/Anchor';
import Image from 'next/image';
import { type Langs, getDictionary } from './dictionaries';

export default async function Home({ params }: { params: { lang: Langs } }) {
  const dict = await getDictionary(params.lang);
  return (
    <>
      <nav className='mb-8'>
        <hr className='border-y-4 border-red-600' />
      </nav>
      <main className='text-lg mx-2 sm:max-w-prose sm:mx-auto leading-relaxed antialiased'>
        <Image
          src='/android-chrome-192x192.png'
          width={192}
          height={192}
          alt='Logo'
          className='h-12 w-12 rounded-md mb-4'
        />
        <h1 className='text-4xl text-black bold mb-2 tracking-wider font-extrabold dark:text-white'>
          {dict.hi}
        </h1>
        <h2 className='text-2xl text-red-600 tracking-wider mb-6'>
          {dict.role}
        </h2>
        <p className='mb-4'>{dict.slogan}</p>
        <p className='mb-2'>{dict.developed}</p>
        <ul className='mb-4 list-disc list-inside space-y-2'>
          <li>
            <Anchor href='https://polyrhythm-chi.vercel.app/' target='_blank'>
              Polyrhythm
            </Anchor>
          </li>
        </ul>
        <p className='mb-4'>{dict.whoami}</p>
        <p className='mb-4'>
          {dict.contactPhrase}{' '}
          <Anchor href='mailto:matheussmoura@outlook.com'>
            matheussmoura@outlook.com
          </Anchor>
          .
        </p>
      </main>
    </>
  );
}
