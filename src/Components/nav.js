import React from "react";

const Navigation = () => {
    return (
        <div className='mt-0 '>
            <nav className='navbar navbar-expand-lg navbar-light bg-warning'>
                <a className='navbar-brand font-weight-bold text-info' href='/'>
                    <h2 className='font-weight-bold mt-0 text-dark'>Colors</h2>
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controLs='navbarSupportedContent'
                    area-expanded='false'
                    area-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    class='collapse text-end navbar-collapse d-flex justify-content-end'
                    id='navbarSupportedContent'>
                    <ul className=' navbar-nav fontzise font-weight-bold m1-1'>
                        <button type='button' class='btn btn-dark'>
                            Homepage
                        </button>

                        <li className='nav-item p-3'>services </li>
                        <li className='nav-item p-3'>portfolio</li>
                        <li className='nav-item p-3'>about</li>
                        <li className='nav-item p-3'>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
