import { useEffect, useState } from "react";
import { connect } from "react-redux";

//Component
import SideBar from "./layout/SideBar.component";
import MainHeader from "./layout/MainHeader.component";
import MainView from "./layout/MainView.component";

//redux

//action
import { setToken } from "./actions/auth";
import {fetchFeatured} from './actions/fetchData';

import "./App.css";

const App = ({ setToken, fetchFeatured }) => {
  // const [token, setToken] = useState("");

  useEffect(() => {
    let hashParams = {};
    let addressArr,
      regex = /([^&;=]+)=?([^&;]*)/g,
      address = window.location.hash.substring(1);
    while ((addressArr = regex.exec(address))) {
      hashParams[addressArr[1]] = decodeURIComponent(addressArr[2]);
    }

    if (!hashParams.access_token) {
      window.location.href =
        "https://accounts.spotify.com/authorize?client_id=6edce3180a9b49cbb228824b8fe00a10&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback";
    } else {
      setToken(hashParams.access_token);
      fetchFeatured(hashParams.access_token);
    }
  }, []);

  return (
    <div className="app-container">
      <div className="left-section">
        <SideBar />
      </div>
      <div className="right-section">
        <MainHeader />
        <MainView />
      </div>
    </div>
  );
};

export default connect(null, { setToken, fetchFeatured })(App);
