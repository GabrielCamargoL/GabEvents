import { Container, FooterLink, LinksContainer, SocialsContainer } from "./styles";

import facebookIcon from '../../assets/Socials/Facebook.png';
import twitterIcon from '../../assets/Socials/Twitter.png';
import linkedinIcon from '../../assets/Socials/Linkedin.png';
import instagramIcon from '../../assets/Socials/Instagram.png';

export function Footer() {

  function handleClick(e: any) {
    e.querySelector().scrollIntoView();
  }

  return (
    <>
      <Container>
        <h2>GabEvents</h2>

        <LinksContainer>
          <FooterLink to="/" onClick={e => handleClick(e)}>HOME</FooterLink>
          <FooterLink to="#featuredShows" onClick={e => handleClick(e)}>SHOWS</FooterLink>
          <FooterLink to="" onClick={e => handleClick(e)}>BLOG</FooterLink>
          <FooterLink to="#contact" onClick={e => handleClick(e)}>SOBRE O GABEVENTS</FooterLink>
        </LinksContainer>

        <SocialsContainer>
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={linkedinIcon} alt="" />
          <img src={instagramIcon} alt="" />
        </SocialsContainer>
      </Container>
    </>
  )
}