import React from 'react';
import { NavLink } from 'react-router-dom';
class Navbar extends React.Component{
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">Skinshop</NavLink>

                    </div>
                    <ul className="nav navbar-nav">

                        <li><NavLink to="/vapen">Skin1</NavLink></li>
                        <li><NavLink to="/bild">Skin2</NavLink></li>
                        <li><NavLink to="/weapons">Skin3</NavLink></li>



                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/kundvagn"><span className="glyphicon glyphicon-shopping-cart"></span> Kundvagn</NavLink></li>


                    </ul>
                </div>
            </nav>
        );
    }

}
export default Navbar;