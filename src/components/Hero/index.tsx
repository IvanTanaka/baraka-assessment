import Image from "next/image";
import Button from "../Button";
import DowloadReport from "../../../public/images/hero/icon-dowload.svg";

interface HeroProps {
  name: string;
  startDate: string;
}

const Hero: React.FC<HeroProps> = ({ name, startDate }) => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center flex items-center"
      style={{
        backgroundImage: `url('/images/hero/bg.jpg')`,
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="xl:w-1/2 p-8 bg-[#d9d9d9]/10 rounded-xl backdrop-blur-sm flex flex-col text-start">
        <h2 className="mb-12 text-3xl text-background-primary ">Vacation</h2>
        <h1 className="font-bold text-background-primary mb-12 text-6xl">
          Financial Report for {name}
        </h1>
        <div className="flex mb-12">
          <Button className="mr-2">Start Investing</Button>
          <Button
            style="tertiary"
            icon={
              <Image
                alt="download report"
                src={DowloadReport}
                width={20}
                height={20}
              />
            }
          >
            Download Report
          </Button>
        </div>
        <div>
          <span className="text-background-primary">{startDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
