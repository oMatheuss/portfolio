import Anchor from '@/components/anchor';
import Image from 'next/image';
import { type Langs, getDictionary } from './dictionaries';
import { Octokit } from 'octokit';
import Languages from '@/components/languages';

export default async function Home({ params }: { params: { lang: Langs } }) {
  const dict = await getDictionary(params.lang);

  const octokit = new Octokit({});
  const res = await octokit.request('GET /users/{username}/repos', {
    username: 'oMatheuss',
    page: 1,
    per_page: 4,
    sort: 'pushed',
    type: 'owner',
  });

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
        <ul className='mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {res.data.map((repo) => (
            <li
              key={repo.id}
              className='hover:-translate-y-1 transition-transform border border-red-600 p-4 h-full rounded shadow shadow-red-600'
            >
              <a
                href={repo.html_url}
                target='_blank'
                className='hover:text-red-600 hover:underline'
              >
                <h3 className='font-extrabold mb-2'>{repo.name}</h3>
              </a>
              <Languages url={repo.languages_url} />
              <p className='text-sm truncate'>{repo.description}</p>
            </li>
          ))}
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
