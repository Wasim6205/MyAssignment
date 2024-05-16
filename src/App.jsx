import './App.css'
import Certificate from './components/CertificateSection/Certificate'
import Company from './components/CompanySection/Company'
import Course from './components/Courses/Course'
import Enroll from './components/EnrollSection/Enroll'
import Header from './components/Header/Header'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/Navbar/Navbar'
import Refund from './components/RefundSection/Refund'
import Step from './components/StepSection/Step'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Testimonial />
      <Course />
      <Refund />
      <Step />
      <Company />
      <Certificate />
      <Enroll />
    </>
  )
}

export default App
