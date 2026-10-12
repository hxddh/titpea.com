// Every product, in site order. Adding a product means adding its file and one line here.
import type { Product } from "../schema";
import s3TurboList from "./s3-turbo-list";
import storageAgentWorkbench from "./storage-agent-workbench";
import storageops from "./storageops";
import httpmon from "./httpmon";
import celagent from "./celagent";
import pagewise from "./pagewise";
import pulse from "./pulse";
import readout from "./readout";
import worldMachine from "./world-machine";
import worldClock from "./world-clock";
import doubanMovieRating from "./douban-movie-rating";
import agentRadar from "./agent-radar";
import goban from "./goban";
import chessboard from "./chessboard";
import easierBookmarks from "./easier-bookmarks";
import bilingual from "./bilingual";

export const products: Product[] = [
  s3TurboList,
  storageAgentWorkbench,
  storageops,
  httpmon,
  celagent,
  pagewise,
  pulse,
  readout,
  worldMachine,
  worldClock,
  doubanMovieRating,
  agentRadar,
  goban,
  chessboard,
  easierBookmarks,
  bilingual,
];
