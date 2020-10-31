import React, { Component } from "react";
import Img1 from "../images/img06.jpg";
import Img2 from "../images/img07.jpg";
import Img3 from "../images/img08.jpg";

export default class Maintwo extends Component {
    render() {
        return (
            <div className='row d-flex m-5'>
                <div className='col'>{this.card1()}</div>
                <div className='col'>{this.card2()}</div>
                <div className='col'>{this.card3()}</div>
            </div>
        );
    }

    card1 = () => {
        return (
            <div className='row'>
                <div className='col'>
                    <div className='card' style={{ width: "35rem" }}>
                        <h3 className='card-title d-flex align-center font-weight-bolder m-3'>
                            MAECENAS LUCTUS
                        </h3>
                        <img src={Img1} className='card-img-top my-3 p-3' />
                        <div className='card-body px-1'>
                            <p className='card-text text-left p-0'>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's content
                            </p>
                            <div className='d-flex justify-content-start'>
                                <button className='btn btn-dark m-3'>
                                    Read <br /> more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    card2 = () => {
        return (
            <div className='row'>
                <div className='col'>
                    <div className='card' style={{ width: "35rem" }}>
                        <h3 className='card-title d-flex align-center font-weight-bold m-3'>
                            FUSCE FRINGILLA
                        </h3>
                        <img src={Img2} className='card-img-top my-3 p-3' />
                        <div className='card-body px-1'>
                            <p className='card-text text-left p-0'>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's content
                            </p>
                            <div className='d-flex justify-content-start'>
                                <button className='btn btn-dark m-3'>
                                    Read <br /> more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    card3 = () => {
        return (
            <div className='row'>
                <div className='col'>
                    <div className='card' style={{ width: "35rem" }}>
                        <h3 className='card-title d-flex align-center font-weight-bold m-3'>
                            PRAESENT MATTIS1
                        </h3>
                        <img src={Img3} className='card-img-top my-3 p-3' />
                        <div className='card-body px-1'>
                            <p className='card-text text-left p-0'>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's content
                            </p>
                            <div className='d-flex justify-content-start'>
                                <button className='btn btn-dark m-3'>
                                    Read <br /> more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
