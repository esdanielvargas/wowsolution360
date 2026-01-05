import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

function Login() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, [user, navigate]);

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.info("Successful login");
      navigate("/app");
    } catch (error) {
      toast.error("Error logging in");
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error logging in", errorCode, errorMessage);
    }
  };

  return (
    <>
      <Helmet>
        <title>LOGIN - WOW SOLUTION 360</title>
      </Helmet>
      <section className="login">
        <Link to="/" className="logotype">
          <img
            src="/images/logotype.svg"
            alt="WOW SOLUTION 360 - LOGOTYPE"
            title="WOW SOLUTION 360 - LOGOTYPE"
            loading="eager"
            width={240}
            height={48}
          />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Login</label>
          <input
            type="email"
            placeholder="Email"
            className="email"
            {...register("email", {
              required: "Este campo es obligatorio.",
            })}
          />
          <input
            type="password"
            placeholder="Password"
            className="password"
            {...register("password", {
              required: "Este campo es obligatorio.",
            })}
          />
          <button type="submit" title="Log In" className="button action-button">
            LOG IN
          </button>
          <p>
            {"I don't have an account? "}
            <Link to="/register">Register</Link>
          </p>
        </form>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover
        theme="light"
        icon={true}
      />
    </>
  );
}
export default Login;
