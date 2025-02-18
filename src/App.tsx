import Playlist from "./Playlist";
import playlists from "./playlists";

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const format = queryParams.get("format") || "webm";
  const playlist = playlists[format] || playlists.webm;

  return <Playlist playlist={playlist} />;
}
