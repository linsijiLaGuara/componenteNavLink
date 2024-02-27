import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navbarlink.css";
export default function Navbarlink() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <>
      <Navbar className="bg-navb">
        <Container>
          <NavLink className={setActiveClass} to="/">
            Home
          </NavLink>
          {"-"}
          <NavLink className={setActiveClass} to="/personajes">
            Personajes
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}
