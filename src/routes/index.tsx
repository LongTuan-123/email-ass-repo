import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/login";
import { Layout } from "../Layout";
import { Email } from "../components/email";
import { Contact } from "../components/contact";
import { Home } from "../components/home";
import { PrivateRoute } from "./PrivateRouter";

// function PrivateRoute(props: RouteProps) {
//   if (isLogin()) {
//     <Route {...props} />;
//     }
//     const {element, ...rest, Component} = props
//   return <Route {...rest} element={<Navigate to="login" />}></Route>;
// }

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />}></Route>
          <Route path="main" element={<Layout />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="email" element={<Email />}>
              <Route path="inbox" element={<Email />}>
                <Route path="inbox:id" element={<Email />}></Route>
              </Route>
              <Route path="sent" element={<Email />}>
                <Route path="sent:id" element={<Email />}></Route>
              </Route>
              <Route path="reminder" element={<Email />}>
                <Route path="reminder:id" element={<Email />}></Route>
              </Route>
              <Route path="spam" element={<Email />}>
                <Route path="spam:id" element={<Email />}></Route>
              </Route>
              <Route path="favorite" element={<Email />}>
                <Route path="favorite:id" element={<Email />}></Route>
              </Route>
              <Route path="junks" element={<Email />}>
                <Route path="junks:id" element={<Email />}></Route>
              </Route>
              <Route path="drafts" element={<Email />}>
                <Route path="drafts:id" element={<Email />}></Route>
              </Route>
            </Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
