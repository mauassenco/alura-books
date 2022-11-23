import './App.css';
import Logo from './components/Logo';
import profile from './images/perfil.svg'
import cart from './images/sacola.svg'

const navItens = ['Categories', 'My Bookshelf', 'Favorites']
const icons = [profile, cart]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='App-nav'>
          {navItens.map((item) => (
            <li className='App-nav-item'>
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <ul className="App-side-nav">
          {icons.map((icon) => (
            <li>
              <img src={icon} alt="" />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
