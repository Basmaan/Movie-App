import React from 'react'

function MobileMoviesSearchBar({handleChange,search}) {
    return (
        <div className="row mt-3">
            <div className="col-8">
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search movies" aria-label="Search movies" value={search} onChange={handleChange} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">GO!</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-4">
                <button className="btn btn-outline-secondary" type="button" onClick={() => window.location.href = '/'}>HOME</button>
            </div>
        </div>
    )
}

export default MobileMoviesSearchBar
