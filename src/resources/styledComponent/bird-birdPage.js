import styled from "styled-components";
import {Tag} from "antd";

export const BirdContainer = styled.div`
  Width: 200px;
  Height: 350px; 
  Margin: 20px;
  Float: left;
  Text-align: center;
  cursor : pointer;
`

export const BirdMountLetter = styled(Tag)`
color: black;
  Font-weight: 700;
  Float: left;
`
BirdMountLetter.defaultProps ={
    color : '#f5f6f8'
}

export const BirdReviewLetter = styled.div`
    float: right;
  padding-top: 10px;
    `

export const MountContainer = styled.div`
  height: 25px;
  width: 200px;
`

export const TitleLetter = styled.span`
    font-weight: 700;
   margin-right: 5px;
   `

export const TitleContainer = styled.div`
    text-align: left;
  margin-top: 10px;
    `

export const ProductImage = styled.img`
  margin: 0px auto;
  width: 70%   
`

ProductImage.defaultProps = {
    width : 100
}

export const StartContainer = styled.div`
    width: 200px; 
  height: 38px;
    `

export const PriceLetter = styled.div`
  font-size: 23px;
  font-weight: 700;
  float: left;
    `

export const PriceContainer = styled.div`
    width: 100%;
  height: 30px;
    `