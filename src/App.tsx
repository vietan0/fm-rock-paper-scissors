import Header from './Header';
import MainScreen from './MainScreen';
import Rules from './Rules';

export default function App() {
  return (
    <div
      id="App"
      className="min-h-screen bg-bg-gradient px-3 pt-12 text-white xs:px-6"
    >
      <Header />
      <main className="grid h-96 place-content-center">
        <MainScreen />
      </main>
      <Rules />
    </div>
  );
}
