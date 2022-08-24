import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <header>
       <Header></Header>
       <Shop></Shop>
      </header>
    </div>
  );
}

export default App;
