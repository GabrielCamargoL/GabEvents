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
  
  .none {
    display: none;
  }
  `;

export const Card = styled.div`
  cursor: pointer;
  margin-top: 2rem;
  margin-right: 10px;
  max-width: 370px;
  max-height: 650px;

  border-radius: 24px;
  padding: 1rem;

  &:hover {
    background-color: rgba(252, 82, 82, 0.1);
  }

  &:hover div :last-child{
    color: rgba(252, 82, 82, 1);
    font-weight: 500;
  }

  @media (max-width: 450px) {
    width: 280px;
  }
  
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  
  div {
    &.card-texts-container {
      padding: 0.5rem 0rem 1.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
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
      font-size: 1.5rem;
      align-self: start;
      color: ${props => props.theme.colors.dark};
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
    }

    &.description {
      font-size: 1rem;
      align-self: start;
      color: ${props => props.theme.colors.dark};
    }

    &.hashtags {
      align-self: start;
      font-size: 1rem;
      font-style: italic;
      color: ${props => props.theme.colors.lightRed};
    }
  }
`;