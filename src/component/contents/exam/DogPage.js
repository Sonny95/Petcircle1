import {Link, useNavigate, useParams} from "react-router-dom";
import {Divider, Input, Rate, Slider, Tag} from "antd";
import DogBanner from "../../../resources/img/dog/DogPageBanner.png"
import Checkbox from "antd/es/checkbox/Checkbox";
import {useState} from "react";
import DG1 from "../../../resources/img/dog/bell-and-bone-carob-and-ginger-superfood-dog-treats.png"
import DG2 from "../../../resources/img/dog/huds-and-toke-kangaroo-micro-bones.png"
import DG3 from "../../../resources/img/dog/big-dog-freeze-dried-tasmanian-salmon-little-bites.png"
import DG4 from "../../../resources/img/dog/blackdog-chicken-discs.png"
import DG5 from "../../../resources/img/dog/natures-cuts-beef-chews.png"
import DG6 from "../../../resources/img/dog/natures-cuts-beef-strips.png"
import DG7 from "../../../resources/img/dog/natures-cuts-chicken-chews.png"
import DG8 from "../../../resources/img/dog/blackdog-chicken-discs.png"
import DG9 from "../../../resources/img/dog/natures-cuts-kangaroo-sausages.png"
import DG10 from "../../../resources/img/dog/natures-cuts-liver-training-treats.png"
import DG11 from "../../../resources/img/dog/pooch-treats-peanut-butter-cups-dog-treats.png"
import DG12 from "../../../resources/img/dog/ziwi-peak-good-dog-treat-venison.png"


const {Search} = Input;
export default function DogPage() {
    let params = useParams();
    let navigate = useNavigate();

    const [varietyTrigger, setVarietyTrigger] = useState(false);
    const [checkVar, setCheckVar] = useState([]);

    const VarietyList = [
        {name: 'Natural Food', count: 1},
        {name: 'Natural Treats', count: 2},
        {name: 'Biscuits', count: 3},
        {name: 'Bundle Boxes', count: 4},
        {name: 'Cakes and Lollies', count: 5},
        {name: 'Dental Treats', count: 6},
        {name: 'Freeze and Air Dried', count: 7},
        {name: 'Liquid and Paste Treats', count: 8},
        {name: 'Long Lasting Treats', count: 9},
        {name: 'Meal Toppers', count: 10},
        {name: 'Premium', count: 11},
        {name: 'Training Treats', count: 12}

    ]
    const TypeList = [
        {name: 'Bones and Antlers', count: 1},
        {name: 'Bully Sticks', count: 2},
        {name: 'Carob', count: 3},
        {name: 'Jerky', count: 4},
        {name: 'Liver', count: 5},
        {name: 'Rawhide', count: 6},
        {name: 'Straps', count: 7},
        {name: 'Yoghurt', count: 8}
    ]


    const productList = [
        {
            source: DG1,
            title: 'BLACKDOG',
            subTitle: '1',
            star: 4,
            review: 10,
            mount: '500g',
            price: '$16.80',
            state: 'sale'
        },
        {
            source: DG2,
            title: 'GREENIES',
            subTitle: '1',
            star: 4,
            review: 10,
            mount: '500g',
            price: '$16.80',
            state: 'hot'
        },
        {
            source: DG3,
            title: 'NATURES CUTS',
            subTitle: '1',
            star: 4,
            review: 10,
            mount: '500g',
            price: '$16.80',
            state: 'new'
        },
        {source: DG4, title: 'BABO', subTitle: '1', star: 4, review: 10, mount: '500g', price: '$16.80', state: 'none'},
        {
            source: DG5,
            title: 'CIGGY',
            subTitle: '1',
            star: 4,
            review: 10,
            mount: '500g',
            price: '$16.80',
            state: 'sale'
        },
        {source: DG6, title: 'ECIG', subTitle: '1', star: 4, review: 10, mount: '500g', price: '$16.80', state: 'hot'},
        {
            source: DG7,
            title: 'LIGHTER',
            subTitle: '1',
            star: 4,
            review: 10,
            mount: '500g',
            price: '$16.80',
            state: 'new'
        },
        {source: DG8, title: 'FOOT', subTitle: '1', star: 4, review: 10, mount: '500g', price: '$16.80', state: 'none'},
        {source: DG9, title: 'EGG', subTitle: '1', star: 4, review: 10, mount: '500g', price: '$16.80', state: 'sale'},
        {
            source: DG10,
            title: 'AVOCADO',
            subTitle: '1',
            star: 4,
            review: 10,
            mount: '500g',
            price: '$16.80',
            state: 'hot'
        },
        {
            source: DG11,
            title: 'GUCCI',
            subTitle: '1',
            star: 4,
            review: 10,
            mount: '500g',
            price: '$16.80',
            state: 'new'
        },
        {
            source: DG12,
            title: 'APPLE',
            subTitle: '1',
            star: 4,
            review: 10,
            mount: '500g',
            price: '$16.80',
            state: 'none'
        },
    ]
    const changeChecked = (param, value) =>{
        
        console.log(value)
        console.log(param)
    }
    return (
        <div style={{width: '100%'}}>
            <img width={'100%'} src={DogBanner}/>

            <div style={{float: 'left', width: '100vw'}}>
                <div style={{margin: '0px auto', width: 1500}}>

                    <div style={{width: 260, float: 'left', padding: 10}}>
                        <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Variety</div>
                        {VarietyList.map((value, index) => {
                            if (index > 4 && !varietyTrigger) {
                                return null;
                            } else {
                                return <div style={{width: 250, height: 28}}>
                                    <Checkbox style={{float: 'left'}} onChange={(e)=>changeChecked(e.target.checked,value)}> {value.name}</Checkbox>
                                    <span style={{float: 'right', paddingRight: 10}}>{value.count}</span></div>
                            }
                        })}

                        <div
                            onClick={() => setVarietyTrigger(!varietyTrigger)}>{varietyTrigger ? '- See less' : '+ See more'} </div>

                        <Divider/>
                        <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Type</div>
                        {TypeList.map(value => <div style={{width: 250, height: 28}}>
                            <Checkbox style={{float: 'left'}}> {value.name}</Checkbox>
                            <span style={{float: 'right', paddingRight: 10}}>{value.count}</span></div>)}


                        <div>Price</div>
                        <Slider range defaultValue={[20, 50]}/>
                    </div>


                    <div style={{width: 'calc(100% - 260px)', float: 'right', padding: 30}}>

                        {productList.map(value => {
                            return <div
                                style={{width: 250, margin : 20, float: 'left', textAlign: 'center'}}>
                                <img src={value.source} style={{margin: '0px auto'}} width={100} alt=""/>
                                <div style={{textAlign: 'left'}}><span
                                    style={{fontWeight: 700}}>{value.title}</span>{value.subTitle}</div>
                                <div><Rate style={{float: 'left', width: 140}}/>
                                    <div style={{float: 'right', width: 70, paddingTop: 10}}>{value.review} Review</div>
                                </div>
                                <div stsyle={{textAlign: 'center', paddingTop: 10}}>
                                    <Tag color="volcano">{value.mount}</Tag>
                                    <Tag color="volcano">{value.mount}</Tag>
                                    <Tag color="volcano">{value.mount}</Tag>
                                </div>
                                <div style={{fontSize : 25, fontWeight : 700}}>
                                    {value.price}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}