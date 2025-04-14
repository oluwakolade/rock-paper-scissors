import { useState , useEffect} from "react";
import Modal from "./components/Modal";
import { items } from "./items";
import GameItem from "./components/GameItem";
// import { clsx } from "clsx";
import Status from "./components/Status";

function App() {
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("score");
    return saved ? parseInt(saved) : 12;
  });
  const [openModal, setOpenModal] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [systemSelectedBtn, setSystemSelectedBtn] = useState(null);
  const [gameStatus, setGameStatus] = useState("loading...");

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleClick = (item) => {
    console.log("you clicked ", item.alt);
    setSelectedBtn(item);
    setIsSelected(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const systemChoice = items[randomIndex];
      setSystemSelectedBtn(systemChoice);

      if (item.id === systemChoice.id) {
        setGameStatus("Draw");
      } else if (
        (item.id === 1 && systemChoice.id === 3) ||
        (item.id === 2 && systemChoice.id === 1) ||
        (item.id === 3 && systemChoice.id === 2)
      ) {
        setGameStatus("You Win!");
        setScore(prev => prev + 1);

      } else {
        setGameStatus("You Lose!");
        setScore(prev => prev - 1);

      }
    }, 1000);
  };

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const playAgain = () => {
    setIsSelected(false);
    setSelectedBtn(null);
    setSystemSelectedBtn(null);
    setGameStatus("loading...");
  };
  

  return (
    <main className="main relative ">
      {/* scoreboard */}
      <section className="head">
        <div>
          <img src="/logo.svg" alt="rock paper scissors logo" />
        </div>

        <div className="score-board">
          <p>score</p>
          <span>{score}</span>
        </div>
      </section>
      {/* body */}

      {!isSelected && (
        <section className="step-one">
          {items.map((item) => (
            <GameItem
              key={item.id}
              icon={item.icon}
              alt={item.alt}
              className={item.className}
              onClick={() => handleClick(item)}
            />
          ))}
        </section>
      )}
      {/* game */}
      {isSelected && (
        <section className="step-two">
          <div className="flex flex-col items-center justify-center gap-3 order-1 md:order-1">
          <div className={systemSelectedBtn ? "animate-ping-once" : ""}>
          <GameItem
              key={selectedBtn.id}
              icon={selectedBtn.icon}
              alt={selectedBtn.alt}
              className={selectedBtn.className}
            />
            </div>
            <p className="uppercase text-sm text-white font-barlow font-semibold">you picked</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 order-2 md:order-3"> 
           { systemSelectedBtn ? 
            <GameItem
              key={systemSelectedBtn.id}
              icon={systemSelectedBtn.icon}
              alt={systemSelectedBtn.alt}
              className={systemSelectedBtn.className}
            /> 
            :  <div className="h-24 w-24 rounded-full bg-neutral-800 opacity-40 animate-pulse flex items-center justify-center">
            <span className="text-transparent text-xs font-semibold animate-pulse">...</span>
          </div>
          
           }


            <p className="uppercase text-sm text-white font-barlow font-semibold">the house picked</p>
          </div>

          <Status 
          gameStatus={gameStatus}
          onClick={playAgain}
           />
        </section>
      )}

      {/* rules */}

      <div className="rules">
        <button onClick={toggleModal}>rules</button>
      </div>

      {openModal && <Modal setOpenModal={toggleModal} />}
    </main>
  );
}

export default App;
