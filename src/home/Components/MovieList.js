import React from 'react'
import ReactStars from "react-rating-stars-component";

function MovieList({ data, getImage }) {
    return (
        <div className="row mt-3">
            {data.map((item, index) => {
                return (
                    <div className="col-md-3 col-sm-6" style={{ position: "relative" }} key={index}>
                        <div className="card moviesCard">
                            <img className="img-fluid movieImg" src={getImage(item.poster_path)} alt={item.title}></img>
                            <div className="movieName">
                                <div style={{ fontWeight: "bolder" }}>{item.title}</div>
                                <div>Rated: {item.vote_average}</div>
                                <ReactStars
                                    count={item.vote_average}
                                    size={15}
                                    color1={"#f4c10f"}
                                ></ReactStars>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList
