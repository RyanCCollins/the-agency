import styled, { css } from 'styled-components';

function styles() {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background .5s;
    cursor: pointer;
    p {
      margin: 0 !important;
      padding: 0 !important;
      font-family: "Raleway", sans-serif;
      font-weight: 300 !important;
      width: 85%;
      font-size: 2rem !important;
      line-height: 2rem !important;
      color: #fff !important;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      opacity: 0 !important;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-transition: opacity 0.5s !important;
      transition: opacity 0.5s !important;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.8);
      p {
        opacity: 1.0 !important;
      }
    }
  `;
}

export default styled.div`
  ${styles()}
`;
