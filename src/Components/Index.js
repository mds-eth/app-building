import React from 'react';

import BaseService from '../Components/BaseService'

export class Index extends BaseService {

    constructor(props) {
        super(props);

        this.state = {
            flag: false,
            sun: false,
            moon: false,
            classSun: false,
            rocket: false,
            classMon: false,
            classBack: 0, // 0 == default, 1 == moon, 2 == sun
            building: this.mounthBuilding(),
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.getMyLocation = this.getMyLocation.bind(this);
    }

    componentDidMount() {
        this.getMyLocation();
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation
        if (location) {
            location.getCurrentPosition((position) => {
                const returnApi = this.callApiSunset(position.coords.latitude, position.coords.longitude);
                console.log(returnApi);
            })
        }
    }
    mounthBuilding() {
        const array = [];
        for (var i = 0; i <= 4; i++) {
            array.push(<div className="building">
                <div className="decorate"></div>
                <div className="line">
                    <div className="col">
                        <div className="window" onClick={this.handleCheck}></div>
                    </div>
                    <div className="col">
                        <div className="window" onClick={this.handleCheck}></div>
                    </div>
                    <div className="col">
                        <div className="window" onClick={this.handleCheck}></div>
                    </div>
                    <div className="col">
                        <div className="window" onClick={this.handleCheck}></div>
                    </div>
                </div>
            </div>)
        }
        return array;
    }

    handleCheck(e) {
        if (e.target.className === 'window') {
            e.target.className = 'window window-active'
        } else {
            e.target.className = 'window'
        }
    }

    turnAllLightsOn() {

        var windows = document.getElementsByClassName('window');

        for (var i = 0; i <= windows.length; i++) {
            var window = windows[i];
            if (window === undefined) continue;
            window.className = this.state.flag ? 'window' : 'window window-active';
        }

        this.state.flag ? this.setState({ flag: false }) : this.setState({ flag: true });
    }

    callSun() {
        if (this.state.classSun) {
            this.setState({
                classSun: false,
                classBack: 0,
            });
        } else {
            this.setState({
                classSun: true,
                classMon: false,
                classBack: 1,
            });
            document.getElementById('check3').checked = false;
        }
    }

    callMoon() {
        if (this.state.classMon) {
            this.setState({
                classMon: false,
                classBack: 0,
                rocket: false,
            })
        } else {
            this.setState({
                classMon: true,
                classSun: false,
                classBack: 2,
                rocket: true,
            })
            document.getElementById('check2').checked = false;
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.classBack == 1 ? 'all-content-day' : this.state.classBack == 2 ? 'all-content-night' : 'all-content'}>
                    <div className="header">APP BUILDING</div>
                    <div className={this.state.classSun ? 'sol-header' : ''}></div>
                    <div className={this.state.classMon ? 'moon' : ''}></div>
                    <div className={this.state.rocket ? 'rocket' : ''}></div>
                    <div className="row center-pc column-reverse-mobile space-between-mobile">
                        <div className="area-name">
                            Michael <b>Douglas</b>
                            <label className="text-name">DEVELOPER</label>
                        </div>
                        <div className="area-bulding center column">
                            {this.state.building}
                            <div className="floor">
                            </div>
                        </div>
                        <div className="area-control">
                            <div className="item-control">
                                <img src="img/light-icon.svg" className="icon-control"></img>
                                <div className="check">
                                    <input id="check" type="checkbox" className="circle" onClick={() => this.turnAllLightsOn()}></input>
                                    <label htmlFor="check"></label>
                                </div>
                            </div>
                            <div className="item-control">
                                <img src="img/day-icon.svg" className="icon-control"></img>
                                <div className="check">
                                    <input id="check2" name="input-sun" type="checkbox" className="circle" onClick={() => this.callSun()}></input>
                                    <label htmlFor="check2"></label>
                                </div>
                            </div>
                            <div className="item-control">
                                <img src="img/night-icon.svg" className="icon-control"></img>
                                <div className="check">
                                    <input id="check3" name="input-moon" type="checkbox" className="circle" onClick={() => this.callMoon()}></input>
                                    <label htmlFor="check3"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;