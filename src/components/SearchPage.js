import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import googleImg from "../assets/g1.png";
import { key, cx_key } from "../key";
import axios from "axios";
import ShowResult from "./ShowResult";

const SearchPage = (props) => {
  const [textSearch, setTextSearch] = useState(props.location.state);
  const [result, setResult] = useState([]);
  const [info, setInfo] = useState("");

  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx_key}&q=${textSearch}`;

  const getResult = async (e) => {
    // e.preventDefault();
    try {
      console.log("clicked");
      const response = await axios.get(url);
      console.log(response.data);
      setResult(response.data.items);
      setInfo(response.data.searchInformation);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResult();
  }, []);

  return (
    <div className="search2">
      <div className="searchBanner">
        <div className="googleImg">
          <img src={googleImg} onClick={goToHome} alt="google"></img>
        </div>
        <form className="search_input" onSubmit={getResult}>
          <input
            type="text"
            className="search_bar2"
            onChange={(e) => setTextSearch(e.target.value)}
            value={textSearch}
            onSubmit={getResult}
          ></input>
          <span className="material-icons searchIcon2">search</span>
          <span className="material-icons micIcon2">mic</span>
        </form>
      </div>

      <ShowResult results={result} info={info} />
    </div>
  );
};

export default SearchPage;

//leftitems

// <div className="left_items">
// <span className="material-icons">settings</span>
// <span className="material-icons">
//   apps
//   </span>
//   <span className="material-icons">
//   account_circle
//   </span>
// </div>
