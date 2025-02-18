import { Media } from "../Playlist";
import mp4 from "./mp4";
import original from "./original";
import webm from "./webm";

const playlists: Record<string, Media[]> = { mp4, original, webm };

export default playlists;
