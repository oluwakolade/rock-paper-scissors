import React from "react";

const Modal = ({setOpenModal}) => {
  return (
    <section 
    onClick={setOpenModal}
    className="w-screen h-screen z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center 
                 bg-white md:bg-black/60  " >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full h-full px-4 py-6 md:w-1/2 md:h-3/5 flex flex-col justify-between items-center rounded-lg"
      >
        {/* RULES Text */}
        <div className="flex items-center flex-col md:flex-row justify-between w-full"> 
        <p className="uppercase font-barlow font-bold text-lg text-bg-one self-center text-center">
          rules
        </p>

          {/* Close Button */}
          <button
          onClick={setOpenModal}
          className="hidden md:inline cursor-pointer"
        >


          <img src="/icon-close.svg" alt="close icon" />
        </button>

        </div>

        {/* Image */}
        <div className="mt-6 order-2 w-full flex justify-center">
          <img src="/image-rules.svg" alt="rules image" />
        </div>

        {/* Close Button */}
        <button
          onClick={setOpenModal}
          className="order-3 md:hidden mt-6 cursor-pointer"
        >
          <img src="/icon-close.svg" alt="close icon" />
        </button>
      </div>
    </section>
  );
};

export default Modal;
