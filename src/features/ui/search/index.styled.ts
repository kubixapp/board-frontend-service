import styled from "styled-components";

const Container = styled.div``;

const SearchButton = styled.button`
  transition: all ease-in-out 0.3s;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: grid;
  place-items: center;
  border: 1px solid var(--gray-500);
  background-color: var(--gray-200);

  &:hover {
    border-color: var(--blue-200);
    background-color: var(--blue-100);
  }

  &:has(input:checked) {
    opacity: 0;
  }
`;

export { Container, SearchButton };
