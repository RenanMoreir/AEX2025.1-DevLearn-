import styled from "styled-components";
import codeLabLogo from "../assets/logo.png"
import imagemFundo from "../assets/fundoDesk.png"
import fundoMobile from "../assets/signinmobile.png"
//não coloquei imagem de fundo como está no figma pois daria muito trabalho

export default function Exemplo(){
    return (
        <Container>
            <LeftPanel>
                <div className="logo-container">
                    <img src={codeLabLogo} alt="Logo do CodeLab" className="code-logo"/>
                </div>
            </LeftPanel>
            <RightPanel>
                <LoginFormCont>
                    <h1>Dev.Learn()</h1>

                    <p className="instruction-text">Please fill your detail to access your account.</p>

                    <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <input type="email" id="email" name="email" defaultValue="abcde.fgh@example.com" placeholder="Enter your email"></input>
                            <i className="fas fa-times-circle clear-icon"></i>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <input type="password" id="password" name="password" defaultValue="••••••••" placeholder="Enter your password"></input>
                            <i className="fas fa-eye-slash toggle-password"></i>
                        </div>
                    </div>

                    <a href="#" className="forgot-password">Forgot Password?</a>

                    <button type="submit" className="sign-in-button">Sign In</button>
                    </form>

                    <p className="signup-text">Don't you have an account? 
                        <a className="signup-link"> Sign up</a>
                    </p>
                </LoginFormCont>
            </RightPanel>
        </Container>
    )
}

const Container = styled.div`
    margin: 30px 0;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;

    background-color: #0F1D35;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        max-width: 100%;
        border-radius: 0;
        box-shadow: none;
    }

    @media(max-width: 576px) {
        padding: 30px 0;
    }
`
const LeftPanel = styled.div`
    flex: 1;
    background-color: transparent; 
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 50px;  
        text-align: center;
    }

    .code-logo {
        width: 350px;
        height: auto;
        margin-bottom: 20px;
        filter: brightness(0) invert(1) drop-shadow(0 0 0 0 #EC026B);
    }

    @media(max-width: 768px) {

        .code-logo {
            width: 190px;
        }

    }
`
const RightPanel = styled.div`
    padding: 40px 20px;
    width: 100%;
    overflow-x: hidden;
    flex: 1;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`
const LoginFormCont = styled.div`
    max-width: 580px;
    padding: 80px 50px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: left;
    position: relative;
    z-index: 3;

    h1 {
        font-size: 32px;
        font-weight: 700;
        color: #0F1D35;
        margin-bottom: 10px;
    }

    .instruction-text {
        font-size: 16px;
        color: #666666;
        margin-bottom: 30px;
        line-height: 1.5;
    }

    .form-group {
        width: 100%;
        margin-bottom: 25px;

        label {

            display: block;
            font-size: 14px;
            color: #333333;
            font-weight: 500;
            margin-bottom: 8px;

        }

        .input-wrapper {

            position: relative;
            display: flex;
            align-items: center;
            background-color: #f0f2f5;
            border-radius: 8px;
            padding: 0 15px;
            border: 1px solid #e0e0e0;

            input {

                flex-grow: 1;
                border: none;
                background-color: transparent;
                padding: 12px 0;
                font-size: 16px;
                color: #333333;
                outline: none;

                &::placeholder {
                    color: #aaaaaa;
                }

            }

            .clear-icon, .toggle-password {
                color: #666666;
                cursor: pointer;
                font-size: 16px;
                margin-left: 10px;
            }

        }

    }

    .forgot-password {
        display: block;
        text-align: right;
        font-size: 14px;
        color: #ec026b;
        text-decoration: none;
        margin-top: -10px;
        margin-bottom: 30px;
    }

    .sign-in-button {
        width: 100%;
        padding: 15px;
        background-color: #ec026b;
        color: #fff;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #d1005a;
        }

    }

    .signup-text {
        text-align: center;
        font-size: 15px;
        color: #333333;
        margin-top: 30px;

        .signup-link {
            color: #ec026b;
            text-decoration: none;
            font-weight: 600;
        }

    }
`