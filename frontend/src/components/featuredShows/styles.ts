import styled from "styled-components";


export const Container = styled.div`
  margin: 0 auto;
  padding: 10rem 1rem 2rem;

  h2 {
    margin-left: 350px;
    
    @media (max-width: 1350px) {
      margin-left: 200px;
    }

    @media (max-width: 1100px) {
      margin-left: 10px;
    }
    
    @media (max-width: 600px) {
      margin-left: 10px;
    }

  }
`;


// -----------------------------------------------------------------

export const CarouselShows = styled.div`
  margin: 0 auto;
  padding: 3rem 0rem 0rem;
`;

export const Card = styled.div`
  margin-top: 2rem;
  margin-right: 10px;
  max-width: 370px;
  min-width: 370px;
  max-height: 650px;

  @media (max-width: 450px) {
    width: 300px;
  }

  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;

  div {
    &.card-texts-container {
      padding: 0.5rem 1.5rem 1.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

    }

    &.card-links-container {
      padding: 0.5rem 1.5rem 1.5rem;
      margin-top: 1.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
      justify-self: flex-end;
      margin-top: auto;
    }

    img {
      height: 20px;
      width: 20px;
      margin: 0 5px 0 0;
    }
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: 370px;

    @media (max-width: 370px) {
      height: 150px;
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    
    &.title {
      font-size: 1.5rem;
      align-self: center;
      color: ${props => props.theme.colors.dark};
    }

    &.techs {
      color: ${props => props.theme.colors.lightRed};
    }
  }
`;