import MainLayout from '@/components/layouts/Layout';
import Main from '@/components/templates/main/Main';

function Home() {
  return (
    <MainLayout>
      <main className='main'>
        <Main />
      </main>
    </MainLayout>
  )
};

export default Home;