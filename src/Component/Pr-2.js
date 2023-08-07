import React, { Component } from "react";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";

export default class Pr_2 extends Component {
    constructor() {
        super();
        this.state = {
            curTime: new Date().toLocaleTimeString(),
            break: "",
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }
    render() {
        let time = new Date().getMinutes();
        return (
            <>
                <h2 className="heading">PR2 Explorer</h2>
                <div className="app">
                    <div className="app-data">
                        <div className="border bg-success text-white">
                            <h2>Name:Ayush Rangani</h2>
                            <h1>Current Time : {this.state.curTime}</h1>
                            {time === 57 && <Breakfast />}
                            {time === 58 && <Lunch />}
                            {time === 59 && <Dinner />}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
