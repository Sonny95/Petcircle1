import Login from "../../resources/Photo/head image.png";
import Cart from "../../resources/Photo/cart.svg";
import React, {useEffect, useState} from "react";
import DogPage from "../contents/DogPage";
import CatPage from "../contents/CatPage";
import BirdPage from "../contents/BirdPage";
import OtherPetsPage from "../contents/OtherPetsPage";
import {
    CartBox, CartImg, CreatButton, HeaderLoginBox, HeadLogo, HeadTopBox, HeadTopContainer, LoginImg,
    MenuBox,
    MenuContainer,
    MenuUnit, SearchBox,
    ShipHeader,
    ShipHeaderBox, ShipHeaderLetter, SigninButtom
} from "../../resources/styledComponent/header";
import AutoDelivery from "../../resources/Photo/auto-delivery-icon.svg"

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
                <ShipHeader>
                    <ShipHeaderBox>
                        <ShipHeaderLetter>Free metro shipping on orders
                            $49+</ShipHeaderLetter>

                        <HeaderLoginBox>
                            <LoginImg src={Login} ></LoginImg>
                            <SigninButtom>Sign In  | </SigninButtom>
                            <CreatButton>Create Account</CreatButton>
                            <CartImg src={Cart} />
                            <span>$0.00</span>
                            <CartBox>0
                            </CartBox>

                        </HeaderLoginBox>
                    </ShipHeaderBox>
                </ShipHeader>


                <HeadTopContainer>
                    <HeadTopBox>
                        <HeadLogo src="https://www.petcircle.com.au/petcircle-assets/images/PC-Logo.svg"/>
                        <SearchBox>

                            <input placeholder={'search for eg.brands litter, flea, shampoo...'} value={text} onChange={changeText} type="text"
                                   style={{
                                       height: 33,
                                       marginTop: 25,
                                       width: '100%',
                                       Border:'none',
                                       borderRadius:6,
                                       color:'black'
                                   }}/>
                            {text.length !== 0 &&
                            <div style={{backgroundColor: 'white', width: 'calc(100% + 6.5px)', color: 'black'}}>
                                {productlist.map(value => <div>{value}</div>)}
                            </div>}
                        </SearchBox>

                        <div style={{width: 240, height: 23, float: 'left', marginTop: 20, fontSize: 18}}>
                            Save up to 20% off
                        </div>
                        <div style={{width: 240, height: 20, float: 'left', fontSize: 13}}>
                            Selected brands
                        </div>
                        <img src={AutoDelivery} style={{width:100, height:50}}/>

                    </HeadTopBox>

                </HeadTopContainer>
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