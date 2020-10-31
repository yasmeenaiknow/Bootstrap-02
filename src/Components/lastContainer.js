import React, { Component } from "react";

const data = {
    cardText:
        "lorem ipsum dolor sit amet, concerted aduipose alit seedo lorem ipumd ghyut cyujngvb lorem ipsum dolor sit amet, concerted aduipose alit seedo lorem ipumd ghyut cyujngvb ",
};
export default class Lastcontainer extends Component {
    render() {
        return (
            <div>
                <div className='row bg-light'>
                    <div className='col-md-8 text-left m-5'>
                        <h2 className='font-weight-bold'>
                            WELCOME TO COLOREGIALO
                        </h2>
                        <p>{data.cardText} </p>
                        <div className='d-flex justify-content-start'>
                            <button className='btn btn-dark m-1'>
                                Read <br /> more
                            </button>
                            <button className='btn btn-dark m-1'>
                                comments
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 text-left mt-5'>
                        <h2 className='font-weight-bold'>CATEGORIES</h2>
                        <div>
                            <ul className=''>
                                <li>alliquarn</li>
                                <li>alliquarn</li>
                                <li>alliquarn</li>
                                <li>alliquarn</li>
                                <li>alliquarn</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='d-flex pt-3'>
                    {this.renderCard("FUSCE ULTRIHYUSTY FRINGILLA")}
                    {this.renderCard("MECENAS LUCTUS ELEIFEND")}
                    {this.renderCard("MECENAS LUCTUS LECTUS")}
                </div>
                {this.renderFooter()}
            </div>
        );
    }

    renderCard = (heading) => {
        return (
            <div className='col bg-dark'>
                <div className='m-5 text-left'>
                    <h3 className='text-white col-md'>{heading} </h3>
                    <ul className='list-unstyled text-white m-3 text-white-50'>
                        <li className='mt-3'>
                            Masceds hged koih grfczxcvbnm, vbrm
                        </li>
                        <li className='mt-3'>gftyff hgytuygt hgtdtygg</li>{" "}
                        <li className='mt-3'>gftyff hgytuygt hgtdtygg</li>
                        <li className='mt-3'>gftyff hgytuygt </li>
                        <li className='mt-3'>
                            gftyff hgytuygt hgtdtygg bgffhyklofswx
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
    renderFooter = () => {
        return (
            <div className='d-flex flex-row justify-content-center bg-warning font-weight-bold p-5'>
                @ UNTITLED, ALL RIGHTS RESERVED, IMAGED BY PHOTOGRAPY | DESIGN BY YASS ^_^.
            </div>
        );
    };
}
