import { Helmet } from "react-helmet";
import { auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { addDoc, doc, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { name, email, phone, address, password } = data;

    try {
      // Verificar si el correo electrónico ya está en uso
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        toast.error("Email is already in use");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      // Enviar correo de verificación
      await updateProfile(user, {
        displayName: name,
        photoURL: "",
      });

      await sendEmailVerification(user);

      await addDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        phone,
        address,
        password,
        since: serverTimestamp(),
      });

      await signOut(auth);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Email is already in use");
          break;
        case "auth/invalid-email":
          toast.error("Invalid mail");
          break;
        case "auth/weak-password":
          toast.error("Password is too weak");
          break;
        default:
          toast.error("Unidentified error");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>REGISTER - WOW SOLUTION 360</title>
        <link rel="canonical" href={`${window.location.origin}/register`} />
      </Helmet>
      <section className="register">
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
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>Register</label>
          <input
            type="text"
            placeholder="Display name"
            className="input"
            {...register("name", {
              required: "Este campo es obligatorio.",
            })}
          />
          <input
            type="email"
            placeholder="Email address"
            className="input"
            {...register("email", {
              required: "Este campo es obligatorio*",
            })}
          />
          <input
            type="tel"
            placeholder="Telephone"
            className="input"
            {...register("phone", {
              required: "Este campo es obligatorio*",
            })}
          />
          <input
            type="text"
            placeholder="Address"
            className="input"
            {...register("address", {
              required: "Este campo es obligatorio*",
            })}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register("password", { required: true })}
          />
          <button type="submit" className="button action-button">
            SIGN UP WITH EMAIL
          </button>
          <p>
            {"Already have an account? "}
            <Link to="/login">Log In</Link>
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
export default Register;
