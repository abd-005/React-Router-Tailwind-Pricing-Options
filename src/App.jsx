import { Suspense } from 'react';
import './App.css'
import NavBar from './components/Navbar/Navbar'
// import PricingCard from './components/PricingCard/PricingCard'
import PricingOptions from './components/PricingOptions/PricingOptions';

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense fallback={'Loading...'}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
