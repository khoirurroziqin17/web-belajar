import React from "react";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import DaftarNilai from "@/components/DaftarNilai";

export default function index() {
  return (
    <main>
      <HeroSection />
      <Features />
      <DaftarNilai />
    </main>
  );
}
