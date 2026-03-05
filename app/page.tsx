import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import StudioMoments from "@/components/StudioMoments";
import Founder from "@/components/Founder";
import RegisterForm from "@/components/RegisterForm";
import Contact from "@/components/Contact";
import ConnectWithUs from "@/components/ConnectWithUs";
import StartYourActing from "@/components/StartYourActing";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <StudioMoments />
      <Founder />
      <RegisterForm />
      <Contact />
      <ConnectWithUs />
      <StartYourActing />
    </>
  );
}
