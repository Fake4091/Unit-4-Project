import "./Header.css";
import markelMusic from "./People/Markel/music.json";
import patrickMusic from "./People/Patrick/music.json";
import aidanMusic from "./People/Aidan/music.json";

function Header() {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          Markel
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#markel1">{markelMusic[0].artistName}</a>
          <a href="#markel2">{markelMusic[1].artistName}</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Patrick
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#patrick1">{patrickMusic[0].artistName}</a>
          <a href="#patrick2">{patrickMusic[1].artistName}</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Aidan
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#aidan1">{aidanMusic[0].artistName}</a>
          <a href="#aidan2">{aidanMusic[1].artistName}</a>
        </div>
      </div>
    </div>
  );
}

// below is how we will insert the spotify embed. We won't end up using the the api
// because it is more for searching than picking out one specific song.

// <div
// className="Container"
// dangerouslySetInnerHTML={{ __html: aidanMusic[0].songs[0].songSpotify }}
// ></div>

export default Header;
