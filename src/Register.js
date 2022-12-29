import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css"
const Register = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const handleSubmit = (e) => {
        if (['', null].includes(emailRef.current.value)) {
            return;
        }
        navigate("/Navbar")
    }
    return (
        <>
            <div className='register-main'>
                <div className='register'>
                    <input className='input-filed' type="email" placeholder="Enter User ID"
                        ref={emailRef} required
                    />
                    <div>
                        <button className='submit-button' onClick={handleSubmit}>Submit</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Register;