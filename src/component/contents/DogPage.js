import DogSale from "../../resources/Photo/shop-dog-sale.png"
import S1 from "../../resources/Photo/shop-puppy.png"
import S2 from "../../resources/Photo/shop-small-dog.png"
import S3 from "../../resources/Photo/shop-large-dog.png"
import {
    CapitalMenu,
    DogButtonBox,
    DogMenuBox,
    DogSaleImg,
    DpLetter,
    DpMenuContainer,
    DpSmallButton,
    MenuLane,
    ShopAllLetter
} from "../../resources/styledComponent/dogPage";
import DogSaleAll from "../../resources/Photo/dog-shop-all.png"

import {Link, useNavigate} from "react-router-dom";
import {useRef} from "react";
import {menuStore} from "../../util/zustandStore";


const DogPage = () => {
    const {activeKey, setActiveKey} = menuStore(state => state);
    let navigate = useNavigate();
    const spanRef = useRef();


    const GoSpan = ({children}) => {
        let navigate = useNavigate();

        const movePage = () => {
            navigate(`/dog/${children.toLowerCase().replace(/ /gi, '-')}`);
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

            navigate(`/dog/${words[words.length -1].toLowerCase()}`);
            setActiveKey(null);
        }

        return (
            <ShopAllLetter className={'moveSpan'} onClick={movepage}>{children}</ShopAllLetter>
        )
    }



    return (
        <>
            <div className="DogMenu" style={{width: 1400, height: 500, margin: '0px auto', padding: 10}}>
                <div style={{width: 900}}>
                    <DogMenuBox>
                        <CapitalMenu>Food</CapitalMenu>
                        <MenuLane></MenuLane>
                        <GoSpan>Dry Food</GoSpan>
                        <GoSpan>Wet Food</GoSpan>
                        <GoSpan>Natural Food</GoSpan>
                        <GoSpan>Vet Diets</GoSpan>
                        <GoSpan>Grain Free</GoSpan>
                        <GoSpan>Freeze and Air Dried</GoSpan>
                        <GoAll>Shop all Food</GoAll>
                    </DogMenuBox>
                    <DogMenuBox>
                        <CapitalMenu>Treats</CapitalMenu>
                        <MenuLane></MenuLane>
                        <GoSpan>Natural Treatss</GoSpan>
                        <GoSpan>Dental Treats</GoSpan>
                        <GoSpan>Training Treats</GoSpan>
                        <GoSpan>Freeze and Air Dried</GoSpan>
                        <GoSpan>Long Lasting Treats</GoSpan>
                        <GoSpan>Biscuits</GoSpan>
                        <GoAll>Shop all Treats</GoAll>
                    </DogMenuBox>
                    <DogMenuBox>
                        <CapitalMenu>Other Supplies</CapitalMenu>
                        <MenuLane></MenuLane>
                        <GoSpan>Toys</GoSpan>
                        <GoSpan>Flea and Worning</GoSpan>
                        <GoSpan>Health</GoSpan>
                        <GoSpan>Training and Clean Up</GoSpan>
                        <GoSpan>Grooming</GoSpan>
                        <GoSpan>Beds</GoSpan>
                        <GoSpan>Feeding</GoSpan>
                        <GoSpan>Collars and Leads</GoSpan>
                        <GoSpan>Clothes</GoSpan>
                        <GoSpan>Technology</GoSpan>
                        <GoSpan>House and Travel</GoSpan>
                        <GoAll>Shop all Supplies</GoAll>
                    </DogMenuBox>
                    <DogMenuBox>
                        <CapitalMenu>Top Dog Brands</CapitalMenu>
                        <MenuLane></MenuLane>
                        <GoSpan>Advance</GoSpan>
                        <GoSpan>Black Hawk</GoSpan>
                        <GoSpan>Hills Prescription Diet</GoSpan>
                        <GoSpan>Hills Science Diet</GoSpan>
                        <GoSpan>Kong</GoSpan>
                        <GoSpan>Meals For Mutts</GoSpan>
                        <GoSpan>Nexgard Spectra</GoSpan>
                        <GoSpan>Paws for Life</GoSpan>
                        <GoSpan>Royal Canin</GoSpan>
                        <GoSpan>Royal Cannin Veterinary Diet</GoSpan>
                        <GoSpan>Supercoat</GoSpan>
                        <GoSpan>Taste of the wild</GoSpan>
                        <GoAll>Shop all Brands</GoAll>
                    </DogMenuBox>
                </div>


                <div style={{float: 'right', height: '100%', width: 450}}>
                    <DpMenuContainer>
                        <img src={DogSale} style={{height: 90, width: 430, marginBottom: 20}}/>
                        <DpLetter>Shop by Lifestage</DpLetter>

                        <DogButtonBox>
                            <img src={S1} style={{height: 90, width: 90}}/>
                            <div>Puppy</div>
                        </DogButtonBox>

                        <DogButtonBox>
                            <img src={S2} style={{height: 90, width: 90}}/>
                            <div>Adult</div>
                        </DogButtonBox>

                        <DogButtonBox>
                            <img src={S3} style={{height: 90, width: 90}}/>
                            <div>Senior</div>
                        </DogButtonBox>


                        <DpLetter>Shop by Breed Size</DpLetter>
                        <DpSmallButton>Small Dog</DpSmallButton>
                        <DpSmallButton>Medium Dog</DpSmallButton>
                        <DpSmallButton>Large Dog</DpSmallButton>

                        <DogSaleImg src={DogSaleAll}/>


                    </DpMenuContainer>
                </div>
            </div>
        </>
    )
}

export default DogPage;