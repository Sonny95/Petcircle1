import {useNavigate, useParams} from "react-router-dom";
import {Button, Divider, Input, Rate, Slider, Tag,space} from "antd";
import DogBanner from "../../../resources/img/dog/DogPageBanner.png"
import Checkbox from "antd/es/checkbox/Checkbox";
import {useState} from "react";
import {BrandList, FlavourList, productList, TypeList, VarietyList} from "../../../util/sample";
import {DogDogContainer} from "../../../resources/styledComponent/dog-dogPage";
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
    const [tester, setTester] = useState('');

    const changeChecked = (param, value) => {

        const copyList = varietyCheck;
        if (param) {
            copyList.push(value.name);
            setVarietyCheck(copyList);
        } else {
            const resultData = varietyCheck.filter(src => src !== value.name);
            setVarietyCheck(resultData);
        }

    }

    return (
        <DogDogContainer>
            <img width={'100%'} src={DogBanner}/>
            <div style={{margin: '0px auto', width: 1350}}>


                <div style={{width: 260, float: 'left', padding: 10}}>

                    {varietyCheck.map(value => <Tag color="cyan">{value} <CloseCircleOutlined onClick={() => changeChecked(false, {name: value})}/>
                                                                                 </Tag>)}

                    <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Variety
                        {varietyCheck.length !== 0 && <span style={{
                            color: `#1cb1b8`,
                            float: 'right',
                            fontSize: 11,
                            marginTop: 5,
                            cursor: 'pointer'
                        }} onClick={() => setVarietyCheck([])}>Clear Seleceted</span>}
                    </div>

                    {VarietyList.map((value, index) => {
                        if (index > 4 && !varietyTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox checked={varietyCheck.filter(src => src === value.name)[0]}
                                          style={{float: 'left'}}
                                          onChange={(e) => changeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <span style={{float: 'right', paddingRight: 10}}>{value.count}</span></div>
                        }
                    })}

                    <div
                        onClick={() => setVarietyTrigger(!varietyTrigger)}>{varietyTrigger ? '- See less' : '+ See more'} </div>

                    <Divider/>


                    <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Type</div>
                    {TypeList.map((value, index) => {
                        if (index > 4 && !TypeTrigger) {
                            return null;
                        } else {
                            return <div
                                style={{width: 250, height: 28}}>
                                <Checkbox style={{float: 'left'}}
                                          onChange={(e) => changeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <span style={{float: 'right', paddingRight: 10}}>{value.count}</span></div>
                        }
                    })}

                    <div
                        onClick={() => setTypeTrigger(!TypeTrigger)}>{TypeTrigger ? '- See less' : '+ See more'} </div>


                    <Divider/>
                    <div>Price</div>
                    <Slider range defaultValue={[0, 30]}/>

                    <Divider/>

                    <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Brand</div>
                    {BrandList.map((value, index) => {
                        if (index > 4 && !BrandTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox style={{float: 'left'}}
                                          onChange={(e) => changeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <span style={{float: 'right', paddingRight: 10}}>{value.count}</span></div>
                        }
                    })}

                    <div
                        onClick={() => setBrandTrigger(!BrandTrigger)}>{BrandTrigger ? '- See less' : '+ See more'} </div>

                    <Divider/>

                    <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Flavour</div>
                    {FlavourList.map((value, index) => {
                        if (index > 4 && !FlavourTrigger) {
                            return null;
                        } else {
                            return <div style={{width: 250, height: 28}}>
                                <Checkbox style={{float: 'left'}}
                                          onChange={(e) => changeChecked(e.target.checked, value)}> {value.name}</Checkbox>
                                <span style={{float: 'right', paddingRight: 10}}>{value.count}</span></div>
                        }
                    })}

                    <div
                        onClick={() => setFlavourTrigger(!FlavourTrigger)}>{FlavourTrigger ? '- See less' : '+ See more'} </div>

                </div>


                <div style={{width: 'calc(100% - 260px)', float: 'right', padding: 30}}>

                    {productList.map(value => {
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
                                    {value.price}
                                </div>

                            </div>
                        })}
                </div>
            </div>


        </DogDogContainer>
    )
}