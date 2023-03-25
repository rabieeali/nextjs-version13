import Posts from './components/Posts';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='my-12 text-3xl text-center dark:text-white'>
        Hello and welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I am <span className='font-bold'>Ali</span>
        </span>
      </p>

      <Posts />
    </main>
  );
}
