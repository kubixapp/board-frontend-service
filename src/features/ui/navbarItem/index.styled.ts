import styled, { css } from "styled-components";

interface Props {
  $main: boolean;
  $type: boolean;
  $color: string;
  $active: boolean;
}

const Container = styled.div<Props>`
  margin-left: ${({ $main }) => !$main && "32px"};

  .wrapper {
    width: 100%;
    overflow: hidden;
    padding: 12px 24px;
    display: grid;
    align-items: center;
    grid-template-columns: ${({ $type }) =>
      $type ? "auto auto 1fr" : "auto 1fr"};
    gap: 16px;
    cursor: pointer;
    border-radius: 6px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      border-left: 3px solid var(--blue-main);
      background-color: var(--blue-100);
      top: 0;
      transform: ${({ $main, $active }) =>
        $main && !$active && "translateX(-100%)"};
      opacity: ${({ $main, $active }) => !$main && !$active && 0};
      transition: all ease-in-out 0.4s;
    }

    &:hover {
      &::after {
        ${({ $main }) =>
          $main
            ? css`
                transform: translateX(0);
              `
            : css`
                opacity: 1;
              `}
      }

      ${({ $type }) =>
        $type &&
        css`
          svg:first-child {
            transition: all ease-in-out 0.4s;
            transform: rotate(90deg);
          }
        `}

      span {
        color: var(--blue-main);
      }
    }

    svg {
      position: relative;
      z-index: 2;
    }

    svg:first-child {
      transition: all ease-in-out 0.4s;
      transform: ${({ $active, $type }) => $active && $type && "rotate(90deg)"};
    }

    span {
      position: relative;
      z-index: 3;
      color: ${({ $color, $active }) =>
        $active ? "var(--blue-main)" : $color};
    }
  }
`;

export { Container };
