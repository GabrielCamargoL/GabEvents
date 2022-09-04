import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 10rem 0rem 2rem;

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

export const CategoriesList = styled.div`
  margin: 3rem 1rem 0rem;

  display: grid;
  grid-template-columns: repeat(5,1fr);


  @media (max-width: 1800px) {
    grid-template-columns: repeat(4,1fr);
    grid-template-columns: 2;
  }

  @media (max-width: 1450px) {
    grid-template-columns: repeat(3,1fr);
    grid-template-columns: 2;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2,1fr);
    grid-template-columns: 3;
  }

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;

export const Card = styled.div`
  margin-top: 2rem;
  margin-right: 10px;
  padding: 5rem 2rem;
  
  width: 350px;
  height: 326px;

  border-radius: 24px;

  @media (max-width: 450px) {
    width: 280px;
  }

  display: flex;
  flex-direction: column;

  img {
    width: 40px;
    height: 40px;

    margin-bottom: 35px;
  }

  div {
    &.card-texts-container {
      padding: 0.5rem 0rem 1.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  }

  p {
    margin: 0.8rem 0;
    
    &.title{
      font-size: 1.5rem;
      font-family: 'Monteserrat', sans-serif;
      font-weight: 800;
    }
    
    &.description {
      font-size: 1rem;
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
    }
  }
`;