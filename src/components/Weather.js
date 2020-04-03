import React from 'react';

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'a765441bf33133cb0d155574ab1eae00';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            wind_speed: 0,
            wind_direction: 0,
            description: '',
            icon: ''
        }
    }

    componentDidMount() {
        console.log(this.props);
        const url = apiUrl + 'lat=' + this.props.latt 
        + '&lon=' + this.props.longi +'&units=metric&APPID=' + apiKey;

        //fetch("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=a765441bf33133cb0d155574ab1eae00")
        fetch(url)
            .then(res => res.json())
            .then((result) =>{
                console.log(result);
                this.setState({
                    temp: result.main.temp,
                    wind_speed: result.wind.speed,
                    wind_direction: result.wind.deg,
                    description: result.weather[0].description,
                    icon: result.weather[0].icon
                });
            },(error) => {
                alert(error);
            }
            )
    }
    render() {
        const {temp,wind_speed,wind_direction,description,icon} = this.state;
        
        return(
            <div className="mt-5">
                <h3>Weather at your location</h3>
                <p>Temperature : {temp} C</p>
                <p>Wind Speed : {wind_speed} m/s</p>
                <p>Wind Direction : {wind_direction} degrees</p>
                <p>{description}</p>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt=""/>
            </div>
        )
    }

}
export default Weather;