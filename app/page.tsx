import styles from "./page.module.css";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Inventory from "@/components/Inventory";
import Reviews from "@/components/Reviews";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div>
    <Hero/>
    <About/>
    <Inventory/>
    <Reviews/>
    <ContactUs/>
    </div>
  );
}
