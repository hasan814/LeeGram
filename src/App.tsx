import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
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
          <Route path="/signin" element={<SigninFrom />} />
          <Route path="/signup" element={<SignupFrom />} />
        </Route>

        {/* private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
