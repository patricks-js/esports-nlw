import { MagnifyingGlassPlus } from "phosphor-react";

import "./styles/main.css";

import logo from "./assets/logo.svg";

import { Game } from "./components/Game";
import { Button } from "./components/Button";

import { GAMES } from "./utils/games";

export const App = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-20">
        {GAMES.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            ad={game.ads}
            game_img={game.image}
          />
        ))}
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou deu duo?
            </strong>
            <span className="text-zinc-400 block mt-1">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <Button>
            Publicar anuncio <MagnifyingGlassPlus size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};
