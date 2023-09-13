import { useContext } from "react";
import { AuthContext } from "../../Provider/UserProvider";
import { FcGoogle } from "react-icons/fc"


const SocialLogin = () => {
    const { handleGoogleLogin } = useContext(AuthContext)
    return (
        <div>
            <div onClick={handleGoogleLogin} className="flex  mt-8 justify-center md:w-2/3 cursor-pointer hover:border hover:bg-slate-400 mx-auto items-center gap-4 border p-2 bg-slate-300 rounded-lg">
                <FcGoogle className="w-6 h-6" />
                <p>Sign In With Google</p>
            </div>

        </div>
    );
};

export default SocialLogin;