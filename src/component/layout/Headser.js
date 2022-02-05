import Login from "../../resources/Photo/head image.png";
import Cart from "../../resources/Photo/cart.svg";
import React, {useEffect, useState} from "react";
import DogPage from "../contents/DogPage";
import CatPage from "../contents/CatPage";
import BirdPage from "../contents/BirdPage";
import OtherPetsPage from "../contents/OtherPetsPage";
import SignPage from "../contents/SignPage"
import {
    AutoImg,
    CartBox,
    CartImg,
    CreatButton,
    HeaderLoginBox,
    HeadLogo,
    HeadTopBox,
    HeadTopContainer,
    Letter1Box, Letter2Box,
    LetterContainer,
    LoginImg,
    MenuBox,
    MenuContainer, MenuOpenBox,
    MenuUnit,
    SearchBox,
    SearchInput,
    ShipHeader,
    ShipHeaderBox,
    ShipHeaderLetter,
    SigninButtom
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

                            <SearchInput placeholder={'search for eg.brands litter, flea, shampoo...'} value={text} onChange={changeText} type="text"/>
                            {text.length !== 0 &&
                            <div style={{backgroundColor: 'white', width: 'calc(100% + 6.5px)', color: 'black'}}>
                                {productlist.map(value => <div>{value}</div>)}
                            </div>}
                        </SearchBox>
                        <LetterContainer>

                        <Letter1Box>
                            Save up to 20% off
                        </Letter1Box>
                        <Letter2Box>
                            Selected brands
                        </Letter2Box>
                        <AutoImg src={AutoDelivery} />
                        </LetterContainer>

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


            <MenuOpenBox>
                {getPage(activeKey)}
            </MenuOpenBox>


        </>
    )
}

export default Header