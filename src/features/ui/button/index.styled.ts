import styled, { css } from "styled-components";

interface IProps {
  $style: string;
  $size: string;
}

const Container = styled.button<IProps>`
  outline: none;
  cursor: pointer;
  background-color: ${({ $style }) =>
    $style !== "primary" ? "var(--blue-main)" : ""};
  display: grid;
  ${({ $size }) =>
    $size === "sm"
      ? css`
          height: 40px;
          aspect-ratio: 1/1;
          border-radius: 100%;
          place-items: center;
          border: 0;
        `
      : ""}
`;

export { Container };
