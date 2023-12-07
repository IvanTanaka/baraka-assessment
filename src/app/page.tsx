import Hero from "@/components/Hero";
import Report from "@/components/Report";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
				<Hero name="Khaled Abu Asbeh" startDate="October 19, 2023"/>
				<Report name="Khaled Abu Asbeh" />
    </main>
  );
}
