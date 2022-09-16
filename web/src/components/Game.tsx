type GameProps = {
  name: string;
  game_img: string;
};

export const Game = ({ name, game_img }: GameProps) => {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={`/${game_img}.png`} alt="Apex" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{name}</strong>
        <span className="text-zinc-300 text-sm block mt-1">4 Anuncios</span>
      </div>
    </a>
  );
};
