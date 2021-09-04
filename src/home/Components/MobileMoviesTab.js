import React from 'react'
import "../Home.css";

function MobileMoviesTab() {
    return (
        <div className="container upcomingMoviesRow">
            <div className="row mt-3 mb-3">
                <div className="col-4 pl-0"><div className="card upcomingMoviesCard" onClick={() => window.location.href = '/popular_movie'}>Popular</div></div>
                <div className="col-4 pl-0"><div className="card upcomingMoviesCard" onClick={() => window.location.href = '/upcoming_movie'}>Upcoming</div></div>
                <div className="col-4 pl-0 pr-0"><div className="card upcomingMoviesCard" onClick={() => window.location.href = '/now_playing'}>Playing</div></div>
            </div>
        </div>
    )
}

export default MobileMoviesTab
