import './Register.scss'

export const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="logo">Rubysocial</h3>
                    <span className="desc">Coonect with friends and the world around you on Rubysocial.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder='Username' />
                        <input type="text" className="loginInput" placeholder='Email' />
                        <input type="text" className="loginInput" placeholder='Password' />
                        <input type="text" className="loginInput" placeholder='Confirm Password' />
                        <button className="loginBtn">Sign Up</button>
                        <button className="registBtn">Log into Account </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
