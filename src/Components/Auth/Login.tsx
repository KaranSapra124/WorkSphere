import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div className="flex shadow max-w-screen-md mx-auto ">
                <div className="bg-primary w-1/2 p-5">
                    <h1 className="text-white font-bold lg:text-3xl text-2xl">Welcome My Friend!</h1>
                    <p className="text-white lg:text-sm text-xs font-semibold"> Please log in to WorkSphere and experience seamless HR management at your fingertips.</p>
                    <button className="bg-white text-black py-1 px-4 rounded-lg my-2 ">Sign Up</button>
                </div>
                <div className="flex justify-center items-center mx-auto flex-col gap-5 p-6">
                    <h1 className="text-primary text-center font-bold lg:text-2xl text-xl">Create An Account</h1>
                    <div className="flex gap-5 flex-col">
                        <input className="p-2 shadow text-primary font-semibold" placeholder="Enter Your Email..." type="email" name="" id="" />
                        <input className="p-2 shadow text-primary font-semibold" placeholder="Enter Your Password..." type="password" name="" id="" />
                        <button className="bg-primary text-white py-2 px-4 rounded-lg">Log in</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
