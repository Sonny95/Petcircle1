import Login from "../../resources/Photo/head image.png";
import Cart from "../../resources/Photo/cart.svg";
import React, {useEffect, useState} from "react";
import DogPage from "../contents/DogPage";
import CatPage from "../contents/CatPage";
import BirdPage from "../contents/BirdPage";
import OtherPetsPage from "../contents/OtherPetsPage";
import {MenuBox, MenuContainer, MenuUnit} from "../../resources/styledComponent/header";

const Header = (props) => {
    const {getActiveKey} = props;

    const [activeKey, setActiveKey] = useState(null);

    const [text, setText] = useState('');
    const [productlist, setProductList] = useState([]);

    const [fontTrigger, setFontTrigger] = useState(null);

    useEffect(() => {
        setActiveKey(null)
    }, [props.closeKey])

    useEffect(() => {
        getActiveKey(activeKey)
    }, [activeKey])

    //ㄱ자바스크립트 객체란 무엇인가
    const menuList = [
        {color: 'yellow', name: 'Sale'},
        {color: 'blue', name: 'Dog'},
        {color: 'gray', name: 'Cat'},
        {color: 'lightGreen', name: 'Bird'},
        {color: 'violet', name: 'Other Pets'},
        {color: 'orange', name: 'Brands'},
        {color: 'navy', name: 'Vet tips'}
    ];


    const product = ['apple', 'alergy', 'desk', 'drill', 'game', 'goal', 'table', 'tea']
    const getPage = (param) => {
        switch (param) {
            case 1 :
                return <DogPage/>
            case 2 :
                return <CatPage/>
            case 3 :
                return <BirdPage/>
            case 4 :
                return <OtherPetsPage/>
        }
    }


    const changeText = (e) => {
        setText(e.target.value)
        const result = product.filter((value) => value.includes(e.target.value));
        setProductList(result);
    }
    return (
        <>

            <div onClick={() => setActiveKey(null)}>
                <div style={{
                    backgroundColor: '#414141',
                    width: '100%',
                    height: 30,
                    color: 'white',
                    textAlign: 'center',
                    paddingTop: 5
                }}>
                    <div style={{width: 1400, height: '100%', margin: '0px auto'}}>
                        <strong style={{fontSize: 14, float: 'left', marginLeft: 600}}>Free metro shipping on orders
                            $49+</strong>

                        <div style={{float: 'right', height: '100%', width: 300, fontSize: 12}}>
                            <img src={Login} style={{height: 18, width: 18}}/>
                            <span style={{marginLeft: 15, marginTop: -5}}>Sign In | Create Account</span>

                            <img src={Cart} style={{height: 18, width: 28, marginLeft: 10}}/>
                            <span style={{}}>$0.00</span>
                            <div style={{
                                color: 'black',
                                backgroundColor: 'yellow',
                                width: 30,
                                height: 20,
                                borderRadius: 10,
                                float: 'right'
                            }}>0
                            </div>

                        </div>
                    </div>
                </div>


                <div className="Head_Top"
                     style={{backgroundColor: '#00b1b9', width: '100%', height: 80, color: 'white'}}>
                    <div style={{maxWidth: 1500, height: '100%', margin: '0px auto'}}>

                        <img src="https://www.petcircle.com.au/petcircle-assets/images/PC-Logo.svg"
                             style={{height: 90, width: 90, marginTop: -12, float: 'left'}}/>
                        <div style={{width: 'calc(100% - 430px)', float: 'left', marginLeft: 20}}>
                            <input placeholder={'search for .....'} value={text} onChange={changeText} type="text"
                                   style={{
                                       height: 28,
                                       marginTop: 25,
                                       width: '100%'
                                   }}/>
                            {text.length !== 0 &&
                            <div style={{backgroundColor: 'white', width: 'calc(100% + 6.5px)', color: 'black'}}>
                                {productlist.map(value => <div>{value}</div>)}
                            </div>}
                        </div>

                        <div style={{width: 300, height: 50, float: 'right', marginTop: 20, fontSize: 18}}>
                            Save up to 20% off
                        </div>

                    </div>

                </div>
            </div>
            <MenuContainer>
                <MenuBox length={menuList.length} >
                    {menuList.map((res, index) => {


                        return <MenuUnit style={{
                            backgroundColor: activeKey === index ? res.color : ''
                        }} onClick={() => {
                            setActiveKey(index);
                            props.tester(index)
                        }}>
                            <div style={{
                                backgroundColor: index === 0 && res.color,
                                padding: 3,
                                color: fontTrigger === index ? res.color : ''
                            }}
                                 onPointerOver={(e) => setFontTrigger(index)}
                                 onPointerOut={() => setFontTrigger(null)}>{res.name}</div>
                        </MenuUnit>
                    })}

                </MenuBox>
            </MenuContainer>

            {/*menu bar*/}
            <div style={{
                position: 'absolute',
                backgroundColor: 'white',
                width: '100vw',
                zIndex: 1,
                borderBottom: '1px solid lightGray'
            }}>
                {getPage(activeKey)}
            </div>


        </>
    )
}

export default Header