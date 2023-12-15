import Image from "next/image";
import Button from "../Button";
import DiamondIcon from "../../../public/images/premium_cta/icon-diamond-black.svg";

interface PremiumCTAProps {}

const PremiumCTA: React.FC<PremiumCTAProps> = ({}) => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center flex items-center"
      style={{
        backgroundImage: `url('/images/premium_cta/bg.jpg')`,
        height: "665px",
        width: "100%",
      }}
    >
      <div className="w-1/3 p-8 bg-[#d9d9d9]/10 rounded-xl backdrop-blur-sm flex flex-col text-start">
        <h2>Upgrade to Premium and Unlock Next Quarter&apos;s Reports</h2>
        <h4>
          Supercharge your financial planning by accessing next quarter&apos;s
          insights and stay one step ahead.
        </h4>
        <Button
          icon={
            <Image
              alt=""
              src={DiamondIcon}
              height={20}
              width={20}
            />
          }
        >
          Unlock Your Financial Foresight
        </Button>
      </div>
    </div>
  );
};

export default PremiumCTA;
