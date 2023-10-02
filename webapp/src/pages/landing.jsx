import Features from "../components/landing/features";
import Footer from "../components/footer";
import Header from "../components/landing/header";
import Hero from "../components/landing/hero";
import How from "../components/landing/how";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-y-14">
        <Hero />
        <Features />
        <How />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
