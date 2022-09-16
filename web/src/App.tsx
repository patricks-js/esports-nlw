import { MagnifyingGlassPlus } from "phosphor-react";

import "./styles/main.css";

import logo from "./assets/logo.svg";

import { Game } from "./components/Game";
import { Button } from "./components/Button";

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
        <Game name="Apex" game_img="apex" />
        <Game name="CSGO" game_img="csgo" />
        <Game name="League of Legends" game_img="lol" />
        <Game name="Fortnite" game_img="fornite" />
        <Game name="Warcraft" game_img="warcraft" />
        <Game name="Dota 2" game_img="dota2" />
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
