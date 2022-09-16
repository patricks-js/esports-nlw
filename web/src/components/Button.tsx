import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
};

export const Button = ({ children }: PropTypes) => (
  <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors flex items-center gap-3">
    {children}
  </button>
);
