import { userRef } from "./App.js";
import "./Body.css";
import React, { useContext } from "react";

function Body() {
  let user = useContext(userRef);

  let listItems = user.songs.map((song) => (
    <table className="songTable">
      <thead className="nameRow" colSpan="2">
        {song.songName}
      </thead>
      <tbody>
        <td
          className="youtubeSongs"
          dangerouslySetInnerHTML={{ __html: song.songYT }}
        />
        <td
          className="spotifySongs"
          dangerouslySetInnerHTML={{ __html: song.songSpotify }}
        />
      </tbody>
    </table>
  ));

  return (
    <>
      <div className="header">
        <h1 className="artistName">{user.artistName}</h1>
      </div>
      <ol className="songList">{listItems}</ol>
    </>
  );
}

export default Body;
