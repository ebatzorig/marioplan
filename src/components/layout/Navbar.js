import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';

const Navbar = () => {
    return (
        <nav className="nav-wrapper.gret.darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar);