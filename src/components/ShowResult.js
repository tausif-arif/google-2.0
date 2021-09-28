import React from "react";

const ShowResult = (props) => {
  const { results, info } = props;
  return (
    <div className="searchContainer">
      <div className="info">{info ? `Total Results ${info.totalResults }`: ""}</div>
      <div >{ results.map(data=>(
          <div className="searchDetails" key={data.cacheId}>
          <div className="searchResult sr2">{data.displayLink}</div>
          <div className="searchLink sr2"><a href={data.link}>{data.title}</a></div>
          <div className="searchDesc"><p>{data.snippet}</p></div>
          </div>)
      

      )} </div>
    </div>
  );
};

export default ShowResult;
