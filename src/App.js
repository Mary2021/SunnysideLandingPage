import './App.css';
import NavBar from './layouts/NavBar'
import Hero from './layouts/Hero'
import Footer from './layouts/Footer'
import Main from './layouts/Main'

function App() {
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <Main />
        <Footer />
      </div>
    ) 
}

export default App;
