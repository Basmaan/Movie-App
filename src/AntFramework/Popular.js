import React, { useState, useEffect } from "react";
import "./index.css"
import axios from "axios";
import TableColumns from "./Components/TableColumns";
import AntSearchBar from "./Components/AntSearchBar";

const api_key = "e0bfb9e237fd3647b23717b87eb127bb";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Popular() {

  const [search, setsearch] = useState('');
  const [state, setstate] = useState([]);
  const api = axios.create({ baseURL: BASE_URL });
  const getPopular = api.get("movie/popular", { params: { api_key } });
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getPopular.then((res) => {
      if (search) {
        let results = []
        res.data.results.forEach((row, index) => {
          if (row.original_title.toLowerCase().includes(search.toLowerCase())) {
            results.push({
              Image: row.poster_path,
              Title: row.original_title,
              Overview: row.overview,
              release_date: row.release_date,
              id: row.id,
              key: index,
            })
          }
        })
        setstate(results)
      } else {
        setloading(false);
        setstate(res.data.results.map((row, index) => ({
          Image: row.poster_path,
          Title: row.original_title,
          Overview: row.overview,
          release_date: row.release_date,
          id: row.id,
          key: index,
        })));
      }
    });
  }, [search]);

  const handleChange = (e) => {
    setsearch(e.target.value)
  }

  return (
    <div className="container">
      <AntSearchBar search={search} handleChange={handleChange} />
      {loading ? (
        "Loading"
      ) : (
        <TableColumns state={state} getImage={getImage} />
      )}
    </div>
  )
}

export default Popular
