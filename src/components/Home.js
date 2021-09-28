import React, { useState } from "react";
import googleLogo from "../assets/g1.png";
import "../App.css";
import { useHistory } from "react-router-dom";


const Home = (props) => {
  const [search, setSearch] = useState("");
const history=useHistory
  

  const onSearch = () => {
    props.history.push({ pathname: "/search", state: search });
  };
  // const feelLucky=()=>{
  //   history.push(/https://www.google.com/doodles)
  // }

  return (
    <div className="main">
      <div className="logo">
        <img src={googleLogo} alt="googlelogo" />
      </div>
      <form  className="form">
        <div className="input_text">
          <input
            type="text"
            className="search_bar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          ></input>
          <i className="fas fa-search"></i>
          <i className="fa fa-microphone"></i>
        </div>
        <div className="search_container">
          <button  className="btn_search btn" onClick={onSearch}>
            Google Search
          </button>
          <button  className="btn_search btn" >
          I'm Feeling Lucky
        </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
