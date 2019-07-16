import { Component } from 'react';
import axios from 'axios';

export class BaseService extends Component {

    constructor(props) {
        super(props);
    }

    callApiSunset = async (lat, long) => {

        await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
            .then(function (response) {
                if (response.data.status == "OK") {
                    return response;
                } else {
                    return false;
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export default BaseService;