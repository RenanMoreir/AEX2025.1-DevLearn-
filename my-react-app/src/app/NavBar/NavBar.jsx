import { useState } from 'react'
import  './navbar.css'
import CodelabLogo from '../../assets/logo.png'
import Login from '../Login/Login.jsx'



function NavBar(){

    const [showLogin, setShowLogin] = useState(false);

    const handleOverlayClick = () => {
        setShowLogin(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    }

    const closeLogin = () => {
        setShowLogin(false);
    };

    return(
        <>
            <div className='NavBar'>
                <div className='logo navbar-brand'>
                    <img src={CodelabLogo} alt="Logo do codLab" className='d-inline-block align-text-top'/>
                    <h3 className='d-inline-block align-text-top'>Dev.learn()</h3>
                </div>
                {/*futura barra de pesquisa <Pesquisa></Pesquisa>*/}
                {/*<a className='login btn' href='/Login.html'>Login</a>*/}
                <button className='login btn' onClick={() => setShowLogin(true)}>Login</button>
            </div>

            {showLogin && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                <div className="modal-content">
                    <div onClick={handleModalClick}>
                        <Login closeLogin={closeLogin}/>
                    </div>
                </div>
              </div>
            )}
        </>
    );
}

export default NavBar;