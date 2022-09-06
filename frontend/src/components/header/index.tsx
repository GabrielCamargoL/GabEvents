import { useState } from 'react';

import { ButtonLogin, Container, Content, LinksContainer, NavbarExtendedContainer, NavbarLink, NavbarLinkExtended, OpenLinksButton } from './styles';

const mountedStyle = { animation: "inAnimation 0.6s ease-in" };

interface HeaderProps {
  onOpenLoginModal: () => void;
}

export function Header({ onOpenLoginModal }: HeaderProps) {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const token = localStorage.getItem('token');

  function handleClick(e: any) {
    e.querySelector().scrollIntoView();
  }

  return (
    <>
      <Container extendNavbar={extendNavbar} id='home'>
        <Content>
          <h2> GabEvents </h2>

          <OpenLinksButton onClick={() => setExtendNavbar(!extendNavbar)}>
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>

          <LinksContainer>
            <NavbarLink to="#home" onClick={e => handleClick(e)}>HOME</NavbarLink>
            <NavbarLink to="#featuredShows" onClick={e => handleClick(e)}>SHOWS</NavbarLink>
            <NavbarLink to="#projects" onClick={e => handleClick(e)}>AGENDA</NavbarLink>
            <NavbarLink to="#contact" onClick={e => handleClick(e)}>CONTATO</NavbarLink>

            {token ? (
              <span>Olá, {localStorage.getItem('username')?.toUpperCase()}</span>
            ) :
              (
                <ButtonLogin type="button" onClick={onOpenLoginModal}>LOGIN</ButtonLogin>
              )
            }
          </LinksContainer>
        </Content>


        {extendNavbar && (
          <NavbarExtendedContainer style={mountedStyle}>
            <NavbarLinkExtended to="#home" onClick={e => handleClick(e)}>HOME</NavbarLinkExtended>
            <NavbarLinkExtended to="#featuredShows" onClick={e => handleClick(e)}>SHOWS</NavbarLinkExtended>
            <NavbarLinkExtended to="#agenda" onClick={e => handleClick(e)}>AGENDA</NavbarLinkExtended>
            <NavbarLinkExtended to="#contact" onClick={e => handleClick(e)}>CONTATO</NavbarLinkExtended>

            {token ? (
              <span>Olá, {localStorage.getItem('username')}</span>
            ) :
              (
                <ButtonLogin type="button" onClick={onOpenLoginModal}>LOGIN</ButtonLogin>
              )
            }

          </NavbarExtendedContainer>
        )}

        <h1>A Melhor Plataforma Para <br />Comprar Ingressos</h1>

        <p>Adquira o ingresso para o show de sua banda ou  artista favorito</p>
      </Container>
    </>
  )
}