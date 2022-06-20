import App from "../../../../App";
import {
    CapitalMenu, DogButtonBox,
    DogMenuBox, DogSaleImg, DpLetter,
    DpMenuContainer, DpSmallButton,
    MenuLane,
    ShopAllLetter
} from "../../../../resources/styledComponent/dogPage";
import S1 from "../../../../resources/Photo/shop-puppy.png";
import S2 from "../../../../resources/Photo/shop-small-dog.png";
import S3 from "../../../../resources/Photo/shop-large-dog.png";
import BirdSaleBanner from "../../../../resources/Photo/shop-bird-sale.png"
import BirdSaleAll from "../../../../resources/Photo/bird-shop-all-new.png"
import {useNavigate} from "react-router-dom";
import {menuStore} from "../../../../util/zustandStore";



const BirdPage = () => {
    let navigate = useNavigate();
    const {activeKey, setActiveKey} = menuStore(state => state);

    const GoSpan = ({children}) => {

        const movePage = () => {
            navigate(`/bird/${children.toLowerCase().replace(/ /gi, '-')}`);
            setActiveKey(null);
        }

        return (
            <div onClick={movePage} className={'moveSpan'}>
                {children}
            </div>
        )
    }

    const GoAll = ({children}) => {

        const movepage = () => {
            const str = children;
            const words = str.split(' ');

            navigate(`/bird/${words[words.length - 1].toLowerCase()}`);
            setActiveKey(null);
        }

        return (
            <ShopAllLetter className={'moveSpan'} onClick={movepage}>{children}</ShopAllLetter>
        )
    }

    return (
        <>

            <div className="DogMenu" style={{width: 1400, height: 420, margin: '0px auto', padding: 10}}>
                <div style={{width: 900}}>
                    <DogMenuBox>
                        <CapitalMenu>Food</CapitalMenu>
                        <MenuLane></MenuLane>
                        <GoSpan>ChickenFood</GoSpan>
                        <GoSpan>Wild Bird Food</GoSpan>
                        <GoSpan>Parrot Food</GoSpan>
                        <GoSpan>Budge Food</GoSpan>
                        <GoSpan>Cockatiel Food</GoSpan>
                        <GoSpan>Finch And Canary Food</GoSpan>
                        <GoAll>Shop all Food</GoAll>
                    </DogMenuBox>
                    <DogMenuBox>
                        <CapitalMenu>Perches and Toys</CapitalMenu>
                        <MenuLane></MenuLane>
                        <GoSpan>Perches</GoSpan>
                        <GoSpan>hanging Toys</GoSpan>
                        <GoSpan>Activity Toys</GoSpan>
                        <GoSpan>Foraging Toys</GoSpan>
                        <GoSpan>Swing Toys</GoSpan>
                        <GoSpan>Bird Gyms</GoSpan>
                        <GoAll>Shop all Toys</GoAll>
                    </DogMenuBox>
                    <DogMenuBox>
                        <CapitalMenu>Other Supplies</CapitalMenu>
                        <MenuLane></MenuLane>
                        <GoSpan>Cages and Accessories</GoSpan>
                        <GoSpan>Treats</GoSpan>
                        <GoSpan>Health and Grooming</GoSpan>
                        <GoSpan>Feeding Accessories</GoSpan>
                        <GoSpan>Bedding and Nesting</GoSpan>
                        <GoAll>Shop all Supplies</GoAll>
                    </DogMenuBox>
                    <DogMenuBox>
                        <CapitalMenu>Top Bird Brands</CapitalMenu>
                        <MenuLane></MenuLane>
                        <GoSpan>Barastoc</GoSpan>
                        <GoSpan>birdie</GoSpan>
                        <GoSpan>Harmony</GoSpan>
                        <GoSpan>Kazoo</GoSpan>
                        <GoSpan>Laucke</GoSpan>
                        <GoSpan>Passwell</GoSpan>
                        <GoSpan>Peckish</GoSpan>
                        <GoSpan>Peters</GoSpan>
                        <GoSpan>Trill</GoSpan>
                        <GoSpan>Vetafarm</GoSpan>
                        <GoSpan>Whistler</GoSpan>
                        <GoSpan>Wombaroo</GoSpan>
                        <GoAll>Shop all Brands</GoAll>
                    </DogMenuBox>
                </div>


                <div style={{float: 'right', height: '100%', width: 450}}>
                    <DpMenuContainer>
                        <img src={BirdSaleBanner} style={{height: 90, width: 430, marginBottom: 20}}/>
                        <DpLetter>Shop by Species</DpLetter>

                        <DpSmallButton>Chickens</DpSmallButton>
                        <DpSmallButton>Wild Bird</DpSmallButton>
                        <DpSmallButton>Parrot</DpSmallButton>
                        <DpSmallButton>Budgie</DpSmallButton>
                        <DpSmallButton>Finch</DpSmallButton>
                        <DpSmallButton>Cockatiel</DpSmallButton>


                        <DogSaleImg src={BirdSaleAll}/>


                    </DpMenuContainer>
                </div>
            </div>
        </>
    )
}

    export default BirdPage;