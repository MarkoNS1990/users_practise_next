import Link from "next/link";

function Login() {
  return (
    <div className="mx-auto flex flex-col align-center justify-center ">
      <form className="flex flex-col mt-3 justify-center align-center text-center ">
        <h2 className="text-center text-xl font-bold pb-5">LOGIN</h2>
        <div>
          <label className="mr-2">Username:</label>
          <input
            type="text"
            placeholder="username"
            className="border-black border-2 mb-2 p-3 rounded-md"
          />
        </div>
        <div>
          <label className="mr-3">Password:</label>
          <input
            type="password"
            placeholder="password"
            className="border-black border-2 mb-2 p-3 rounded-md"
          />
        </div>
      </form>
      <Link href="/">
        <h2 className="text-bold text-red-900 cursor-pointer text-center">
          {"<<"} Go back
        </h2>
      </Link>
    </div>
  );
}

export default Login;
