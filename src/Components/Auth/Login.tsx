import { Link } from "react-router-dom"

type isLogin = boolean
const Login: React.FC<{ isLogin: isLogin }> = ({ isLogin }) => {
    return (
        <>
            {isLogin ? <div className="flex justify-center items-center h-screen">
                <div className="flex  shadow h-fit  max-w-screen-md mx-auto ">
                    <div className="bg-primary flex flex-col justify-center items-center gap-3  w-1/2 p-5">
                        <h1 className="text-white font-extrabold lg:text-2xl text-xl">Welcome My Friend!</h1>
                        <p className="text-white lg:text-md text-xs font-semibold text-center"> Please log in to <span className="font-extrabold">WorkSphere</span> and experience seamless HR management at your fingertips.</p>
                        <Link to={"/sign-up"} className=" text-white border border-white  py-1 px-8 lg:text-lg cursor-pointer hover:scale-105 transition-all text-sm rounded-l-full rounded-r-full my-2 hover:bg-white hover:text-primary ">Sign Up</Link>
                    </div>
                    <div className="flex justify-center items-center mx-auto flex-col gap-5 p-6">
                        <h1 className="text-primary text-center font-bold lg:text-2xl text-xl">Create An Account</h1>
                        <div className="flex gap-5 flex-col">
                            <input className="p-2 shadow text-primary font-semibold" placeholder="Enter Your Email..." type="email" name="" id="" />
                            <input className="p-2 shadow text-primary font-semibold" placeholder="Enter Your Password..." type="password" name="" id="" />
                            <Link to={"/login"} className="bg-primary text-white py-1 text-center px-8 lg:text-lg text-sm cursor-pointer hover:scale-105 hover:shadow-lg transition-all rounded-l-full rounded-r-full">Log in</Link>
                        </div>
                    </div>
                </div>

            </div> : <div className="flex  justify-center items-center h-screen">
                <div className="flex flex-row-reverse  shadow h-fit  max-w-screen-md mx-auto ">
                    <div className="bg-primary flex flex-col justify-center items-center gap-3  w-1/2 p-5">
                        <h1 className="text-white font-extrabold lg:text-2xl text-xl">Welcome My Friend!</h1>
                        <p className="text-white lg:text-md text-xs font-semibold text-center"> Please log in to <span className="font-extrabold">WorkSphere</span> and experience seamless HR management at your fingertips.</p>
                        <Link to={"/login"} className=" text-white border border-white  py-1 px-8 lg:text-lg cursor-pointer hover:scale-105 transition-all text-sm rounded-l-full rounded-r-full my-2 hover:bg-white hover:text-primary ">Login</Link>
                    </div>
                    <div className="flex justify-center items-center mx-auto flex-col gap-5 p-6">
                        <h1 className="text-primary text-center font-bold lg:text-2xl text-xl">Create An Account</h1>
                        <div className="flex gap-5 flex-col">
                            <input className="p-2 shadow text-primary font-semibold" placeholder="Enter Your Email..." type="email" name="" id="" />
                            <input className="p-2 shadow text-primary font-semibold" placeholder="Enter Your Password..." type="password" name="" id="" />
                            <Link to={"/sign-up"} className="bg-primary text-white text-center py-1 px-8 lg:text-lg text-sm cursor-pointer hover:scale-105 hover:shadow-lg transition-all rounded-l-full rounded-r-full">Log in</Link>
                        </div>
                    </div>
                </div>

            </div>}
        </>
    )
}

export default Login
