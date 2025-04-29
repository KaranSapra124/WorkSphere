import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div className="flex max-w-screen-md mx-auto ">
                <div className="bg-primary w-1/2 p-5">
                    <h1 className="text-white font-bold lg:text-3xl text-2xl">Welcome My Friend!</h1>
                    <p className="text-white lg:text-sm text-xs font-semibold"> Please log in to WorkSphere and experience seamless HR management at your fingertips.</p>
                    <button className="bg-white text-black py-1 px-4 rounded-lg my-2 ">Sign Up</button>
                </div>
                <div className="flex flex-col">
                    <h1>Create An Account</h1>
                    <div>

                    </div>
                    <div className="flex flex-col">
                        <input placeholder="Enter Your Email..." type="email" name="" id="" />
                        <input placeholder="Enter Your Email..." type="password" name="" id="" />
                        <button>Log in</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
