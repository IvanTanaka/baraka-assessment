import Hero from "@/components/Hero";
import PremiumCTA from "@/components/PremiumCTA";
import Report from "@/components/Report";

const mockData = {
  name: "Khaled Abu Asbeh",
  date: "October 19, 2023",
};

export default function Home() {
  const data = mockData;
  const { name, date: startDate } = data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero name={name} startDate={startDate} />
      <Report name={name} />
      <PremiumCTA />
    </main>
  );
}
