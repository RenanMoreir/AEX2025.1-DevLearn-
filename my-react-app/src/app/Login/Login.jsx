import './login.css';
import codeLabLogo from "/src/assets/logo.png";

export default function Login({ closeLogin }) {
  return (
    <div className="container">
      <div className="left-panel">
                <div className="logo-container">
                    <img src={codeLabLogo} alt="Logo do CodeLab" className="code-logo"/>
                </div>
            </div>
            <div className="right-panel">
                <div className="login-form-container">

                <button className="close-button" onClick={closeLogin} aria-label="Close login form">
                    &times;
                </button>

                    <h1>Dev.Learn()</h1>

                    <p className="instruction-text">Please fill your detail to access your account.</p>

                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-wrapper">
                                <input type="email" id="email" name="email" defaultValue="abcde.fgh@example.com" placeholder="Enter your email" />
                                <i className="fas fa-times-circle clear-icon"></i>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <input type="password" id="password" name="password" defaultValue="••••••••" placeholder="Enter your password" />
                                <i className="fas fa-eye-slash toggle-password"></i>
                            </div>
                        </div>

                        <a href="#" className="forgot-password">Forgot Password?</a>

                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>

                    <p className="signup-text">Don't you have an account? 
                        <a className="signup-link"> Sign up</a>
                    </p>
                </div>
            </div>
    </div>
  );
}
