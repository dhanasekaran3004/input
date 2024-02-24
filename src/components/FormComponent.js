import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const onButtonClick = () => {
        setEmailError('');
        setPasswordError('');
      
        if ('' === email) {
          setEmailError('Enter your email');
        }
      
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          setEmailError('Enter a valid email id');
        }
      
        if ('' === password) {
          setPasswordError('Enter a password');
        }
      
        if (password.length < 7) {
          setPasswordError('The password must be 8 characters or longer');
        }
        else{
            navigate('/success')
        }
    }
    return (
        <div className="form-container">
            <form>
                <div className={'inputContainer'}>
                    <label>username</label><br />
                    <input
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        className={'inputBox'}
                    />
                </div>
                {emailError !== '' && 
                    <div className="errorText">{emailError}</div>
                }
                <br />
                <div className={'inputContainer'}>
                <label>password</label><br />
                    <input
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'inputBox'}
                        type="password"
                    />
                </div>
                {passwordError !== '' && 
                    <div className="errorText">{passwordError}</div>
                }
                <br />
                <p className="forgotPass">Forgot password?</p>
                <br />
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="button" onClick={onButtonClick} value={'continue'} />
                </div>
            </form>
        </div>
    );
}

export default Form;