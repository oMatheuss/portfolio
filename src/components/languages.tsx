export default async function Languages({ url }: { url: string }) {
  const res: { [lang: string]: number } = await fetch(url).then((x) =>
    x.json()
  );
  const langs = Object.keys(res);
  return (
    <p className='flex text-xs truncate'>
      {langs.map((lang) => (
        <span key={lang} className='bg-red-600 p-1 mr-2 rounded font-bold text-red-200'>
          {lang}
        </span>
      ))}
    </p>
  );
}
