import Playlist, { Media } from "./Playlist";

const playlists: Record<string, Media[]> = {
  mp4: [
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/01_W_H.mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/02_WILD_H.mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/03_H_SAFE.mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/03_WILD_H.mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/06_H_SAFE.mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/11_H_LONG.mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/12_H_SAFE.mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/14_H_LONG.mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/Subaru_EV_Playlist-GeneralEV_Enjoy-Protect-Nature_(1).mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/Subaru_SUV_Playlist-Themelines_Crosstrek_(1).mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/Subaru_SUV_Playlist-Themelines_Outback_(1).mp4",
    },
    {
      type: "video/mp4",
      url: "http://cdn.raydiant.com/subaru-videos/Subaru_TRUST_Playlist_Owner-Stories_(1).mp4",
    },
  ],
  webm: [
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/01_W_H.webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/02_WILD_H.webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/03_H_SAFE.webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/03_WILD_H.webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/06_H_SAFE.webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/11_H_LONG.webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/12_H_SAFE.webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/14_H_LONG.webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/Subaru_EV_Playlist-GeneralEV_Enjoy-Protect-Nature_(1).webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/Subaru_SUV_Playlist-Themelines_Crosstrek_(1).webm",
    },
    {
      type: "video/webm",
      url: "http://cdn.raydiant.com/subaru-videos/Subaru_SUV_Playlist-Themelines_Outback_(1).webm",
    },
  ],
};
export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const format = queryParams.get("format") || "webm";
  const playlist = playlists[format] || playlists.webm;

  return <Playlist playlist={playlist} />;
}
