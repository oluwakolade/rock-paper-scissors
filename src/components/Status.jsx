import React from "react";

const Status = ({ gameStatus, onClick }) => {
  return (
    <div className="flex flex-col gap-4 item-3 items-center order-3 md:order-2 justify-self-center col-span-2 md:col-span-1" >
      <p className="uppercase text-xl text-white font-barlow font-bold" >{gameStatus}</p>
      <button 
      onClick={onClick}
      className="cursor-pointer hover:text-bg-two hover:bg-white/90  uppercase text-bg-one text-base font-semibold px-8 py-2 rounded-md bg-white">play again </button>
    </div>
  );
};

export default Status;
