import React from "react";

const GameItem = ({ icon, alt, onClick, className }) => {
  return (
    <div className={className}
    onClick={onClick}
    >
      <div className="game-btn">
      <button onClick={onClick}>
        <img src={icon} alt={alt} className="cursor-pointer " />
      </button>
      </div>
    </div>
  );
};

export default GameItem;
