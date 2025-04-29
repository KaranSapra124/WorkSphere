import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Welcome My Friend!</h1>
                    <p> Please log in to WorkSphere and experience seamless HR management at your fingertips.</p>
                    <Link to={"/"}>Sign Up</Link>
                </div>
                <div>
                    <h1>Create An Account</h1>
                    <div>

                    </div>
                    <div>
                        <input type="email" name="" id="" />
                        <input type="password" name="" id="" />
                        <button>Log in</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
