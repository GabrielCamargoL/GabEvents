import { Link } from "react-router-dom";
import styled from "styled-components";

interface ExtendProps {
  extendNavbar: boolean;
}

export const Container = styled.header`
  @media (max-width: 900) {
    
  }

  height: ${({ extendNavbar }: ExtendProps) => (extendNavbar ? "100vh" : "570px")};
  background-color: ${props => props.theme.colors.blue};
  background-image: url(https://i.imgur.com/v4Z92BD.png);
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    margin-top: ${({ extendNavbar }: ExtendProps) => (extendNavbar ? "3rem;" : "")};
  }

  p {
    margin-top: 50px;
    font-size: 24px;
    font-family: ${props => props.theme.fonts.body} sans-serif;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: ${props => props.theme.colors.light}
  }
  `;

export const Content = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  
  padding: 0rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  h2 {
    color: ${props => props.theme.colors.light}
  }

`;

export const ButtonLogin = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 56px;
  width: 116px;
  padding: 18px 34px;
  border-radius: 8px;
  border: none;

  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.blue};

  transition: 0.4s;

  :hover {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.light};
  }
`;


//-----------------------------------------------------------------
// nav options

export const OpenLinksButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${props => props.theme.colors.light};
  font-size: 45px;
  cursor: pointer;

@media(min-width: 940px) {
  display: none;
}
`;

export const LinksContainer = styled.div`
  width: 50%;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;

  @media(max-width: 939px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
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

export const NavbarLinkExtended = styled(Link)`
  color:${props => props.theme.colors.light};
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-decoration: none;
  margin: 10px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(200%);
    font-weight: 500;
    cursor: pointer;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transition-duration: 2s;

  @media(min-width: 940px) {
    display: none;
  }

  @keyframes inAnimation {
    0%{
      opacity: 0;
      visibility: hidden;
    }
    100%{
      opacity: 1;
      visibility: visible;
    }
  }
`;