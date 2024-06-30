"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-parallax";
import bg from "/public/tea.jpg";
import Link from "next/link";
import { HeroParallax } from "@/components/ui/parallax";
import Landing from "@/components/landing";

export default function Home() {
  const products = [
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: bg.src,
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: "/public/tea.jpg",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: "/public/tea.jpg",
    },
  ];
  return (
    <div className="w-full h-screen relative">
      <Image src={bg} alt="Banner Image" fill objectFit="cover" />
      <div className="aboslute top-0 left-0 bottom-0 right-0 bg-black z-50 h-screen w-full opacity-70"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-screen">
        <div className="flex items-center justify-start h-20 lg:h-32  px-3  mx-20 ">
          <div className="flex items-center justify-normal gap-4">
            <Link href={"/"} className={` text-white font-medium `}>
              About Us
            </Link>
            <Link href={"/"} className={` text-white font-medium `}>
              Collections
            </Link>{" "}
            <Link href={"/"} className={` text-white font-medium `}>
              Partnership
            </Link>
          </div>
        </div>
        <div className="w-full h-[calc(100vh_-_120px)] flex flex-col justify-center items-start relative mx-20">
          <div className="lg:-mt-[120px] lg:w-[500px] flex flex-col  gap-5 ">
            <h4 className="text-8xl md:text-7xl font-medium text-white text-start  md:leading-[70px]">
              The Home of <br /> Good Tea
            </h4>
          </div>
         
        </div>
      </div>
    </div>
  );
}
