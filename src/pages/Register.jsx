import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center p-6">
        <div className="grid lg:grid-cols-2 items-center gap-6 max-w-6xl max-lg:max-w-lg w-full">
          <form className="lg:max-w-md w-full">
            <h3 className="text-gray-800 text-2xl font-bold mb-8">Create an account</h3>
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter name" />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter email" />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter password" />
              </div>
            </div>

            <div className="mt-6">
              <button type="button" className="py-3 px-6 text-sm text-white tracking-wide bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none">
                Register
              </button>
            </div>
            <p className="text-sm text-gray-800 mt-6">Already have an account? <Link to='/login' className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
          </form>

          <div className="h-full">
            <img src="https://readymadeui.com/login-image.webp" className="w-full h-full object-contain aspect-[628/516]" alt="login img" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;