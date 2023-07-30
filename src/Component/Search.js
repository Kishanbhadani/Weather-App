import React from 'react';

function Search(props) {
    return (
            <div className='Search_Div'>
            <h3 className='label_city label text'>Type city name: </h3>
            <input type="text" className="form-control" name='city' value={props.city} onChange={props.change}></input>
            <p className='mt-3'>or</p>

            <h3 className='text'>Get co-ordinate <i className="fa-sharp fa-solid fa-location-crosshairs" onClick={props.getLocation}></i></h3>
            <div className="row">
            <div className="col-md-3">
              <h6 className='text'>latitude</h6>
              <input type="text" className="form-control" id="inputCity" name='lat' value={props.lat} onChange={props.change}></input>
            </div>
            <div className="col-md-3">
              <h6 className='text'>longitude</h6>
              <input type="text" className="form-control" id="inputCity" name='lon' value={props.lon} onChange={props.change}></input>
            </div>
            <div className="form-group col-md-2">
            <h6 className='text'>Find Weather info</h6>
            <button type="submit" className='btn btn-primary' onClick={props.search}>Search Weather </button>
            </div>
          </div>
          
        </div>
    );
}

export default Search;