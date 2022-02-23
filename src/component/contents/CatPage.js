import App from "../../App";
import {
    CapitalMenu,
    DogButtonBox,
    DogMenuBox, DogSaleImg,
    DpLetter,
    DpMenuContainer, DpSmallButton,
    MenuLane, ShopAllLetter
} from "../../resources/styledComponent/dogPage";
import CatSale from "../../resources/Photo/shop-cat-sale.png";
import CS1 from "../../resources/Photo/shop-kitten.png"
import CS2 from "../../resources/Photo/shop-indoor.png"
import CS3 from "../../resources/Photo/shop-outdoor.png"
import CatAll from "../../resources/Photo/cat-shop-all.png"

import {useNavigate} from "react-router-dom";
import {menuStore} from "../../util/zustandStore";



const CatPage  = () => {
    let navigate = useNavigate();
    const {activeKey, setActiveKey} = menuStore(state => state);

    const GoSpan = ({children}) => {

        const movePage = () => {
            navigate(`/cat/${children.toLowerCase().replace(/ /gi, '-')}`);
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

            navigate(`/cat/${words[words.length -1].toLowerCase()}`);
            setActiveKey(null);
        }

        return (
            <ShopAllLetter className={'moveSpan'} onClick={movepage}>{children}</ShopAllLetter>
        )
    }
return(
    <>
        <div className="DogMenu" style={{width: 1400, height: 430, margin: '0px auto', padding: 10}}>
            <div style={{width: 900}}>
                <DogMenuBox>
                    <CapitalMenu>Food</CapitalMenu>
                    <MenuLane></MenuLane>
                    <GoSpan>Dry Food</GoSpan>
                    <GoSpan>Wet Food</GoSpan>
                    <GoSpan>Vet Diets</GoSpan>
                    <GoSpan>Natural Food</GoSpan>
                    <GoSpan>Grain Free</GoSpan>
                    <GoSpan>Freeze and Air Dried</GoSpan>
                    <GoAll>Shop all Food</GoAll>
                </DogMenuBox>
                <DogMenuBox>
                    <CapitalMenu>Litter and Accessories</CapitalMenu>
                    <MenuLane></MenuLane>
                    <GoSpan>Litter</GoSpan>
                    <GoSpan>Litter Boxes</GoSpan>
                    <GoSpan>Litter Box Accessories</GoSpan>
                    <GoSpan>Tofu</GoSpan>
                    <GoSpan>Clumping</GoSpan>
                    <GoSpan>paper</GoSpan>
                    <GoAll>Shop all Accessories</GoAll>
                </DogMenuBox>
                <DogMenuBox>
                    <CapitalMenu>Other Supplies</CapitalMenu>
                    <MenuLane></MenuLane>
                    <GoSpan>Treats</GoSpan>
                    <GoSpan>Toys</GoSpan>
                    <GoSpan>Flea and Worning</GoSpan>
                    <GoSpan>Health</GoSpan>
                    <GoSpan>Feeding</GoSpan>
                    <GoSpan>Trees and Scratchers</GoSpan>
                    <GoSpan>Beds</GoSpan>
                    <GoSpan>Training and Clean Up</GoSpan>
                    <GoSpan>Grooming</GoSpan>
                    <GoSpan>Collars and Leads</GoSpan>
                    <GoSpan>House and Travel</GoSpan>
                    <GoSpan>Technology</GoSpan>
                    <GoAll> Shop all Supplies</GoAll>
                </DogMenuBox>
                <DogMenuBox>
                    <CapitalMenu>Top Cat Brands</CapitalMenu>
                    <MenuLane></MenuLane>
                    <GoSpan>Advance</GoSpan>
                    <GoSpan>Black Hawk</GoSpan>
                    <GoSpan>Breeders Choice</GoSpan>
                    <GoSpan>Dine</GoSpan>
                    <GoSpan>Felix</GoSpan>
                    <GoSpan>Greenies</GoSpan>
                    <GoSpan>Hills Prescription Diet</GoSpan>
                    <GoSpan>Hills Sceince Diet</GoSpan>
                    <GoSpan>Pro Plan</GoSpan>
                    <GoSpan>Royal Canin</GoSpan>
                    <GoSpan>Royal Canin Veterinary Diet</GoSpan>
                    <GoSpan>Ziwi</GoSpan>
                    <GoAll>Shop all Brands</GoAll>
                </DogMenuBox>
            </div>


            <div style={{float: 'right', height: '100%', width: 450}}>
                <DpMenuContainer>
                    <img src={CatSale} style={{height: 90, width: 430, marginBottom: 20}}/>
                    <DpLetter>Shop by Lifestage</DpLetter>

                    <DogButtonBox>
                        <img src={CS1} style={{height: 90, width: 90}}/>
                        <div>Puppy</div>
                    </DogButtonBox>

                    <DogButtonBox>
                        <img src={CS2} style={{height: 90, width: 90}}/>
                        <div>Adult</div>
                    </DogButtonBox>

                    <DogButtonBox>
                        <img src={CS3} style={{height: 90, width: 90}}/>
                        <div>Senior</div>
                    </DogButtonBox>


                    <DogSaleImg src={CatAll}/>


                </DpMenuContainer>
            </div>
        </div>
    </>
)
}

export default CatPage;