import styled from "styled-components";
export const Smallbutton = styled.div`
  border: 0.01em solid darkblue;
  border-style: dashed;
  width: 180px;
  padding: 0px;
  height: 50px;
  display: grid;
  grid-template-columns: 20% auto;
  color: grey;
  grid-gap: 10px;
  position: relative;
  right: 80px;
  top: -5px;

  h4 {
    font-size: 12px;
    position: relative;
    top: 10px;
    padding-left: 3px;
  }
  .white-text {
    color: white;
  }
  p {
    font-size: 9px;
    position: relative;
    top: -34px;
    padding-left: 3px;
  }
  img {
    padding-left: 3px;
    width: 90%;
  }
`;
