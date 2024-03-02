import Hero from "./_components/Hero";
import ServiceDetails from "./_components/Service-details";
import Services from "./_components/Services";
import Contacts from "./_components/Contacts";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceDetails />
      <Contacts />
    </>
  )
}