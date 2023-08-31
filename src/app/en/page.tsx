import Anchor from '@/components/Anchor';
import Image from 'next/image';

export default function Home() {
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
          Hi, I&apos;m Matheus Moura
        </h1>
        <h2 className='text-2xl text-red-600 tracking-wider mb-6'>
          FullStack Developer
        </h2>
        <p className='mb-4'>
          I work mostly with building light and fast web applications.
        </p>
        <p className='mb-4'>
          I believe that my applications should always be special.
        </p>
        <p className='mb-2'>
          I have already developed a few applications, among them:
        </p>
        <ul className='mb-4 list-disc list-inside space-y-2'>
          <li>
            <Anchor href='https://www.typergame.app/' target='_blank'>
              TyperGame
            </Anchor>
            <span className='text-sm ml-2'>(only portuguese)</span>
          </li>
          <li>
            <Anchor href='https://polyrhythm-chi.vercel.app/' target='_blank'>
              Polyrhythm
            </Anchor>
          </li>
        </ul>
        <p className='mb-4'>
          I&apos;m brazilian, and I live in Uberlândia - MG, Brazil.
        </p>
        <p className='mb-4'>
          You can contact me at{' '}
          <Anchor href='mailto:matheussmoura@outlook.com'>
            matheussmoura@outlook.com
          </Anchor>
          .
        </p>
      </main>
    </>
  );
}
