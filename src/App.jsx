import { Suspense } from 'react';
import './App.css'
import NavBar from './components/Navbar/Navbar'
// import PricingCard from './components/PricingCard/PricingCard'
import PricingOptions from './components/PricingOptions/PricingOptions';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';
import ResultChart from './components/ResultChart/ResultChart';

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios('marksData.json')

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}> 
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  )
}

export default App
