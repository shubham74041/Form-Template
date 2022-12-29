import { useNavigate } from 'react-router-dom'

import "../App.css"
const Navbar = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/Create-Template')
    }

    return (
        <>
            <div className='footer' >
                <div className='title'>Create Template</div>
                <div>
                    <button className='button' onClick={handleSubmit}>Create</button>
                </div>
                <div>
                    <button className='button'>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;