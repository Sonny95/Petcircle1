import HeadImg from "../../resources/Photo/Adimg.jpg";
import Dog1 from "../../resources/Photo/dog-1.png";
import Cat1 from "../../resources/Photo/cat-1.png";
import Fish from "../../resources/Photo/fish-1.png";
import Bird1 from "../../resources/Photo/bird-1.png";
import Reptile from "../../resources/Photo/reptile-1.png";
import SmallP1 from "../../resources/Photo/bunny-1.png";
import Hores from "../../resources/Photo/pony-1.png";
import Dfood from "../../resources/Photo/dog-food.png";
import Dtreats from "../../resources/Photo/dog-treats.png";
import Dworm from "../../resources/Photo/dog-flea-and-worming.png";
import Dtoys from "../../resources/Photo/dog-toys.png";
import Cfood from "../../resources/Photo/cat-food.png";
import Ctreats from "../../resources/Photo/cat-treats.png";
import Clitter from "../../resources/Photo/cat-litter.png";
import Ctoys from "../../resources/Photo/cat-toys.png";
import Ad1 from "../../resources/Photo/1.jpg";
import Ad2 from "../../resources/Photo/2.jpg";
import Ad3 from "../../resources/Photo/3.jpg";
import P1 from "../../resources/Photo/11.png";
import P2 from "../../resources/Photo/22.png";
import P3 from "../../resources/Photo/33.png";
import P4 from "../../resources/Photo/44.png";
import P5 from "../../resources/Photo/55.png";
import P6 from "../../resources/Photo/66.png";
import React from "react";
import {
    AdBox,
    AdContainer,
    BetterPrice,
    BetterRange,
    BigCatButton,
    BigDogButton,
    BigDogImg,
    BodyBaner,
    BodyBox,
    BodyButtonBox,
    BodyButtonContainer,
    BodyButtonImg,
    BodyContainer,
    ButtonContainer,
    CatButtonContainer,
    CatFoodImg,
    CatSmallButton,
    CatTreatImg,
    DogButtonLetter,
    DogFood,
    LitterImg,
    ProductArea,
    ProductAreaFirst,
    ProductBigBox,
    ProductBox,
    ProductButton,
    ProductContainer,
    ProductLetter,
    SmallPetBox,
    SmallPetContainer,
    SmallPetImg,
    SubText,
    ToyBox,
    ToyImg,
    ToyLetter,
    ToysImg,
    WormingBox,
    WormingImg,
    WormingLetter
} from "../../resources/styledComponent/contents";

