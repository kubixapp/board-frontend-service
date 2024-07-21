import styled, { css } from "styled-components";

interface IProps {
  $alam: boolean;
}

const Container = styled.button<IProps>`
  cursor: pointer;
  outline: none;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 100%;
  border: 1px solid var(--gray-400);
  background-color: var(--gray-200);
  transition: all ease-in-out 0.3s;
  position: relative;

  ${({ $alam }) =>
    $alam
      ? css`
          .alam {
            position: absolute;
            width: 10px;
            aspect-ratio: 1/1;
            border-radius: 100%;
            background-color: var(--error-main);
            top: 3px;
            right: 2px;
          }
        `
      : css`
          &:hover {
            border-color: var(--blue-200);
            background-color: var(--blue-100);
          }
        `}
`;

export { Container };
