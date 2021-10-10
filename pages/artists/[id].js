import { useRouter } from 'next/dist/client/router';

const ArtistPage = () => {
  const router = useRouter();
  const id = router.query.id;

  console.log(id);

  return (
    <div>
      <main>
        <h1>Artist Page</h1>
      </main>
    </div>
  );
};

export default ArtistPage;
