import { Navigation } from "@/components/HeroSection";

export default function Page({ params }: { params: { ujian_id: string } }) {
  return (
    <>
      <Navigation />
      <iframe
        src={`https://docs.google.com/forms/d/e/${params.ujian_id}/viewform?embedded=true`}
        className="mx-auto w-full h-[calc(100vh-4rem)] mt-16"
      >
        Memuat…
      </iframe>
    </>
  );
}
