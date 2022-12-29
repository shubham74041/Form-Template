import React from 'react'
const Footer = ({ handleSubmit, modalIsOpen }) => {
    return (
        <div>
            <button className='footer-button' onClick={modalIsOpen}>Preview</button>
            <button className='footer-button' onClick={handleSubmit}>Submit</button>
        </div>

    )
}
export default Footer;