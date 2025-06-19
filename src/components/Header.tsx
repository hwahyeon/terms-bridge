import React from "react";
import Logo from "../assets/logo.svg";

type HeaderProps = {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ showForm, setShowForm }) => {
  const appDescription = "Talk Code, Any Language";

  return (
<header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <div className="flex items-center gap-4">
    <a href="/">
      <img
        src={Logo}
        alt="logo"
        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain"
      />
    </a>
    <h1 className="text-[32px] sm:text-[42px] leading-[1] uppercase font-[Coiny] font-bold">
      {appDescription}
    </h1>
  </div>

  <div className="flex justify-end sm:justify-normal">
    <button
      className="btn px-6 py-4 text-lg font-semibold uppercase bg-[#777777] rounded-full shadow-md transition duration-300 hover:scale-105 hover:-rotate-1"
      onClick={() => setShowForm((show) => !show)}
    >
      {showForm ? "Close" : "Add a term"}
    </button>
  </div>
</header>



  );
};

export default Header;
