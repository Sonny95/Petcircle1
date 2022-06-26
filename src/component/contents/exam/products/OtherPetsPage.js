import {useNavigate, useParams} from "react-router-dom";
import {Button, Divider, Input, Rate, Slider, Tag, space} from "antd";
import DogBanner from "../../../../resources/img/dog/DogPageBanner.png"
import Checkbox from "antd/es/checkbox/Checkbox";
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
} from "../../../../resources/styledComponent/dog-dogPage";
import {CloseCircleOutlined} from '@ant-design/icons';
import AutoDelivery from "../../../../resources/img/dog/autoDelivery.svg"
import {
    OtherBrandList,
    OtherBreedList,
    OtherProductList,
    OtherTypeList,
    OtherVarietyList
} from "../../../../util/OtherSample";




const {Search} = Input;

export default function BirdPage() {
    let params = useParams();
    let navigate = useNavigate();


    const [otherVarietyTrigger, setOtherVarietyTrigger] = useState(false);
    const [otherTypeTrigger, setOtherTypeTrigger] = useState(false);
    const [otherBreedTrigger, setOtherBreedTrigger] = useState(false);
    const [otherBrandTrigger, setOtherBrandTrigger] = useState(false);

    const [otherVarietyCheck, setOtherVarietyCheck] = useState([]);
    const [otherBrandCheck, setOtherBrandCheck] = useState([]);
    const [otherTypeCheck, setOtherTypeCheck] = useState([]);
    const [otherBreedCheck, setOtherBreedCheck] = useState([]);
    const [ratingCheck, setRatingCheck] = useState([]);

    const [maxPrice, setMaxPrice] = useState(0);
    const [price, setPrice] = useState([0, 0]);
    const [initSlider, setInitSlider] = useState([0, 0]);

    const [dataList, setDataList] = useState(OtherProductList)
    const [sliderInit, setSliderInit] = useState(true)


    // OtherVariety CHECK 관리
    const varChangeChecked = (param, value) => {
        const copyList = otherVarietyCheck;
        // dataList.filter
        if (param) {
            copyList.push(value.name);
            setOtherVarietyCheck(copyList);
            console.log(copyList,'open')
            console.log(setOtherVarietyCheck(copyList),'whoareyou')
        }
        else {
            const resultData = otherVarietyCheck.filter(src => src !== value.name);
            setOtherVarietyCheck(resultData);
            console.log(resultData,'tlqkf')
        }

        // const resultData = otherVarietyCheck.map(value => {
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
    const otherBrandChangeChecked = (param, value) => {
        const copyList = otherBrandCheck;
        if (param) {
            copyList.push(value.name);
            setOtherBrandCheck(copyList);
        } else {
            const resultData = otherBrandCheck.filter(src => src !== value.name);
            setOtherBrandCheck(resultData);
        }
    }

    const otherTypeChangeChecked = (param, value) => {
        const copyList = otherTypeCheck;
        if (param) {
            copyList.push(value.name);
            setOtherTypeCheck(copyList);
        } else {
            const resultData = otherTypeCheck.filter(src => src !== value.name);
            setOtherTypeCheck(resultData);
        }
    }

    const otherBreedChangeChecked = (param, value) => {
        const copyList = otherBreedCheck;
        if (param) {
            copyList.push(value.name);
            setOtherBreedCheck(copyList);
        } else {
            const resultData = otherBreedCheck.filter(src => src !== value.name);
            setOtherBreedCheck(resultData);
        }
    }


    useEffect(() => {
        const maxPrice = OtherProductList.reduce((acc, cur, index) => {
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
        const reData = OtherProductList.filter(value => firstPrice <= value.price && lastPrice >= value.price)
        setDataList(reData);
        setSliderInit(arrayEquals(initSlider, price))
    }


    const slideInitPro = () => {

        //price value를 초기화
        setPrice(initSlider);

        //실제 상품도 초기화상태에 따른 update해주기
        console.log('업데이트 필요!')
        const reData = OtherProductList.filter(value => 1 <= value.price && maxPrice >= value.price);
        setDataList(reData);

        // clear selected
        setSliderInit(true);
        // const reData = ProductList.filter(value => firstPrice <= value.price && lastPrice >= value.price)
    }

    const getProductLength = (name) =>{
        const reulstData = OtherProductList.filter(e => e.otherVariety === name);
        return reulstData.length
    }








    return (
        <DogDogContainer>
            <DogDogBanner src={DogBanner}/>
            <DogDogBigContainer>


                <DogDogLeftContainer >

                    {otherVarietyCheck.map(value => <Tag color="cyan">{value} <CloseCircleOutlined
                        onClick={() => varChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {otherBrandCheck.map(value => <Tag color="volcano">{value} <CloseCircleOutlined
                        onClick={() => otherBrandChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {otherTypeCheck.map(value => <Tag color="yellow">{value}
                        <CloseCircleOutlined onClick={() => otherTypeChangeChecked(false, {name: value})}/></Tag>)}

                    {otherBreedCheck.map(value => <Tag color="green">{value}
                        <CloseCircleOutlined onClick={() => otherBreedChangeChecked(false, {name: value})}/></Tag>)}


                    <DogDogMenuNameBox>Variety
                        {otherVarietyCheck.length !== 0 && <DogDogCheckBoxSelected
                            onClick={() => setOtherVarietyCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>

                    {OtherVarietyList.map((value, index) => {
                        if (index > 4 && !otherVarietyTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={otherVarietyCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => varChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>


                                <DogDogVarietyCountBox>{getProductLength(value.name)}</DogDogVarietyCountBox>

                            </div>

                        }

                    })}

                    <VerietyTrigger
                        onClick={() => setOtherVarietyTrigger(!otherVarietyTrigger)}>{otherVarietyTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>


                    <DogDogMenuNameBox>Type
                        {otherTypeCheck.length !== 0 &&
                            <DogDogCheckBoxSelected
                                onClick={() => setOtherTypeCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {OtherTypeList.map((value, index) => {
                        if (index > 4 && !otherTypeTrigger) {
                            return null;
                        } else {
                            return <div
                                style={{width: 250, height: 28}}>
                                <Checkbox checked={otherTypeCheck.filter(src => src === value.name) [0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => otherTypeChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setOtherTypeTrigger(!otherTypeTrigger)}>{otherTypeTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

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
                        {otherBrandCheck.length !== 0 && <DogDogCheckBoxSelected onClick={() => setOtherBrandCheck([])}>Clear Seleceted</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {OtherBrandList.map((value, index) => {
                        if (index > 4 && !otherBrandTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox style={{float: 'left'}}
                                          checked={otherBrandCheck.filter(src => src === value.name)[0]}
                                          onChange={(e) => otherBrandChangeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setOtherBrandTrigger(!otherBrandTrigger)}>{otherBrandTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                    <Divider/>


                    <DogDogMenuNameBox>Breed
                        {otherBreedCheck.length !== 0 &&
                            <DogDogCheckBoxSelected
                                onClick={() => setOtherBreedCheck([])}>Clear Selected</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    {OtherBreedList.map((value, index) => {
                        if (index > 4 && !otherBreedTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={otherBreedCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => otherBreedChangeChecked(e.target.checked, value)}
                                > {value.name}</Checkbox>
                                <DogDogVarietyCountBox>{value.count}</DogDogVarietyCountBox></div>
                        }
                    })}

                    <VerietyTrigger
                        onClick={() => setOtherBreedTrigger(!otherBreedTrigger)}>{otherBreedTrigger ? '- See less' : '+ See more'} </VerietyTrigger>

                </DogDogLeftContainer>


                {/*PRODUCT COMTPONENT*/}
                <DogDogRightContainer>
                    <div style={{width:'100%',height:80}}>
                        <DogDogRightLetter>Bird Food & Treats Online</DogDogRightLetter>
                        <span styled={{float: 'left', paddigTop: 30}}> 1 -  out of 29 products</span>



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