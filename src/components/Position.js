import React from 'react';
import Weather from './Weather';

class Position extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
            isLoaded: false
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lat: position.coords.latitude.toFixed(2),
                    lng: position.coords.longitude.toFixed(2),
                    isLoaded: true
                });
            },(error) =>{
                alert(error);
            })
        }else{
            alert('Browser does not support geolocation!');
        }
    }
    render() {
        const {lat,lng,isLoaded} = this.state;
        if(isLoaded) {
            return(
                <div className="bg-light p-5">
                  
                        <h3>Your Position</h3>
                        <p>Latitude : {lat}</p>
                        <p>Longitude: {lng}</p>
                        <Weather latt={lat} longi={lng}/>
                </div>
                
            )
        }else{
            return (<p>Loading...</p>)
        }
        
    }

}
export default Position;