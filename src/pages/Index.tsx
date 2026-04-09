import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import WorkshopDetails from "@/components/WorkshopDetails";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Registration from "@/components/Registration";
import Comunidad from "@/components/Comunidad";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <WorkshopDetails />
      <Pricing />
      <Testimonials />
      <Registration />
      <Comunidad />  {/* <--- 2. AGREGAR ESTO */}
      <Footer />
    </div>
  );
};

export default Index;