import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MenuStates = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dashboard, setDashboard] = useState(false);
  const [publicity, setPublicity] = useState(false);
  const [pricing, setPricing] = useState(false);
  const [account, setAccount] = useState(false);

  useEffect(() => {
    const path = location.pathname.split("/").pop();

    setDashboard(path === "app");
    setPublicity(path === "publicity");
    setPricing(path === "pricing");
    setAccount(path === "account");
  }, [location]);

  const handleDashboard = () => {
    navigate(`/app`);
  };

  const handlePublicity = () => {
    navigate(`/app/publicity`);
  };

  const handlePricing = () => {
    navigate(`/app/pricing`);
  };

  const handleAccount = () => {
    navigate(`/app/account`);
  };

  return {
    dashboard,
    publicity,
    pricing,
    account,
    handleDashboard,
    handlePublicity,
    handlePricing,
    handleAccount,
  };
};

export default MenuStates;