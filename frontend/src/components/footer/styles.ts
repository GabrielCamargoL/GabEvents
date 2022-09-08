import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: nowrap;

  width: 100%;
  padding: 3rem 3rem;
  
  min-height: 180px;
  background-color: ${props => props.theme.colors.dark};
  
  h2 {
    color: ${props => props.theme.colors.light}
  }

  @media (max-width: 1010px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    div * {
      margin-top: 2rem;
    }
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-right: 2rem;
  padding-bottom: 0.5rem;
`;

export const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-decoration: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(200%);
    font-weight: 700;
    cursor: pointer;
  }
`;

export const SocialsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  flex-wrap: nowrap;

  gap:3rem;
  

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;