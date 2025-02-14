import ProductImages from "@/components/Ilmiy-yangiliklar";
import CampusLife from "@/components/CampusLife";
import Hero from "@/components/Hero";
import Status from "@/components/Status";
import Pedagoglar from "@/components/Pedagoglar";
import Tadbirlar from "@/components/Tadbirlar";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Status />
      <CampusLife />
      <ProductImages />
      <Pedagoglar />
      <Tadbirlar />
      <ContactForm />
    </>
  );
}
