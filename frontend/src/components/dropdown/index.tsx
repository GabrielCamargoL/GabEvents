import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

import { Container } from "./styles";

interface PropsDropdown {
  name?: string | null;
  hiddenDropdown: boolean;
}

const Dropdown: React.FC<PropsDropdown> = ({
  name = "Fulano",
  hiddenDropdown = true,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <Container className="dropdown-container" hidden={hiddenDropdown}>
      <span onClick={() => setIsHidden(!isHidden)}>
        <p>Olá, {name} </p>
        <BsChevronDown size="1rem" />
      </span>

      <div onClick={() => logout()} className="dropdown-list-container" hidden={isHidden}>
        <ul>
          <li>Logout</li>
        </ul>
      </div>
    </Container>
  );
};

export default Dropdown;
