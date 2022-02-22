import styled from "styled-components";

export const Button = styled.button`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
font-size: 1.7rem;
padding: 10px 15px;
transition: 0.7s ease;

  
  :hover {
      cursor: pointer;
      background: none;
      border: 2px solid #fff;
      color: #fff;
  }
`
export const Modal = styled.div`
position: absolute;
left: 50%;
top: 20%;
transform: translate(-50%, -50%);
max-width: 300px;
background-color: #fff;
text-align: center;
border-radius: 8px;
`