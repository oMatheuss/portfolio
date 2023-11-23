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

        <section>
          <h3 className='mb-2 font-bold'>{dict.experiencesTitle}</h3>
          <ol className='mb-4 list-none list-inside space-y-4'>
            {dict.experiences.map((x, i) => (
              <li
                key={i}
                className='border-4 border-red-600 rounded p-4 h-full shadow'
              >
                <h4 className='font-bold'>
                  {x.company} - {x.role}
                </h4>
                <p className='text-sm'>
                  {x.start} - {x.end}
                </p>
                <p className='text-sm'>{x.responsibilities}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h3 className='mb-2 font-bold'>{dict.educationTitle}</h3>
          <ol className='mb-4 list-none list-inside space-y-4'>
            {dict.education.map((x, i) => (
              <li
                key={i}
                className='border-4 border-red-600 rounded p-4 h-full shadow'
              >
                <h4 className='font-bold'>{x.location}</h4>
                <p className='text-sm'>
                  {x.start} - {x.end}
                </p>
                <p className='text-sm'>{x.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h3 className='mb-2 font-bold'>{dict.developed}</h3>
          <ul className='mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {res.data.map((repo) => (
              <li
                key={repo.id}
                className='border-4 border-red-600 rounded p-4 h-full shadow'
              >
                <a href={repo.html_url} target='_blank'>
                  <h3 className='hover:text-red-600 uppercase text-sm text-gray-800 dark:text-gray-300 font-extrabold'>
                    {repo.name}
                  </h3>
                </a>
                <Languages url={repo.languages_url} />
                <p className='text-sm truncate mt-2'>{repo.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className='mb-4'>
          {dict.whoami} {dict.contactPhrase}{' '}
          <Anchor href='mailto:matheussmoura@outlook.com'>
            matheussmoura@outlook.com
          </Anchor>
          .
        </p>
      </main>
    </>
  );
}
