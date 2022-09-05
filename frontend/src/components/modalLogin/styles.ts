import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: ${props => props.theme.colors.blue};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width:  100%;
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

    & + input {
      margin-top: 1rem;
    }
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

  p {
    margin-top: 2rem;
    color: ${props => props.theme.colors.blue};
    text-decoration: underline;
    cursor: pointer;
  }
`;