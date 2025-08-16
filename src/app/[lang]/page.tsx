import Anchor from '@/components/anchor';
import { type Langs, getDictionary } from './dictionaries';
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

export default async function Home({ params }: { params: { lang: Langs } }) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <header className='py-2 xl:mx-auto xl:max-w-screen-xl'>
        <div className='flex h-10 items-center border-b-2 border-base-300'>
          <h1 className='inline px-2 align-middle text-xl font-extrabold'>
            Matheus Moura
          </h1>
        </div>
      </header>
      <main className='mx-4 leading-relaxed antialiased xl:mx-auto xl:max-w-screen-xl'>
        <section className='relative mb-8'>
          <div className='z-[2] rounded bg-base-200/80 p-4 shadow dark:bg-base-200'>
            <h1 className='bold mb-2 text-6xl font-extrabold tracking-wider'>
              {dict.hi}
            </h1>
            <h2 className='mb-6 text-3xl font-semibold tracking-wider text-primary'>
              {dict.role}
            </h2>
            <p className='mb-4 text-lg'>{dict.slogan}</p>
            <div className='flex gap-2'>
              <a
                className='group block size-10 rounded bg-neutral p-1'
                href='//www.linkedin.com/in/matheus-moura-a142b4177'
                aria-label='Linkedin Profile'
                target='_blank'
              >
                <LinkedInLogoIcon
                  aria-hidden
                  className='size-8 text-neutral-content group-hover:text-primary-content'
                />
              </a>
              <a
                className='group block size-10 rounded bg-neutral p-1'
                href='//github.com/oMatheuss'
                aria-label='GitHub Profile'
                target='_blank'
              >
                <GitHubLogoIcon
                  aria-hidden
                  className='size-8 text-neutral-content group-hover:text-primary-content'
                />
              </a>
            </div>
          </div>
        </section>

        <section className='relative mb-8'>
          <h3 className='mb-2 text-3xl font-semibold'>
            {dict.experiencesTitle}
          </h3>
          <ol className='mb-4 space-y-2'>
            {dict.experiences.map((x, i) => (
              <li key={i} className='rounded bg-base-200 px-4 py-2 shadow'>
                <h4 className='font-medium'>
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

        <section className='relative mb-8'>
          <h3 className='mb-2 text-3xl font-semibold'>{dict.educationTitle}</h3>
          <ol className='mb-4 space-y-2'>
            {dict.education.map((x, i) => (
              <li key={i} className='rounded bg-base-200 px-4 py-2 shadow'>
                <h4 className='font-medium'>{x.location}</h4>
                <p className='text-sm'>
                  {x.start} - {x.end}
                </p>
                <p className='text-sm'>{x.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className='relative mb-8'>
          <h3 className='mb-2 text-3xl font-semibold'>{dict.developed}</h3>
          <ul className='mb-4 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3'>
            {dict.projects.map((repo, i) => (
              <li
                key={i}
                className='flex flex-col rounded bg-base-200 px-4 py-2 shadow'
              >
                <h4 className='mb-2 text-2xl font-bold capitalize leading-tight'>
                  {repo.title}
                </h4>
                <p className='mb-4 text-balance text-lg font-normal'>
                  {repo.description}
                </p>
                <a
                  href={repo.github}
                  title={repo.title}
                  className='group mt-auto inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-center text-sm font-medium text-primary-content hover:bg-primary/90 active:hover:bg-primary/70'
                  role='button'
                  target='_blank'
                >
                  Ver repositório
                  <ArrowRightIcon className='-mr-1 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className='mb-4'>
            {dict.whoami} {dict.contactPhrase}{' '}
            <Anchor href='mailto:matheussmoura@outlook.com'>
              matheussmoura@outlook.com
            </Anchor>
            .
          </p>
        </section>
      </main>
    </>
  );
}
