import "./Header.css";
import markelMusic from "./People/Markel/music.json";
import patrickMusic from "./People/Patrick/music.json";
import aidanMusic from "./People/Aidan/music.json";
import { useContext } from "react";
import { setUserRef } from "./App";

function Header() {
  let setUser = useContext(setUserRef);

  return (
    <div className="navbar">
      <img
        className="logoImage"
        src={process.env.PUBLIC_URL + "logo.png"}
        alt="Our logo"
      ></img>
      <div className="dropdown">
        <button className="dropbtn">
          Aidan
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a
            href="#aidan1"
            onClick={() => {
              setUser(aidanMusic[0]);
            }}
          >
            {aidanMusic[0].artistName}
          </a>
          <a
            href="#aidan2"
            onClick={() => {
              setUser(aidanMusic[1]);
            }}
          >
            {aidanMusic[1].artistName}
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Markel
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a
            href="#markel1"
            onClick={() => {
              setUser(markelMusic[0]);
            }}
          >
            {markelMusic[0].artistName}
          </a>
          <a
            href="#markel2"
            onClick={() => {
              setUser(markelMusic[1]);
            }}
          >
            {markelMusic[1].artistName}
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Patrick
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a
            href="#patrick1"
            onClick={() => {
              setUser(patrickMusic[0]);
            }}
          >
            {patrickMusic[0].artistName}
          </a>
          <a
            href="#patrick2"
            onClick={() => {
              setUser(patrickMusic[1]);
            }}
          >
            {patrickMusic[1].artistName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
