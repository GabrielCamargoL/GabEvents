import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #00f; */
  
  &.dropdown-container span {
    height: 1.5rem;
    display: flex;
    align-items: flex-end;
    color: ${props => props.theme.colors.light};
    cursor: pointer;
    gap: 0.4rem;
  }
  
  p {
    font-family: ${props => props.theme.fonts.Headline};
    font-weight: 500;
    font-size: 1.3rem;
  }

  &.dropdown-container ul {
    position: fixed;
    padding: 1em;
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.blue};
    font-size: 1rem;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(33, 37, 41, 0.08);

    &:hover {
      background-color: ${props => props.theme.colors.blue};
      color: ${props => props.theme.colors.light}
    }
  }

  &.dropdown-container ul:first-child {
    padding-top: 0.8em;
  }

  &.dropdown-container ul {
    width: 9rem;
  }

  &.dropdown-container li {
    list-style: none;
    text-align: center;
  }

  &.dropdown-container li:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.light};
  }
  `;
