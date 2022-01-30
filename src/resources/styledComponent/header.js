import styled from "styled-components";

export const MenuUnit = styled.div`
  width: 190px;
  height: 35px;
  float: left;
  cursor: pointer;
  &:hover {
      background-color: white;
      color: #00b1b9;
  }
`

export const MenuContainer = styled.div`
  background-color: #007483;
  width: 100%;
  color: white;
  text-align: center;
  
`

export const MenuBox = styled.div`
  width : ${props => props.length * 190}px;
  height: 35px;
  margin: 0px auto; 
  font-size: 20px;
  
`