import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15rem;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;

  div:first-child{
    padding: 7rem 4rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 3rem;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.blue};

  img {
    width: 24px;
    height: 24px;
  }

  h2 {
    color: ${props => props.theme.colors.light};
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }

  h3 {
    font-size: 24px;
    color: ${props => props.theme.colors.light};
    opacity: 0.7;
    font-weight: 400;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
  }

  h5 {
    color: ${props => props.theme.colors.light};
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 34, 34, 0.03);
  padding: 7rem 7rem;
  
  h3 {
    font-size: 24px;
    color: ${props => props.theme.colors.dark};
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    margin-bottom: 2rem;
  }

  label {
    margin-top: 10px;

    color: ${props => props.theme.colors.dark};
    opacity: 0.7;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;

    & + input :focus {
      color: ${props => props.theme.colors.blue};
    }

     transition: 1s;
  }

  input {
    max-width:  100%;
    height: 4rem;
    margin-bottom: 1rem;
    background: none;
    border: none;
    border-bottom: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;
    outline: none;

    transition: 0.5s;

    &::placeholder {
      color: ${props => props.theme.colors.lightRed};
    }

    &:focus {
      border-bottom: 1px solid ${props => props.theme.colors.blue};
    }

  }

  input:focus + label {
    color: ${props => props.theme.colors.blue};
    font-weight: 600;
  }

  span:focus + label {
    color: ${props => props.theme.colors.blue};
  }

  span {
    
    display: block;
    line-height: 20px;
    
    width:  100%;
    margin-bottom: 1rem;
    height: auto;
    min-height: 5rem;
    
    border: none;
    border-bottom: 1px solid #d7d7d7;
    background: none;
    
    font-weight: 400;
    font-size: 1rem;
    
    overflow: hidden;
    resize: horizontal;
    outline: none;

    transition: 0.5s;

    &::placeholder {
      color: ${props => props.theme.colors.lightRed};
    }

    &:focus {
      border-bottom: 1px solid ${props => props.theme.colors.blue};
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.light};
    border: 0;
    border-radius: 0.7rem;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ColLabelInput = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

