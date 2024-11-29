import { Navigation } from "@/components/HeroSection";
import Image from "next/image";

export default function Page({ params }: { params: { ujian_id: string } }) {
  return (
    <>
      <Navigation />
      <div className="w-full mt-16 mx-auto">
        <Image
          src={"/header-pas-2024.png"}
          width={720}
          height={720}
          alt="Header PAS 2024"
          className="mx-auto"
        />
        <iframe
          src={`https://docs.google.com/forms/d/e/${params.ujian_id}/viewform?embedded=true`}
          className="w-full m-auto h-screen pt-4"
        >
          Memuat…
        </iframe>
      </div>
    </>
  );
}
