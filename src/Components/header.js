import React, { Component } from "react";
import Img from "../images/img02.jpg";

export default class Header extends Component {
    render() {
        return (
            <div className='bg-warning'>
                <img
                    src={Img}
                    style={{
                        width: "100%",
                        padding: "10px 10px 20px 10px",
                        height: "80vh",
                    }}
                />
            </div>
        );
    }
}
