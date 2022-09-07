import { useState } from 'react';
import Dropdown from '../../dropdown';

import { Container, ButtonLogin, Content, LinksContainer, NavbarExtendedContainer, NavbarLink, NavbarLinkExtended, OpenLinksButton } from './styles';

interface HeaderProps {
  onOpenLoginModal: () => void;
}

export function HomeHeader({ onOpenLoginModal }: HeaderProps) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const mountedStyle = { animation: "inAnimation 0.6s ease-in" };

  function handleClick(e: any) {
    e.querySelector().scrollIntoView();
  }

  return (
    <>
      <Container extendNavbar={extendNavbar} containerHeight='570px' id='home'>
        <Content>
          <h2> GabEvents </h2>

          <OpenLinksButton onClick={() => setExtendNavbar(!extendNavbar)}>
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>

          <LinksContainer>
            <NavbarLink to="/" onClick={e => handleClick(e)}>HOME</NavbarLink>
            <NavbarLink to="#featuredShows" onClick={e => handleClick(e)}>SHOWS</NavbarLink>
            <NavbarLink to="" onClick={e => handleClick(e)}>AGENDA</NavbarLink>
            <NavbarLink to="#contact" onClick={e => handleClick(e)}>CONTATO</NavbarLink>

            {token ?
              <Dropdown name={username} hiddenDropdown={false} />
              :
              <ButtonLogin type="button" onClick={onOpenLoginModal}>LOGIN</ButtonLogin>
            }
          </LinksContainer>
        </Content>

        {extendNavbar && (
          <NavbarExtendedContainer style={mountedStyle}>
            {token ?
              <Dropdown name={username} hiddenDropdown={false} />
              :
              <ButtonLogin type="button" onClick={onOpenLoginModal}>LOGIN</ButtonLogin>
            }
            <NavbarLinkExtended to="/home" onClick={e => handleClick(e)}>HOME</NavbarLinkExtended>
            <NavbarLinkExtended to="#featuredShows" onClick={e => handleClick(e)}>SHOWS</NavbarLinkExtended>
            <NavbarLinkExtended to="" onClick={e => handleClick(e)}>AGENDA</NavbarLinkExtended>
            <NavbarLinkExtended to="#contact" onClick={e => handleClick(e)}>CONTATO</NavbarLinkExtended>


          </NavbarExtendedContainer>
        )}

        <h1>A Melhor Plataforma Para <br />Comprar Ingressos</h1>

        <p>Adquira o ingresso para o show de sua banda ou  artista favorito</p>
      </Container>
    </>
  )
}