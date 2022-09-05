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

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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