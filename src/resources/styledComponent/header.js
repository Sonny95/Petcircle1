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
export const ShipHeader = styled.div `
  background-color: #414141;
  width: 100%;
  height: 30px;
  color: white;
  text-align: center;
  padding-top: 5px;
`

export const ShipHeaderBox = styled.div `
  width: 1400px;
  height: 100%;
  margin: 0px auto;
  `

export const ShipHeaderLetter = styled.strong`
  font-size: 14px;
  float: left;
  margin-left: 600px;
  `
export const LoginImg = styled.img`
  height: 18px;
  width: 18px;
  float: left;
  margin-left: 10px;
`
export const SigninButtom = styled.div`
  float:left;
  margin-left:15px;
  `

export const CreatButton = styled.div`
   float:left;
  margin-left:5px;
  `

export  const HeaderLoginBox = styled.div`
  float: right;
  height: 100%;
  width: 300px;
  font-size: 12px;
`

export const CartBox = styled.div`
  color: black;
  background-color: yellow;
  width: 30px;
  height: 20px;
  border-radius: 10px;
  float: right;
`

export const CartImg = styled.img`
  height: 18px;
  width: 28px;
  margin-left: 10px;
`

export const HeadTopContainer = styled.div`
    background-color: #00b1b9; 
    width: 100%;
    height: 80px;
    color: white;
    `

export const HeadTopBox = styled.div`
    max-width: 1500px;
    height: 100%;
    margin: 0px auto;
    `
export const HeadLogo = styled.img`
height: 90px;
 width: 90px;
  margin-top: -12px;
   float: left;
   `
export const SearchBox = styled.div`
  width: 700px;
  float: left;
  margin-left: 20px;
  `
