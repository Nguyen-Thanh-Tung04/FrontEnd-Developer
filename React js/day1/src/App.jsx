import './App.css'
import { MyComponent } from './components/MyComponent';
import { Header } from './components/header/header';
import { NavBar } from './components/navBar/NavBar';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';


function App() {

  return (
    <>
    <header>
    <Header />
    <NavBar/>
    </header>
    <Main />
    <Footer />
    </>
  )
}

export default App
