import { OrganizationSwitcher, UserButton } from "@clerk/clerk-react";
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <h1 className="test">Clerk + React</h1>
      <img src={logo} alt="logo" />
      <UserButton />
      <OrganizationSwitcher />
    </div>
  );
}

export default App;
