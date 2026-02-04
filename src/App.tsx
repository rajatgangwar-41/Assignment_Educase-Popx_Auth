import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Signup from "./Routes/SignUp";
import Signin from "./Routes/SignIn";
import UserProfile from "./Routes/UserPage";
import { UserProvider } from "./context/userContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
