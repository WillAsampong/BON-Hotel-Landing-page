import './App.css'
import Footer from './Components/Footer/Footer'
// import Facilities from './Components/Facilities Section/Facilities'
import Header from './Components/Header/Header'
import Hero from './Components/Hero Section/Hero'
import Rates from './Components/Room-Rates Section/Rates'

function App() {

  return (
    <>
      <div className="relative h-full">
        <Header />
        <Hero />
        <Rates />
        <Footer />
      </div>
    </>
  )
}

export default App
