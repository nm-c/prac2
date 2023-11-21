/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow-0 w-full flex-col h-fit">
        <img src="https://via.placeholder.com/800x150" alt="Placeholder" className="w-full h-[150px]" />
        <button 
          onClick={() => router.push('/table')}
          className="bg-c3/50 text-c1 font-gaegu text-2xl p-5 rounded-xl m-5 py-2"
        >
          Table
        </button>
        <button 
          onClick={() => router.push('/responsive')}
          className="bg-c3/50 text-c1 font-gaegu text-2xl p-5 rounded-xl m-5 py-2"
        >
          Responsive
        </button>
      </div>
      <div className="flex-shrink-0 flex-grow flex justify-center items-center">
        <div className="font-gaegu m-10 border rounded-3xl px-10 py-8 shadow-2xl">
          <h1 className="text-5xl text-c1 mb-5 tracking-wide">Practice Pages</h1>
          <p className="text-xl text-c2 tracking-wide leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, voluptate. Quo voluptatibus, voluptate, quas
            voluptatum, quidem doloribus quia quod quos quibusdam
            accusantium. Quisquam, voluptate. Quo voluptatibus,
            voluptate, quas voluptatum, quidem doloribus quia quod
            quos quibusdam accusantium.
          </p>
        </div>
      </div>
    </div>
  );
}
