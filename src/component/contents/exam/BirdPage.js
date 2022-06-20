import {useNavigate, useParams} from "react-router-dom";
import {Button, Divider, Input, Rate, Slider, Tag, space} from "antd";
import DogBanner from "../../../resources/img/dog/DogPageBanner.png"
import Checkbox from "antd/es/checkbox/Checkbox";
import {useEffect, useState} from "react";
import {BrandList, FlavourList, ProductList} from "../../../util/sample";
import {
    DogDogBanner,
    DogDogBigContainer,
    DogDogCheckBoxSelected,
    DogDogContainer,
    DogDogLeftContainer,
    DogDogMenuNameBox, DogDogRightContainer, DogDogRightLetter,
    DogDogVarietyBox,
    DogDogVarietyContainer,
    DogDogVarietyCountBox,
    VerietyTrigger
} from "../../../resources/styledComponent/dog-dogPage";
import {CloseCircleOutlined} from '@ant-design/icons';
import AutoDelivery from "../../../resources/img/dog/autoDelivery.svg"
import {BirdBrandList, BirdBreedList, BirdProductList, BirdTypeList, BirdVarietyList} from "../../../util/BirdSample";




const {Search} = Input;

export default function BirdPage() {
    let params = useParams();
    let navigate = useNavigate();


    const [birdVarietyTrigger, setBirdVarietyTrigger] = useState(false);
    const [birdTypeTrigger, setBirdTypeTrigger] = useState(false);
    const [birdBreedTrigger, setBirdBreedTrigger] = useState(false);
    const [birdBrandTrigger, setBirdBrandTrigger] = useState(false);

    const [birdVarietyCheck, setBirdVarietyCheck] = useState([]);
    const [birdBrandCheck, setBirdBrandCheck] = useState([]);
    const [birdTypeCheck, setBirdTypeCheck] = useState([]);
    const [birdBreedCheck, setBirdBreedCheck] = useState([]);
    const [ratingCheck, setRatingCheck] = useState([]);

    const [maxPrice, setMaxPrice] = useState(0);
    const [price, setPrice] = useState([0, 0]);
    const [initSlider, setInitSlider] = useState([0, 0]);

    const [dataList, setDataList] = useState(BirdProductList)
    const [sliderInit, setSliderInit] = useState(true)


    // BirdVariety CHECK 관리
    const varChangeChecked = (param, value) => {
        const copyList = birdVarietyCheck;
        // dataList.filter
        if (param) {
            copyList.push(value.name);
            setBirdVarietyCheck(copyList);
            console.log(copyList,'open')
            console.log(setBirdVarietyCheck(copyList),'whoareyou')
        }
        else {
            const resultData = birdVarietyCheck.filter(src => src !== value.name);
            setBirdVarietyCheck(resultData);
            console.log(resultData,'tlqkf')
        }

        // const resultData = birdVarietyCheck.map(value => {
        //     const filterData = BirdProductList.filter((src) => {
        //         if(src.variety === value){
        //             return src
        //         }
        //     });
        //     return filterData;
        //     console.log(filterData,'tqkf')
        // }).flatMap(x => x);


        // setDataList(resultData);
    }

    // brand CHECK 관리
    const birdBrandChangeChecked = (param, value) => {
        const copyList = birdBrandCheck;
        if (param) {
            copyList.push(value.name);
            setBirdBrandCheck(copyList);
        } else {
            const resultData = birdBrandCheck.filter(src => src !== value.name);
            setBirdBrandCheck(resultData);
        }
    }

    const birdTypeChangeChecked = (param, value) => {
        const copyList = birdTypeCheck;
        if (param) {
            copyList.push(value.name);
            setBirdTypeCheck(copyList);
        } else {
            const resultData = birdTypeCheck.filter(src => src !== value.name);
            setBirdTypeCheck(resultData);
        }
    }

    const birdBreedChangeChecked = (param, value) => {
        const copyList = birdBreedCheck;
        if (param) {
            copyList.push(value.name);
            setBirdBreedCheck(copyList);
        } else {
            const resultData = birdBreedCheck.filter(src => src !== value.name);
            setBirdBreedCheck(resultData);
        }
    }


    useEffect(() => {
        const maxPrice = BirdProductList.reduce((acc, cur, index) => {
            return acc > cur.price ? acc : cur.price
        }, dataList[0].price);
        setMaxPrice(maxPrice);
        setPrice([1, maxPrice]);
        setInitSlider([1, maxPrice]);
    }, []);


    // 두배열이 같은지 다른지 판단하는 함수
    const arrayEquals = (a, b) => {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }


    const searchRangePro = (e) => {
        const firstPrice = price[0];
        const lastPrice = price[1];
        const reData = BirdProductList.filter(value => firstPrice <= value.price && lastPrice >= value.price)
        setDataList(reData);
        setSliderInit(arrayEquals(initSlider, price))
    }


    const slideInitPro = () => {

        //price value를 초기화
        setPrice(initSlider);

        //실제 상품도 초기화상태에 따른 update해주기
        console.log('업데이트 필요!')
        const reData = BirdProductList.filter(value => 1 <= value.price && maxPrice >= value.price);
        setDataList(reData);

        // clear selected
        setSliderInit(true);
        // const reData = ProductList.filter(value => firstPrice <= value.price && lastPrice >= value.price)
    }

    const getProductLength = (name) =>{
        const reulstData = BirdProductList.filter(e => e.birdVariety === name);
        return reulstData.length
    }








    return (
        <DogDogContainer>
            <DogDogBanner src={DogBanner}/>
            <DogDogBigContainer>


                <DogDogLeftContainer >

                    {birdVarietyCheck.map(value => <Tag color="cyan">{value} <CloseCircleOutlined
                        onClick={() => varChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {birdBrandCheck.map(value => <Tag color="volcano">{value} <CloseCircleOutlined
                        onClick={() => birdBrandChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {birdTypeCheck.map(value => <Tag color="yellow">{value}
                        <CloseCircleOutlined onClick={() => birdTypeChangeChecked(false, {name: value})}/></Tag>)}

                    {birdBreedCheck.map(value => <Tag color="green">{value}
                        <CloseCircleOutlined onClick={() => birdBreedChangeChecked(false, {name: value})}/></Tag>)}


                    <DogDogMenuNameBox>Variety
                        {birdVarietyCheck.length !== 0 && <DogDogCheckBoxSelected
                            onClick={() => setBirdVarietyCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>

                    {BirdVarietyList.map((value, index) => {
                        if (index > 4 && !birdVarietyTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={birdVarietyCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => varChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>


                                <DogDogVarietyCountBox>{getProductLength(value.name)}</DogDogVarietyCountBox>

                            </div>

                        }

                    })}

                    <VerietyTrigger
                        onClick={() => setBirdVarietyTrigger(!birdVarietyTrigger)}>{birdVarietyTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>


                    <DogDogMenuNameBox>Type
                        {birdTypeCheck.length !== 0 &&
                            <DogDogCheckBoxSelected
                                onClick={() => setBirdTypeCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {BirdTypeList.map((value, index) => {
                        if (index > 4 && !birdTypeTrigger) {
                            return null;
                        } else {
                            return <div
                                style={{width: 250, height: 28}}>
                                <Checkbox checked={birdTypeCheck.filter(src => src === value.name) [0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => birdTypeChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setBirdTypeTrigger(!birdTypeTrigger)}>{birdTypeTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>

                    <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Customer Rating
                        <Rate defaultValue={5}></Rate>
                        <Rate defaultValue={4}></Rate>
                        <Rate defaultValue={3}></Rate>
                        <Rate defaultValue={2}></Rate>
                        <Rate defaultValue={1}></Rate>
                    </div>


                    <Divider/>

                    <DogDogMenuNameBox>price

                        {!sliderInit && <DogDogCheckBoxSelected onClick={slideInitPro}>Clear Seleceted</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    <Slider range value={price} max={maxPrice} onChange={(e) => setPrice(e)}
                            onAfterChange={searchRangePro}/>
                    <div style={{paddingTop: 20}}>${price[0]} - ${price[1]} <span style={{float: 'right'}}>31</span>
                    </div>
                    <Divider/>


                    <DogDogMenuNameBox>Brand
                        {birdBrandCheck.length !== 0 && <DogDogCheckBoxSelected onClick={() => setBirdBrandCheck([])}>Clear Seleceted</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {BirdBrandList.map((value, index) => {
                        if (index > 4 && !birdBrandTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox style={{float: 'left'}}
                                          checked={birdBrandCheck.filter(src => src === value.name)[0]}
                                          onChange={(e) => birdBrandChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setBirdBrandTrigger(!birdBrandTrigger)}>{birdBrandTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>


                    <DogDogMenuNameBox>Breed
                        {birdBreedCheck.length !== 0 &&
                            <DogDogCheckBoxSelected
                                onClick={() => setBirdBreedCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {BirdBreedList.map((value, index) => {
                        if (index > 4 && !birdBreedTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={birdBreedCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => birdBreedChangeChecked(e.target.checked, value)}
                                > {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setBirdBreedTrigger(!birdBreedTrigger)}>{birdBreedTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                </DogDogLeftContainer>


                {/*PRODUCT COMTPONENT*/}
                <DogDogRightContainer>
                    <div style={{width:'100%',height:80}}>
                        <DogDogRightLetter>Bird Food & Treats Online</DogDogRightLetter>
                        <span styled={{float: 'left', paddigTop: 30}}> 1 -  out of 27 products</span>



                    </div>


                    {dataList.map(value => {
                        return <div
                            style={{width: 200, height: 350, margin: 20, float: 'left', textAlign: 'center'}}>
                            <img src={value.source} style={{margin: '0px auto', width: '70%'}} width={100} alt=""/>
                            <div style={{textAlign: 'left',marginTop:'10px'}}>
                                    <span style={{
                                        fontWeight: 700,
                                        marginRight: '5px',
                                    }}>{value.title}</span>{value.subTitle}
                            </div>
                            <div style={{width: 200, height: 38}}><Rate style={{float: 'left'}} disabled
                                                                        defaultValue={value.star}/>
                                <div style={{float: 'right', paddingTop: 10}}>{value.review} Review</div>
                            </div>
                            <div style={{height: 25, width: 200}}>
                                <Tag color='#f5f6f8'
                                     style={{color: 'black', fontWeight: 700, float: 'left'}}>{value.mount}</Tag>
                                <Tag color='#f5f6f8'
                                     style={{color: 'black', fontWeight: 700, float: 'left'}}>{value.mount2}</Tag>
                            </div>

                            <div style={{width:'100%', height:100}}>

                                <div style={{width:'100%', height:37}}>
                                    <div style={{fontSize: 23, fontWeight: 700, float: 'left'}}>
                                        ${(value.price).toFixed(2)}</div>
                                    <img style={{float:'right', height:30}} src={AutoDelivery}></img>
                                </div>
                                <div style={{width:'100%', height:30}}>
                                    <div style={{fontSize: 23, fontWeight: 700, float: 'left'}}>
                                        ${(value.price).toFixed(2)}</div>
                                </div>
                            </div>



                        </div>
                    })}
                </DogDogRightContainer>
            </DogDogBigContainer>


        </DogDogContainer>
    )
}