import {useNavigate, useParams} from "react-router-dom";
import {Button, Divider, Input, Rate, Slider, Tag, space} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import CatBanner from "../../../resources/img/cat/CatBanner.png"
import {useEffect, useState} from "react";
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
import {CatBrandList, CatFeatureList, CatProductList, CatVarietyList, ProteinList} from "../../../util/CatSample";
import AutoDelivery from "../../../resources/img/dog/autoDelivery.svg";

const {Search} = Input;



export default function CatPage() {
    let params = useParams();
    let navigate = useNavigate();


    const [catVarietyTrigger, setCatVarietyTrigger] = useState(false);
    const [FeatureTrigger, setFeatureTrigger] = useState(false);
    const [proteinTrigger, setProteinTrigger] = useState(false);
    const [catBrandTrigger, setCatBrandTrigger] = useState(false);

    const [catVarietyCheck, setCatVarietyCheck] = useState([]);
    const [catBrandCheck, setCatBrandCheck] = useState([]);
    const [featureCheck, setFeatureCheck] = useState([]);
    const [proteinCheck, setProteinCheck] = useState([]);
    const [ratingCheck, setRatingCheck] = useState([]);

    const [maxPrice, setMaxPrice] = useState(0);
    const [price, setPrice] = useState([0, 0]);
    const [initSlider, setInitSlider] = useState([0, 0]);

    const [dataList, setDataList] = useState(CatProductList)
    const [sliderInit, setSliderInit] = useState(true)


    // catVariety CHECK 관리
    const varChangeChecked = (param, value) => {
        const copyList = catVarietyCheck;
        // dataList.filter
        if (param) {
            copyList.push(value.name);
            setCatVarietyCheck(copyList);
        } else {
            const resultData = catVarietyCheck.filter(src => src !== value.name);
            setCatVarietyCheck(resultData);
        }

        const resultData = catVarietyCheck.map(value => {
            const filterData = CatProductList.filter((src) => {
                if(src.variety === value){
                    return src
                }
            });
            return filterData;
        }).flatMap(x => x);


        setDataList(resultData);
    }

    // brand CHECK 관리
    const catBrandChangeChecked = (param, value) => {
        const copyList = catBrandCheck;
        if (param) {
            copyList.push(value.name);
            setCatBrandCheck(copyList);
        } else {
            const resultData = catBrandCheck.filter(src => src !== value.name);
            setCatBrandCheck(resultData);
        }
    }

    const featureChangeChecked = (param, value) => {
        const copyList = featureCheck;
        if (param) {
            copyList.push(value.name);
            setFeatureCheck(copyList);
        } else {
            const resultData = featureCheck.filter(src => src !== value.name);
            setFeatureCheck(resultData);
        }
    }

    const proteinChangeChecked = (param, value) => {
        const copyList = proteinCheck;
        if (param) {
            copyList.push(value.name);
            setProteinCheck(copyList);
        } else {
            const resultData = proteinCheck.filter(src => src !== value.name);
            setProteinCheck(resultData);
        }
    }


    useEffect(() => {
        const maxPrice = CatProductList.reduce((acc, cur, index) => {
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
        const reData = CatProductList.filter(value => firstPrice <= value.price && lastPrice >= value.price)
        setDataList(reData);
        setSliderInit(arrayEquals(initSlider, price))
    }


    const slideInitPro = () => {

        //price value를 초기화
        setPrice(initSlider);

        //실제 상품도 초기화상태에 따른 update해주기
        console.log('업데이트 필요!')
        const reData = CatProductList.filter(value => 1 <= value.price && maxPrice >= value.price);
        setDataList(reData);

        // clear selected
        setSliderInit(true);
        // const reData = ProductList.filter(value => firstPrice <= value.price && lastPrice >= value.price)
    }

    const getCatProductLength = (name) =>{
        const reulstData = CatProductList.filter(e => e.catVariety === name);
        return reulstData.length
    }








    return (
        <DogDogContainer>
            <DogDogBanner src={CatBanner}/>
            <DogDogBigContainer>


                <DogDogLeftContainer >

                    {catVarietyCheck.map(value => <Tag color="cyan">{value} <CloseCircleOutlined
                        onClick={() => varChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {catBrandCheck.map(value => <Tag color="volcano">{value} <CloseCircleOutlined
                        onClick={() => catBrandChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {featureCheck.map(value => <Tag color="yellow">{value}
                        <CloseCircleOutlined onClick={() => featureChangeChecked(false, {name: value})}/></Tag>)}

                    {proteinCheck.map(value => <Tag color="green">{value}
                        <CloseCircleOutlined onClick={() => proteinChangeChecked(false, {name: value})}/></Tag>)}


                    <DogDogMenuNameBox>Variety
                        {catVarietyCheck.length !== 0 && <DogDogCheckBoxSelected
                            onClick={() => setCatVarietyCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>

                    {CatVarietyList.map((value, index) => {
                        if (index > 4 && !catVarietyTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={catVarietyCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => varChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>


                                <DogDogVarietyCountBox>{getCatProductLength(value.name)}</DogDogVarietyCountBox>

                            </div>

                        }

                    })}

                    <VerietyTrigger
                        onClick={() => setCatVarietyTrigger(!catVarietyTrigger)}>{catVarietyTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>


                    <DogDogMenuNameBox>Feature
                        {featureCheck.length !== 0 &&
                            <DogDogCheckBoxSelected
                                onClick={() => setFeatureCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {CatFeatureList.map((value, index) => {
                        if (index > 4 && !FeatureTrigger) {
                            return null;
                        } else {
                            return <div
                                style={{width: 250, height: 28}}>
                                <Checkbox checked={featureCheck.filter(src => src === value.name) [0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => featureChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setFeatureTrigger(!FeatureTrigger)}>{FeatureTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>

                    <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Customer Rating
                    </div>


                    <Divider/>

                    <DogDogMenuNameBox>price

                        {!sliderInit && <DogDogCheckBoxSelected onClick={slideInitPro}>Clear Seleceted</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    <Slider range value={price} max={maxPrice} onChange={(e) => setPrice(e)}
                            onAfterChange={searchRangePro}/>
                    <div style={{paddingTop: 20}}>${price[0]} - ${price[1]} <span style={{float: 'right'}}>27</span>
                    </div>
                    <Divider/>


                    <DogDogMenuNameBox>Brand
                        {catBrandCheck.length !== 0 && <DogDogCheckBoxSelected onClick={() => setCatBrandCheck([])}>Clear Seleceted</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {CatBrandList.map((value, index) => {
                        if (index > 4 && !catBrandTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox style={{float: 'left'}}
                                          checked={catBrandCheck.filter(src => src === value.name)[0]}
                                          onChange={(e) => catBrandChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setCatBrandTrigger(!catBrandTrigger)}>{catBrandTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>


                    <DogDogMenuNameBox>Protein
                        {proteinCheck.length !== 0 &&
                            <DogDogCheckBoxSelected
                                onClick={() => setProteinCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {ProteinList.map((value, index) => {
                        if (index > 4 && !proteinTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={proteinCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => proteinChangeChecked(e.target.checked, value)}
                                > {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setProteinTrigger(!proteinTrigger)}>{proteinTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                </DogDogLeftContainer>


                {/*PRODUCT COMTPONENT*/}
                <DogDogRightContainer>
                    <div style={{width:'100%',height:80}}>
                        <DogDogRightLetter>Dog Training Treats</DogDogRightLetter>
                        <span styled={{float: 'left', paddigTop: 30}}> 1 -  out of 27 products</span>



                    </div>


                    {dataList.map(value => {
                        return <div
                            style={{width: 200, height: 350, margin: 20, float: 'left', textAlign: 'center'}}>
                            <img src={value.source} style={{margin: '0px auto', width: '70%'}} width={100} alt=""/>
                            <div style={{textAlign: 'left',marginTop:'10px'}}>
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