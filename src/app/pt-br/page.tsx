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
          Oi, eu sou Matheus Moura
        </h1>
        <h2 className='text-2xl text-red-600 tracking-wider mb-6'>
          Desenvolvedor FullStack
        </h2>
        <p className='mb-4'>
          Trabalho principalmente com aplicações web que devem ser rapidas e
          leves.
        </p>
        <p className='mb-4'>
          Acredito que minhas aplicações devem sempre ser especiais.
        </p>
        <p className='mb-2'>Já desenvolvi diversas aplicações, dentre elas:</p>
        <ul className='mb-4 list-disc list-inside space-y-2'>
          <li>
            <Anchor href='https://www.typergame.app/' target='_blank'>
              TyperGame
            </Anchor>
          </li>
          <li>
            <Anchor href='https://polyrhythm-chi.vercel.app/' target='_blank'>
              Polyrhythm
            </Anchor>
          </li>
        </ul>
        <p className='mb-4'>Sou brasileiro, e moro em Uberlândia - MG.</p>
        <p className='mb-4'>
          Você pode me contatar no meu email:{' '}
          <Anchor href='mailto:matheussmoura@outlook.com'>
            matheussmoura@outlook.com
          </Anchor>
          .
        </p>
      </main>
    </>
  );
}
