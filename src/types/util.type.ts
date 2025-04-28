import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export type TRoute = {
  title: string;
  path: string;
  icon: IconType;
  children?: TRoute[];
  element?: ReactNode;
};

export type TFieldError = Record<string, string>;

export type TSidebarRoute = Pick<TRoute, "title" | "path" | "icon" | "children"|"element">;
export type TRouterRoute = Pick<TRoute, "element" | "path"> & {
  children?: TRouterRoute[];
};
export enum ETheme {
  DARK = "dark",
  LIGHT = "Light",
}

export type TTheme = `${ETheme}`;

export type TDifficulty = `${EDifficulty}`

export enum EDifficulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard"
}