const Contents = () => {

    const petList = [{name: 'fish', src: Fish},
        {name: 'bird', src: Bird1},
        {name: 'Reptile', src: Reptile},
        {name: 'Small Pet', src: SmallP1},
        {name: 'Horse', src: Hores}]

    const adList = [
        {name : 'Ad1', src: Ad1 },
        {name : 'Ad2', src: Ad2 },
        {name : 'Ad3', src: Ad3 }
    ]

    const productList = [
        {name : 'P1', src : P1},
        {name : 'P2', src : P2},
        {name : 'P3', src : P3},
        {name : 'P4', src : P4},
        {name : 'P5', src : P5},
        {name : 'P6', src : P6},
    ]



    return (
        <>
            <div>
                <BodyBaner src={HeadImg}/>
            </div>

            <BodyContainer>
                <BodyBox>
                    <BetterRange>Better Range</BetterRange>
                    <BigDogButton>
                        <BigDogImg src={Dog1} />
                        <DogButtonLetter> Shop Dog ></DogButtonLetter>
                    </BigDogButton>

                    <BigCatButton>
                        <BigDogImg src={Cat1} />
                        <DogButtonLetter> Shop Cat ></DogButtonLetter>
                    </BigCatButton>


                    <SmallPetContainer>

                        {petList.map((value, index) => {
                            return <div style={{height: 65, width: 400, marginBottom: 2, backgroundColor: '#f5f6f8',
                               borderRadius : index === 0 ? '8px 8px 0px 0px' :  index === petList.length -1 ? ' 0px 0px 8px 8px' : ''
                            }}>
                                <SmallPetImg src={value.src} />
                                <SubText>{value.name} ></SubText>
                            </div>
                        })}

                    </SmallPetContainer>
                    <BodyButtonContainer>
                        <BodyButtonBox>
                            <BodyButtonImg src={Dfood}/>
                            <DogFood> Food </DogFood>
                        </BodyButtonBox>
                        <BodyButtonBox>
                            <BodyButtonImg src={Dtreats}/>
                            <DogFood> Treats </DogFood>
                        </BodyButtonBox>
                        <WormingBox>
                            <WormingImg src={Dworm}/>
                            <WormingLetter> Flea & Worming
                            </WormingLetter>
                        </WormingBox>

                        <ToyBox>
                            <ToyImg src={Dtoys}/>
                            <ToyLetter> Toys </ToyLetter>
                        </ToyBox>
                    </BodyButtonContainer>







                    <CatButtonContainer>
                        <CatSmallButton>
                            <CatFoodImg src={Cfood}/>
                            <DogFood> Food </DogFood>
                        </CatSmallButton>
                        <CatSmallButton>
                            <CatTreatImg src={Ctreats}/>
                            <DogFood> Treats </DogFood>
                        </CatSmallButton>
                        <CatSmallButton>
                            <LitterImg src={Clitter}/>
                            <DogFood> Litter </DogFood>
                        </CatSmallButton>
                        <CatSmallButton>
                            <ToysImg src={Ctoys}/>
                            <DogFood> Toys </DogFood>
                        </CatSmallButton>
                    </CatButtonContainer>
                </BodyBox>
            </BodyContainer>

            <AdContainer>
                <AdBox>
                    <BetterPrice>Better Price</BetterPrice>

                    {/*{adList.map((value, index) => {*/}
                    {/*    return <div style={{height: 150, width: 400, marginTop: 10, borderRadius: 10, float: 'left'}}>*/}
                    {/*        <div src={value.src} />*/}
                    {/*    </div>*/}

                    {/*})}*/}


                    <img src={Ad1}
                         style={{height: 150, width: 400, marginTop: 15, borderRadius: 10, float: 'left'}}/>
                    <img src={Ad2} style={{
                        height: 150,
                        width: 400,
                        marginTop: 15,
                        marginLeft: 25,
                        borderRadius: 10,
                        float: 'left'
                    }}/>
                    <img src={Ad3}
                         style={{height: 150, width: 400, marginTop: 15, borderRadius: 10, float: 'right'}}/>
                </AdBox>
            </AdContainer>




            <ProductContainer>
                <ProductBox>
                    <ProductLetter>Shop Aussie Made Products</ProductLetter>


                    <ProductBigBox>
                        <ProductAreaFirst>
                            <img src={P1} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 8}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Vetalogica</strong>
                                    Biologically Appropriate Adult Hunter Valley Havest Dry Dog Food, 11kg
                                </div>
                                <div>★★★★☆ 7</div>
                                <strong style={{fontSize: 25, margin: '5px auto'}}>$125.99</strong>
                            </div>
                            <ProductButton> + Add to Cart</ProductButton>
                        </ProductAreaFirst>
                        <ProductArea>
                            <img src={P2} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Bell and Bone</strong>
                                    Carob And Ginger Superfood Dog Treats, 150g
                                </div>
                                <div style={{marginTop: 21}}>
                                    <div>★★★★☆ 9</div>
                                    <strong style={{fontSize: 25, marginTop: '5px auto'}}>$11.9</strong>
                                </div>
                            </div>
                            <ProductButton> + Add to Cart</ProductButton>
                        </ProductArea>

                        <ProductArea>
                            <img src={P3} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Aussie Dog</strong>
                                    Home Alone, mini
                                </div>
                                <div style={{marginTop: 41}}>
                                    <div>★★★★☆ 10</div>
                                    <strong style={{fontSize: 25, margin: '5px auto'}}>$53.36</strong>
                                </div>
                            </div>
                            <ProductButton> + Add to Cart</ProductButton>
                        </ProductArea>
                        <ProductArea>
                            <img src={P4} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Petz Park</strong>
                                    Skin Coat, 45scoops
                                </div>
                                <div style={{marginTop: 41}}>
                                    <div>★★★★★ 9</div>
                                    <strong style={{fontSize: 25, margin: '5px auto'}}>$22.36</strong>
                                </div>
                            </div>
                            <ProductButton> + Add to Cart</ProductButton>
                        </ProductArea>
                        <ProductArea>
                            <img src={P5} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Healthy Everyday Pets</strong>
                                    Dry Dog Food Adult Athlete, 12kg
                                </div>
                                <div style={{marginTop: 22}}>
                                    <div>★★★★☆ 11</div>
                                    <strong style={{fontSize: 25, margin: '5px auto'}}>$101.24</strong>
                                </div>
                            </div>
                            <ProductButton> + Add to Cart</ProductButton>
                        </ProductArea>
                        <ProductArea>
                            <img src={P6} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>ZamiPet</strong>
                                    Dig Chews Complete Care Multi, 60pack
                                </div>
                                <div style={{marginTop: 22}}>
                                    <div style={{color: 'orange'}}>Leave the first review</div>
                                    <strong style={{fontSize: 25, margin: '5px auto'}}>$35.96</strong>
                                </div>
                            </div>
                            <ProductButton> + Add to Cart</ProductButton>
                        </ProductArea>
                    </ProductBigBox>
                </ProductBox>
            </ProductContainer>
        </>
    )
}

export default Contents