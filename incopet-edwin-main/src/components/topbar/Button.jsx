import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  background: #0064d0;
  color: white;
  border-radius: 15px;
  padding: 15px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30px;
  font-size: 13px;

  &:hover {
    transform: scale(1.1);
  }
`;
