import "./App.css";
import React, { createContext, useState } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import DefaultBody from "./DefaultBody.js";

export const userRef = createContext();
export const setUserRef = createContext();

function App() {
  let [user, setUser] = useState({
    id: 0,
    artistName: null,
    songs: [{ id: 0, songName: null, songYT: null, songSpotify: null }],
  });

  if (user.id === 0) {
    return (
      <>
        <setUserRef.Provider value={setUser}>
          <Header />
        </setUserRef.Provider>
        <DefaultBody />
      </>
    );
  } else {
    return (
      <>
        <setUserRef.Provider value={setUser}>
          <Header />
        </setUserRef.Provider>
        <userRef.Provider value={user}>
          <Body />
        </userRef.Provider>
      </>
    );
  }
}

export default App;
