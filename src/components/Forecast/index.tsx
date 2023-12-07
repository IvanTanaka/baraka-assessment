import Image from "next/image";
import Button from "../Button";

const mockData = {
  estSavings: 5199832,
  numberOfYears: 20,
};

interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = () => {
  const data = mockData;
  const { estSavings, numberOfYears } = data;

  return (
    <div className="border-2 border-solid border-content-30 flex items-start flex-col py-6 px-8 rounded-xl">
      <h2 className="text-2xl mb-4 font-medium">Investment Forecast</h2>
      <h3 className="text-xl ">
        With Your Portfolio, Your Wealth Could Grow to
      </h3>
      <span className="text-2xl font-medium mb-4">
        {estSavings} in {numberOfYears} Years
      </span>
      <div className="flex justify-center w-full">
        <Image
          alt="forecast"
          src={"/images/forecast/chart.png"}
          width={916}
          height={514}
        />
      </div>
      <h3 className='font-medium mb-1'>About Trailblazer Portfolio</h3>
      <p className="xl:max-w-[50vw] md:max-w-[70vw] max-w-max text-start text-content-50 leading-5">
        Let this pioneer navigate your long-term investment journey. This
        portfolio offers exposure to the most promising companies and high
        potential assets classes. It&apos;s not for the faint of heart, but in
        the long run it projects to offer the highest potential returns. This is
        most suitable for this early in their careers for saving or with goals
        that reach many years into the future (greater than 7 years).
      </p>
    </div>
  );
};

export default Forecast;
