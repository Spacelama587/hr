import Features from "./components/Features"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AnimatedLogoCloud from "./components/LogoCloud"
import SolutionsSection from "./components/SolutionsSection"

function App() {


  return (
   <>
    <Header/>
    <HeroSection />
    <AnimatedLogoCloud/>
    <Features />
    <div className="min-h-screen bg-white">
      <SolutionsSection />
    </div>
   </>
  )
}

export default App
