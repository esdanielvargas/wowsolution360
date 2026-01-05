import { ChevronLeft } from "lucide-react";
import { useAuthContext } from "../context/authContext";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../firebase/config";
import {
  sendEmailVerification,
  // updatePassword,
  updateProfile,
} from "firebase/auth";
import { goBack } from "../utils/goBack";

function Account() {
  const user = useAuthContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const result = await updateProfile({
      displayName: data.name,
      // email: data.email,
      // password: data.password,
    });

    if (result.success) {
      toast.success("Changes saved successfully");
    } else {
      toast.error("Error saving changes");
    }
  };

  const onSubmitPassword = async (data) => {
    // reauthenticateUser(data, async () => {
    //   try {
    //     await updatePassword(auth.currentUser, data.newPassword);
    //     toast.success("Password updated successfully");
    //   } catch (error) {
    //     console.error("Error updating password", error);
    //     toast.error("Error updating password");
    //   }
    // });
  };

  const sendCode = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        await sendEmailVerification(user);
        toast.success("Verification email sent");
      } catch (error) {
        console.error("Error sending verification email", error);
        toast.error("Error sending verification email");
      }
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <button type="button" className="icon-button" onClick={() => goBack()}>
          <ChevronLeft />
        </button>
        <div className="title">Account</div>
        <button type="button" className="icon-button hidden"></button>
      </div>
      <div className="page-content">
        <br />
        <div className="form-box">
          {/* Formulario General */}
          <form className="block" onClick={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="name"
              placeholder="Display name"
              defaultValue={user?.user?.displayName}
              {...register("name", {
                required: "Este campo es obligatorio.",
              })}
              disabled={true}
            />
            <input
              type="email"
              className="email"
              placeholder="Email"
              defaultValue={user?.user?.email}
              {...register("email", {
                required: "Este campo es obligatorio*",
              })}
              disabled={true}
            />
          </form>
          {/* Formulario Correo */}
          <div className="block">
            <hr />
            <label htmlFor="">Update Email</label>
            <input
              type="email"
              className="email"
              placeholder="New Email"
              defaultValue={user?.user?.email}
              {...register("email", {
                required: "Este campo es obligatorio*",
              })}
            />
            <button type="button" className="button action-button">
              Update Email
            </button>
          </div>
          {/* Formulario Contraseña */}
          <form className="block" onSubmit={handleSubmit(onSubmitPassword)}>
            <hr />
            <label htmlFor="">Update Password</label>
            <input
              type="password"
              className="password"
              placeholder="Current Password"
              {...register("currentPassword", {
                required: "Este campo es obligatorio*",
              })}
            />
            <input
              type="password"
              className="password"
              placeholder="New Password"
              {...register("newPassword", {
                required: "Este campo es obligatorio*",
              })}
            />
            <button type="button" className="button action-button">
              Update Password
            </button>
          </form>
          {/*  */}
          {user?.user?.emailVerified ? (
            <div className="block">
              <hr />
              <label>You need to verify your email</label>
              <span>
                We have sent you an email with a verification link. Please check
                your inbox and click on the link to verify your email. If you
                haven't received the email, click the button below to send it
                again.
              </span>
              <button
                type="button"
                className="button action-button"
                onClick={() => sendCode()}
              >
                Send Code
              </button>
            </div>
          ) : null}
        </div>
        <ToastContainer
          position="bottom-right"
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
      </div>
    </div>
  );
}
export default Account;
