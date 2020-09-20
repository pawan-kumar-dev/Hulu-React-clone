import React from "react";
import "./Nav.css";
import requests from "../DataFetch/request";
const Nav = ({ setSelectedOption }) => {
  return (
    <div className="nav">
      <h5 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchHorrorMovie)}>
        Horror
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romance
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchMysteryMovies)}>
        Mystery
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchScifiMovies)}>
        Sci-fi
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchWesternMovies)}>
        Western
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchAnimationMovies)}>
        Animation
      </h5>
      <h5 onClick={() => setSelectedOption(requests.fetchTV)}>TV Movie</h5>
    </div>
  );
};

export default Nav;
