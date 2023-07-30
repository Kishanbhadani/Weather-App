import React from 'react';

function Result(props) {
    const {WeatherData: data} = props;
    function kToc(k){
        return (k-273.15).toFixed(2)+" °C";
    }
    function getDate(stamp){
        const date = new Date(stamp*1000)
        return date.toLocaleTimeString();                
    }

    let showOnPage;
    if(data == null){
        showOnPage= <div className='text-center mt-5'>Loading...</div>
    }else{
        showOnPage= <>
        <div className='resuit_Div'>
        <span>
             <h4>{data.name}</h4>
             <h6>
             <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='' height='20px' width='20px'/>
             ({kToc(data.main.temp)})
             {data.weather[0].description}</h6>
        </span>
        </div>
        <div className='container'>
            <table class="table table-striped">
                <tr>
                    <th scope="col">Feels like</th>
                    <td>{kToc(data.main.feels_like)}</td>
                </tr>
                <tr>
                    <th scope="col">Min Temp</th>
                    <td>{kToc(data.main.temp_min)}</td>
                </tr>
                <tr>
                    <th scope="col">Max Temp</th>
                    <td>{kToc(data.main.temp_max)}</td>
                </tr>
                <tr>
                    <th scope="col">Sun-rise</th>
                    <td>{getDate(data.sys.sunrise)}</td>
                </tr>
                <tr>
                    <th scope="col">Sun-set</th>
                    <td>{getDate(data.sys.sunset)}</td>
                </tr>
                <tr>
                    <th scope="col">Visibility</th>
                    <td>{data.visibility/1000} km</td>
                </tr>
                <tr>
                    <th scope="col">Wind speed</th>
                    <td>{data.wind.speed} m/s</td>
                </tr>
            </table>
        </div>
    </>
    }
    return (
        <>
          {showOnPage}
        </>
    )
}

export default Result;