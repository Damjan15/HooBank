import GetStarted from "./GetStarted";
import styles from "../styles";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col ${styles.paddingY} md:flex-row`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        {/* Discount price component */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />

          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for 
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>

        {/* Heading and Get Started component */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-white text-[30px] sm:text-[52px] sm:leading-[75px] ss:text-[72px] ss:leading-[100px]">
            The Next <br className="hidden sm:block" />
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="hidden mr-0 md:mr-4 ss:flex">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold text-[52px] leading-[75px] text-white w-full ss:text-[68px] ss:leading-[100px]">Payment Method</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>

      {/* Image */}
      <div className={`flex-1 flex ${styles.flexCenter} relative my-10 md:my-0`}>
        <img src={robot} alt="billing" className="w-full h-full relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Show the get started button below the image on mobile screens */}
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
