import {DogDogRightContainer, DogDogRightLetter} from "../../resources/styledComponent/dog-dogPage";
import {
    BirdContainer, BirdMountLetter, BirdReviewLetter, MountContainer, PriceContainer, PriceLetter,
    ProductImage,
    StartContainer,
    TitleContainer,
    TitleLetter
} from "../../resources/styledComponent/bird-birdPage";
import {Rate} from "antd";
import AutoDelivery from "../../resources/img/dog/autoDelivery.svg"
import {useLocation, useNavigate} from "react-router-dom";
export default function ProductContents({dataList}){

    let location = useLocation();
    let navigate = useNavigate();



    return <DogDogRightContainer>
        <div style={{width: '100%', height: 80}}>
            <DogDogRightLetter>Bird Food & Treats Online</DogDogRightLetter>
            <span styled={{float: 'left', paddigTop: 30}}> 1 -  out of 27 products</span>


        </div>

        {dataList.map(value => {
            return <BirdContainer onClick={() =>  navigate(`/product/${location.pathname.split('/')[1] +'_' + value.Product}`)}>

                <ProductImage src={'http://localhost:8080/img/bird/' + value.source}/>
                {/*<img src={value.source} style={{margin: '0px auto', width: '70%'}} width={100} alt=""/>*/}
                <TitleContainer>
                    <TitleLetter>{value.title}</TitleLetter>{value.subTitle}
                </TitleContainer>
                <StartContainer><Rate style={{float: 'left'}} disabled
                                      defaultValue={value.star}/>
                    <BirdReviewLetter>{value.review} Review</BirdReviewLetter>
                </StartContainer>
                <MountContainer>
                    <BirdMountLetter>{value.mount}</BirdMountLetter>
                    <BirdMountLetter>{value.mount2}</BirdMountLetter>
                </MountContainer>

                <div style={{width: '100%', height: 100}}>

                    <div style={{width: '100%', height: 37}}>
                        <PriceLetter>
                            ${(value.price).toFixed(2)}</PriceLetter>
                        <img style={{float: 'right', height: 30}} src={AutoDelivery}></img>
                    </div>
                    <PriceContainer>
                        <PriceLetter>
                            ${((value.price) + 0.78).toFixed(2)}</PriceLetter>
                    </PriceContainer>
                </div>
            </BirdContainer>

        })}
    </DogDogRightContainer>
}