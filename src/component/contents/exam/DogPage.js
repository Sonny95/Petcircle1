import {useNavigate, useParams} from "react-router-dom";
import {Button, Divider, Input, Rate, Slider, Tag, space} from "antd";
import DogBanner from "../../../resources/img/dog/DogPageBanner.png"
import Checkbox from "antd/es/checkbox/Checkbox";
import {useEffect, useState} from "react";
import {BrandList, FlavourList, ProductList, TypeList, VarietyList} from "../../../util/sample";
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

const {Search} = Input;
export default function DogPage() {
    let params = useParams();
    let navigate = useNavigate();


    const [varietyTrigger, setVarietyTrigger] = useState(false);
    const [TypeTrigger, setTypeTrigger] = useState(false);
    const [FlavourTrigger, setFlavourTrigger] = useState(false);
    const [BrandTrigger, setBrandTrigger] = useState(false);

    const [varietyCheck, setVarietyCheck] = useState([]);
    const [brandCheck, setBrandCheck] = useState([]);
    const [typeCheck, setTypeCheck] = useState([]);
    const [flavourCheck, setFlavourCheck] = useState([]);
    const [ratingCheck, setRatingCheck] = useState([]);

    const [maxPrice, setMaxPrice] = useState(0);
    const [price, setPrice] = useState([0, 0]);
    const [initSlider, setInitSlider] = useState([0, 0]);

    const [dataList, setDataList] = useState(ProductList)
    const [sliderInit, setSliderInit] = useState(true)


    // variety CHECK 관리
    const varChangeChecked = (param, value) => {
        const copyList = varietyCheck;
        // dataList.filter
        if (param) {
            copyList.push(value.name);
            setVarietyCheck(copyList);
        } else {
            const resultData = varietyCheck.filter(src => src !== value.name);
            setVarietyCheck(resultData);
        }


        // ex)
        // varietyCheck ->  ['biscuit', 'cake and rollies']  || 우리가 체크한 사항을 보아둔 배열


        const resultData = varietyCheck.map(value => {
            console.log(value,'value')
            const filterData = ProductList.filter((src) => {
                console.log(src,'::src')
                if(src.variety === value){
                    return src
                }
            });
            return filterData;
            console.log(filterData,'filterData')
        }).flatMap(x => x);


        setDataList(resultData);
    }

    // brand CHECK 관리
    const brandChangeChecked = (param, value) => {
        const copyList = brandCheck;
        if (param) {
            copyList.push(value.name);
            setBrandCheck(copyList);
        } else {
            const resultData = brandCheck.filter(src => src !== value.name);
            setBrandCheck(resultData);
        }
    }

    const typeChangeChecked = (param, value) => {
        const copyList = typeCheck;
        if (param) {
            copyList.push(value.name);
            setTypeCheck(copyList);
        } else {
            const resultData = typeCheck.filter(src => src !== value.name);
            setTypeCheck(resultData);
        }
    }

    const flavourChangeChecked = (param, value) => {
        const copyList = flavourCheck;
        if (param) {
            copyList.push(value.name);
            setFlavourCheck(copyList);
        } else {
            const resultData = flavourCheck.filter(src => src !== value.name);
            setFlavourCheck(resultData);
        }
    }


    useEffect(() => {
        const maxPrice = ProductList.reduce((acc, cur, index) => {
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
        const reData = ProductList.filter(value => firstPrice <= value.price && lastPrice >= value.price)
        setDataList(reData);
        setSliderInit(arrayEquals(initSlider, price))
    }


    const slideInitPro = () => {

        //price value를 초기화
        setPrice(initSlider);

        //실제 상품도 초기화상태에 따른 update해주기
        console.log('업데이트 필요!')
        const reData = ProductList.filter(value => 1 <= value.price && maxPrice >= value.price);
        setDataList(reData);

        // clear selected
        setSliderInit(true);
        // const reData = ProductList.filter(value => firstPrice <= value.price && lastPrice >= value.price)
    }

    const getProductLength = (name) =>{
        const reulstData = ProductList.filter(e => e.variety === name);
        return reulstData.length
    }


    return (
        <DogDogContainer>
            <DogDogBanner src={DogBanner}/>
            <DogDogBigContainer>


                <DogDogLeftContainer >

                    {varietyCheck.map(value => <Tag color="cyan">{value} <CloseCircleOutlined
                        onClick={() => varChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {brandCheck.map(value => <Tag color="volcano">{value} <CloseCircleOutlined
                        onClick={() => brandChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {typeCheck.map(value => <Tag color="yellow">{value}
                        <CloseCircleOutlined onClick={() => typeChangeChecked(false, {name: value})}/></Tag>)}

                    {flavourCheck.map(value => <Tag color="green">{value}
                        <CloseCircleOutlined onClick={() => flavourChangeChecked(false, {name: value})}/></Tag>)}


                    <DogDogMenuNameBox>Variety
                        {varietyCheck.length !== 0 && <DogDogCheckBoxSelected
                            onClick={() => setVarietyCheck([])}>Clear Seleceted</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>

                    {VarietyList.map((value, index) => {
                        if (index > 4 && !varietyTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={varietyCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => varChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>


                                <DogDogVarietyCountBox>{getProductLength(value.name)}</DogDogVarietyCountBox>

                                </div>

                        }

                    })}

                    <VerietyTrigger
                         onClick={() => setVarietyTrigger(!varietyTrigger)}>{varietyTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>


                    <DogDogMenuNameBox>Type
                        {typeCheck.length !== 0 &&
                        <DogDogCheckBoxSelected
                              onClick={() => setTypeCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {TypeList.map((value, index) => {
                        if (index > 4 && !TypeTrigger) {
                            return null;
                        } else {
                            return <div
                                style={{width: 250, height: 28}}>
                                <Checkbox checked={typeCheck.filter(src => src === value.name) [0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => typeChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                         onClick={() => setTypeTrigger(!TypeTrigger)}>{TypeTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>

                    <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Customer Rating
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
                        {brandCheck.length !== 0 && <DogDogCheckBoxSelected onClick={() => setBrandCheck([])}>Clear Seleceted</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {BrandList.map((value, index) => {
                        if (index > 4 && !BrandTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox style={{float: 'left'}}
                                          checked={brandCheck.filter(src => src === value.name)[0]}
                                          onChange={(e) => brandChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                         onClick={() => setBrandTrigger(!BrandTrigger)}>{BrandTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>


                    <DogDogMenuNameBox>Flavour
                        {flavourCheck.length !== 0 &&
                        <DogDogCheckBoxSelected
                              onClick={() => setFlavourCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {FlavourList.map((value, index) => {
                        if (index > 4 && !FlavourTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={flavourCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => flavourChangeChecked(e.target.checked, value)}
                                > {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                         onClick={() => setFlavourTrigger(!FlavourTrigger)}>{FlavourTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                </DogDogLeftContainer>


                {/*PRODUCT COMTPONENT*/}
                <DogDogRightContainer>
                    <div style={{width:'100%',height:80}}>
                        <DogDogRightLetter>Dog Training Treats</DogDogRightLetter>
                        <span styled={{float: 'left', paddigTop: 30}}> 1 -  out of 167 products</span>



                    </div>


                    {dataList.map(value => {
                        return <div
                            style={{width: 200, height: 350, margin: 20, float: 'left', textAlign: 'center'}}>
                            <img src={value.source} style={{margin: '0px auto', width: '70%'}} width={100} alt=""/>
                            <div style={{textAlign: 'left'}}>
                                    <span style={{
                                        fontWeight: 700,
                                        marginRight: '5px'
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
                            <div style={{fontSize: 25, fontWeight: 700, float: 'left'}}>
                                ${value.price}
                            </div>

                        </div>
                    })}
                </DogDogRightContainer>
            </DogDogBigContainer>


        </DogDogContainer>
    )
}