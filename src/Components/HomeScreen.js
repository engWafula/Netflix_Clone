import React from 'react';
import '../Styles/App.css';
import Row from "./Row"
import requests  from "../requests"
import  Banner from  "./Banner"
import NavBar from "./NavBar"

function  HomeScreen() {
  return (
    <div className="app">
      <h1></h1>
        <NavBar/>
        <Banner/>                    
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="SciFi" fetchUrl={requests.fetchSciFi}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Animation" fetchUrl={requests.fetchAnimation}/>
      <Row title="Western" fetchUrl={requests.fetchWestern}/>
      <Row title="Documentaries" fetchUrl={requests. fetchDocumentaries}/>
    </div>
  );
}

export default HomeScreen ;
