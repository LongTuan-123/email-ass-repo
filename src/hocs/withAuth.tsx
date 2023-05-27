import { useState, useEffect } from "react";
import { isLogin } from "../util";
import { Navigate, useNavigate } from "react-router";
interface User {
  email: string;
  password: string;
  name: string;
  avatarUrl: string;
}
export const withAuth = (Component: any) => {
  const AuthComponent = (props: any) => {
    const navigate = useNavigate();

    const userInfoString: string | null = localStorage.getItem("user");
    const userInfo: User =
      typeof userInfoString === "string" ? JSON.parse(userInfoString) : null;

    useEffect(() => {
      if (!isLogin()) {
        navigate("/login");
      }
    }, []);

    return Component({ ...props });
  };

  return AuthComponent;
};
