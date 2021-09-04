import React from 'react'

function AntSearchBar({search,handleChange}) {
    return (
        <div className="row mt-3 mb-3">
            <div className="col-11">
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" value={search} onChange={handleChange} placeholder="Search movies" aria-label="Search movies" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">GO!</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-1">
                <button className="btn btn-outline-secondary" type="button" onClick={() => window.location.href = '/'}>HOME</button>
            </div>
        </div>
    )
}

export default AntSearchBar
