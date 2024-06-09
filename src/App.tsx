import { Route, Routes } from "react-router-dom";
import { Home } from "./_root/pages";

import SigninFrom from "./_auth/forms/SigninFrom";
import SignupFrom from "./_auth/forms/SignupFrom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import "./global.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninFrom />} />
          <Route path="/sign-up" element={<SignupFrom />} />
        </Route>

        {/* private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
