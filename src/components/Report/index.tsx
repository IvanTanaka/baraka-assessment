import Button from "../Button";
import Forecast from "../Forecast";

const mockData = {
  targetSavings: 170_000,
  numberOfYears: 70,
  initialInvestment: 2_000,
  monthlyInvestment: 200,
};

interface ReportProps {
  name: string;
}

const Report: React.FC<ReportProps> = ({ name }) => {
  const firstname = name.substring(0, name.indexOf(" "));
  const data = mockData;
  const { targetSavings, numberOfYears, initialInvestment, monthlyInvestment } =
    data;

  return (
    <div className="bg-white-100 w-full text-center flex justify-center flex-col py-28 px-36">
      <h1 className="text-4xl mb-4">
        Well Done {firstname}.
        <br />
        You Have Successfully Created Your Goal.
      </h1>
      <h3 className="mb-4">
        We took all of your inputs and created a plan for you. Its pretty
        simple, to get
        <br /> to <b>{targetSavings}</b> savings in the next <b>{numberOfYears} years</b>, you need
        to invest <b>{initialInvestment} now</b> and
        <br /> <b>{monthlyInvestment} every month</b> for the next {numberOfYears} years.
      </h3>
      <div className="flex m-auto mb-16">
        <Button style="tertiary">Recalculate</Button>
      </div>
      <Forecast />
    </div>
  );
};

export default Report;
