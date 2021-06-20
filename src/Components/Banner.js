import axios from '../axios'
import React,{useState,useEffect} from 'react'
import requests from '../requests'
import "../Styles/Banner.css";
function Banner() {
    const base_url ="https://image.tmdb.org/t/p/original"
    const [movie,setMovies]=useState([])
    useEffect(() => {
        async function  fetchData(){
            const request = await  axios.get(requests.fetchNetflixOriginals)
            setMovies(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ])
           
            return request
        }fetchData()
    }, [])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage: `url(
                "${base_url}${movie?.backdrop_path}"
                )`,

        }}
        >
            <div className="banner__contents">
            <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
        {truncate(movie?.overview, 150)}
        </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
