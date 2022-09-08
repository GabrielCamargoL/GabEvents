import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  grid-gap: 100px;
  text-align: left;
  padding: 10rem 10vw;

  @media (max-width: 450px) {
    padding: 10rem 1vw;
  }

  div {
    display: flex;
    flex-direction: column;
  }

`;

export const Row = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  justify-content: center;
  margin-top: 10px;
  gap: 50px;
`;

export const Col = styled.div`
  display:flex;
  flex-direction: column;
`;

// -----------------------------------------------------------------

export const Card = styled.div`
  margin-top: 2rem;
  max-width: 370px;
  min-width: 350px;

  border-radius: 24px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  
  div {
    &.card-texts-container {
      padding: 0.5rem 0rem 1.5rem;
      display: flex;
      flex-direction: column;
    }
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: 370px;
    
    @media (max-width: 450px) {
      height: 280px;
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    
    &.title {
      font-size: 2rem;
      align-self: start;
      color: ${props => props.theme.colors.dark};
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
    }

    &.description {
      font-size: 1.2rem;
      align-self: start;
      color: ${props => props.theme.colors.dark};
    }

    &.price {
      font-size: 1.5rem;
      align-self: flex-end;
      color: ${props => props.theme.colors.dark};
    }

    &.hashtags {
      font-size: 1.2rem;
      font-style: italic;
      color: ${props => props.theme.colors.lightRed};
    }
  }
`;

export const FormBuyContainer = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 50px;
    max-width: 20ch;
    font-size: 2rem;
  }

  input {
    width:  100%;
    margin-top: 1rem;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: ${props => props.theme.colors.light};

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${props => props.theme.colors.lightRed};
    }
  }

  label {
    margin-top: 10px;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${props => props.theme.colors.blue};
    color: #FFF;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const SuccessAnimation = styled.div`
  #loading_container {
    z-index: 1;
    position: absolute;

    background-color: ${props => props.theme.colors.cian};
    backdrop-filter: blur(1px);

    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2, h3{
      padding: 0px 30px;
      color: ${props => props.theme.colors.light};
      font-family: ${props => props.theme.fonts.Headline} sans-serif;
      font-weight: 700;
    }
  }

div.loading_lottie {
    max-width: 250px;
    max-height: 250px;
  }
`;