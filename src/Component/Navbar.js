import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-light p-3">
            <a className="navbar-brand ml-5 text-white font-weight-bold" href="#">Weather System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                <form className="form-inline my-2 my-lg-0">
                    <Link to='/'><button className="btn btn-outline-secondary btn-light my-2 my-sm-0 m-3 font-weight-bold" type="submit">Home</button></Link>
                    <Link to='/wheater'><button className="btn btn-outline-secondary btn-light my-2 my-sm-0 font-weight-bold" type="submit">Locate Weather</button></Link>
                </form>
            </div>
        </nav>

    );
}

export default Navbar;