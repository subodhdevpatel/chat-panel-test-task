import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export default function Home() {
  return (
    <section className="h-screen flex flex-col flex-1  bg-white w-full">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
