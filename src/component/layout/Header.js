import Login from "../../resources/Photo/head image.png";
import Cart from "../../resources/Photo/cart.svg";
import React, {useEffect, useState} from "react";
import DogPage from "../contents/exam/menu/DogPage";
import CatPage from "../contents/exam/menu/CatPage";
import BirdPage from "../contents/exam/menu/BirdPage";
import OtherPetsPage from "../contents/exam/menu/OtherPetsPage";
import SignUp from "../contents/exam/menu/SignUp"
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
    LoginImg, MenuBigBox,
    MenuBox,
    MenuContainer, MenuOpenBox,
    MenuUnit,
    SearchBox,
    SearchInput,
    ShipHeader,
    ShipHeaderBox,
    ShipHeaderLetter,
    SigninButton
} from "../../resources/styledComponent/header";
import AutoDelivery from "../../resources/Photo/auto-delivery-icon.svg"
import {Link, useNavigate} from "react-router-dom";
import {menuStore} from "../../util/zustandStore";

const Header = (props) => {
    const {getActiveKey} = props;
    let navigate = useNavigate();

    const {activeKey, setActiveKey} = menuStore(state => state);

    const [text, setText] = useState('');
    const [ProductList, setProductList] = useState([]);

    const [fontTrigger, setFontTrigger] = useState(null);

    useEffect(() => {
        setActiveKey(null)
    }, [props.closeKey])

    useEffect(() => {
        getActiveKey(activeKey)
    }, [activeKey])

    //ㄱ자바스크립트 객체란 무엇인가
    const menuList = [
        {color: '#f8df02', name: 'Sale'},
        {color: 'blue', name: 'Dog'},
        {color: 'gray', name: 'Cat'},
        {color: 'lightGreen', name: 'Bird'},
        {color: 'violet', name: 'Other Pets'},
        {color: 'orange', name: 'Brands', link : '/brands'},
        {color: 'navy', name: 'Vet tips', link : '/tips'}
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

                            <SigninButton className={'moveSpan'} onClick={()=>navigate('/LoginPage')}>Sign In  |</SigninButton>
                            <CreatButton className={'moveSpan'} onClick={()=>navigate('/signUp')}>Create Account</CreatButton>

                            <CartImg src={Cart} />
                            <span >$0.00</span>
                            <CartBox>0</CartBox>
                        </HeaderLoginBox>
                    </ShipHeaderBox>
                </ShipHeader>

                <HeadTopContainer>
                    <HeadTopBox>
                        <HeadLogo onClick={()=>navigate('/')} src="https://www.petcircle.com.au/petcircle-assets/images/PC-Logo.svg"/>
                        <SearchBox>

                            <SearchInput placeholder={'search for eg.brands litter, flea, shampoo...'} value={text} onChange={changeText} type="text"/>
                            {text.length !== 0 &&
                            <div style={{backgroundColor: 'white', width: 'calc(100% + 6.5px)', color: 'black'}}>
                                {ProductList.map(value => <div>{value}</div>)}
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
<MenuBigBox>
                <MenuBox length={menuList.length} >
                    {menuList.map((res, index) => {

                        return <MenuUnit style={{
                            backgroundColor: activeKey === index ? res.color : ''
                        }} onClick={() => {
                            setActiveKey(index);
                            if(res.link){
                                setActiveKey(null);
                                navigate(`${res.link}`);
                            }
                        }}>
                            <div style={{
                                backgroundColor: index === 0 && res.color,
                                color: index === 0 && 'black',
                                padding: 4,
                            }}
                                 onPointerOver={(e) => setFontTrigger(index)}
                                 onPointerOut={() => setFontTrigger(null)}>{res.name}</div>
                        </MenuUnit>
                    })}

                </MenuBox>
</MenuBigBox>
            </MenuContainer>


            <MenuOpenBox>
                {getPage(activeKey)}
            </MenuOpenBox>


        </>
    )
}

export default Header