import { Link, Outlet, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { DollarSign, Image, LayoutDashboard, LogOut, User } from "lucide-react";
import MenuStates from "../utils/MenuStates";

function AppLayout() {
  const currUser = getAuth();
  const user = useAuthContext();
  const navigate = useNavigate();

  const { dashboard, publicity, pricing, account } = MenuStates();

  useEffect(() => {
    if (user.user.emailVerified === false) {
      toast.warning("You need to verify your email", {
        position: "top-right",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        theme: "colored",
      });
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(currUser);
      toast.info("Successful logout");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
      console.log("Logout failed", error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-menu">
        <div>
          <div className="block-user">
            <div className="user-card">
              <div className="user-avatar">
                <img
                  src={
                    user?.user?.photoURL
                      ? user?.user?.photoURL
                      : "../images/avatar.png"
                  }
                  alt={`Avatar of ${user?.user?.displayName}`}
                  title={`Avatar of ${user?.user?.displayName}`}
                  loading="eager"
                  width={43}
                  height={43}
                />
              </div>
              <div className="user-details">
                <div className="user-name">{user?.user?.displayName}</div>
                <div className="user-email" title={user?.user?.email}>
                  {user?.user?.email}
                </div>
              </div>
            </div>
          </div>
          <ul>
            {true && (
              <li>
                <Link
                  to="/app"
                  className={`item-list${dashboard ? " active" : ""}`}
                >
                  <div className="wrapper">
                    <LayoutDashboard />
                    Dashboard
                  </div>
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/app/publicity"
                className={`item-list${publicity ? " active" : ""}`}
              >
                <div className="wrapper">
                  <Image />
                  Publicity
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/app/pricing"
                className={`item-list${pricing ? " active" : ""}`}
              >
                <div className="wrapper">
                  <DollarSign />
                  Pricing
                </div>
              </Link>
            </li>
            {true && (
              <li>
                <Link
                  to="/app/account"
                  className={`item-list${account ? " active" : ""}`}
                >
                  <div className="wrapper">
                    <User />
                    Account
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <hr />
            </li>
            <li>
              <div
                type="button"
                className="item-list log-out"
                title="Log Out"
                onClick={handleSignOut}
              >
                <div className="wrapper">
                  <LogOut />
                  Log out
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard-content">
        <Outlet />
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
  );
}
export default AppLayout;
