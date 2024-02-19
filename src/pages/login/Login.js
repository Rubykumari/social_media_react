import './Login.scss'

export const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="logo">Rubysocial</h3>
                    <span className="desc">Coonect with friends and the world around you on Rubysocial.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder='Email' />
                        <input type="text" className="loginInput" placeholder='Password' />
                        <button className="loginBtn">Log In</button>
                        <span className="forgotText">Forgot Password</span>
                        <button className="registBtn">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
