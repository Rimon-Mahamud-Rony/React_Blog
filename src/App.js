import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Header />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
