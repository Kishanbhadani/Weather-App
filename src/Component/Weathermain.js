import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import Result from './Result';

class Weathermain extends Component {
    constructor(props){
        super(props);
        this.state = {
            lat:"",
            lon:"",
            WeatherData:null,
            city:"",
        }
    }

    changeCityHandler=(event)=>{
        const name = event.target.name;
        if(name === "city"){
            this.setState({city: event.target.value} )
        }
        else if(name === "lat"){
            this.setState({lat: event.target.value})
        }
        else if(name === "lon"){
            this.setState({lon: event.target.value})
        }
    }

    getLocationHandler=()=>{
        this.setState({
            lat:"",
            lon:"",
            WeatherData:null,
            city:"",
        })
        
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (res)=>{setTimeout(()=>{
                    this.setState({
                        lat: res.coords.latitude,
                        lon: res.coords.longitude,
                    });

                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=012a6a32e8392c84af77a24985d738fb`)
                    .then((res)=>{ 
                        console.log(res);
                        this.setState({
                            city: res.data.name,
                            WeatherData: res.data,
                        })
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                },500)
                },
                (error)=>{
                    console.log(error);
                }
            )
        }else{
            alert("location is not supported")
        }
    }

    searchHandler = ()=>{
        if(this.state.city!=null){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=012a6a32e8392c84af77a24985d738fb`)
            .then((res)=>{ 
                console.log(res);
                this.setState({
                    lat: res.data.coord.lat,
                    lon: res.data.coord.lon,
                    WeatherData: res.data,
                })
                setTimeout(()=>{
                    this.state.city= null;
                },200)
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        else{axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=012a6a32e8392c84af77a24985d738fb`)
        .then((res)=>{ 
            console.log(res);
            this.setState({
                city: res.data.name,
                WeatherData: res.data,
            })
            setTimeout(()=>{
                this.state.city= null;
            },200)
        })
        .catch((error)=>{
            console.log(error);
        })
    }         
}

    render() {
        return (
            <div>
                <Search
                  lat={this.state.lat}
                  lon={this.state.lon}
                  city={this.state.city}
                  WeatherData={this.state.WeatherData}
                  change={this.changeCityHandler}
                  getLocation = {this.getLocationHandler}
                  search = {this.searchHandler}
                ></Search>
                <Result WeatherData = {this.state.WeatherData}></Result>
            </div>
        );
    }
}

export default Weathermain;