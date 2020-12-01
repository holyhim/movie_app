import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
