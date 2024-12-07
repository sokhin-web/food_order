import { RiMoonClearFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Logo({ appBg, colorBlack, handlePopupToggle, toggleStyle }) {
  return (
    <div
      className={`sticky top-0 z-10 flex flex-row items-center justify-between px-10 py-5 border border-teal-500 rounded-md shadow-md ${appBg} phone:px-5 phone:py-2 animate-slide_top_center`}
    >
      <p className={`text-3xl ${colorBlack} font-bold phone:text-xl `}>LOGO</p>
      <div
        className={`text-lg text-white bg-orange-500 px-3 py-1 rounded-md  shadow-md phone:text-sm phone:px-2  hover:opacity-70 duration-200 cursor-pointer`}
        onClick={handlePopupToggle}
      >
        Show Order List
      </div>
      <RiMoonClearFill
        onClick={toggleStyle}
        className={`text-2xl ${colorBlack}  hover:opacity-70 duration-200 cursor-pointer phone:text-xl`}
      />
    </div>
  );
}

export default Logo;
