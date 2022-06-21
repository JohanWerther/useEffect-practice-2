import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Counter from './componentes/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container py-5">
        <Counter />
      </main>
    </div>
  );
}

export default App;
