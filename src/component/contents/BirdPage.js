import App from "../../App";
import {
    CapitalMenu, DogButtonBox,
    DogMenuBox, DogSaleImg, DpLetter,
    DpMenuContainer, DpSmallButton,
    MenuLane,
    ShopAllLetter
} from "../../resources/styledComponent/dogPage";
import S1 from "../../resources/Photo/shop-puppy.png";
import S2 from "../../resources/Photo/shop-small-dog.png";
import S3 from "../../resources/Photo/shop-large-dog.png";
import BirdSaleBanner from "../../resources/Photo/shop-bird-sale.png"
import BirdSaleAll from "../../resources/Photo/bird-shop-all-new.png"
const BirdPage  = () =>
    <>

        <div className="DogMenu" style={{width:1400, height:420,margin:'0px auto',padding:10}}>
            <div style={{width:900}}>
                <DogMenuBox>
                    <CapitalMenu>Food</CapitalMenu>
                    <MenuLane></MenuLane>
                    <div>ChickenFood</div>
                    <div>Wild Bird Food</div>
                    <div>Parrot Food</div>
                    <div>Budge Food</div>
                    <div>Cockatiel Food</div>
                    <div>Finch And Canary Food</div>
                    <ShopAllLetter>Shop all Food</ShopAllLetter>
                </DogMenuBox>
                <DogMenuBox>
                    <CapitalMenu>Perches and Toys</CapitalMenu>
                    <MenuLane></MenuLane>
                    <div>Perches</div>
                    <div>hanging Toys</div>
                    <div>Activity Toys</div>
                    <div>Foraging Toys</div>
                    <div>Swing Toys</div>
                    <div>Bird Gyms</div>
                </DogMenuBox>
                <DogMenuBox>
                    <CapitalMenu>Other Suppllies</CapitalMenu>
                    <MenuLane></MenuLane>
                    <div>Cages and Accessories</div>
                    <div>Treats</div>
                    <div>Health and Grooming</div>
                    <div>Feeding Accessories</div>
                    <div>Bedding and Nesting</div>
                    <ShopAllLetter>Shop all Food</ShopAllLetter>
                </DogMenuBox>
                <DogMenuBox>
                    <CapitalMenu>Top Bird Brands</CapitalMenu>
                    <MenuLane></MenuLane>
                    <div>Barastoc</div>
                    <div>birdie</div>
                    <div>Harmony</div>
                    <div>Kazoo</div>
                    <div>Laucke</div>
                    <div>Passwell</div>
                    <div>Peckish</div>
                    <div>Peters</div>
                    <div>Trill</div>
                    <div>Vetafarm</div>
                    <div>Whistler</div>
                    <div>Wombaroo</div>
                    <ShopAllLetter>Shop all Food</ShopAllLetter>
                </DogMenuBox>
            </div>



            <div style={{float:'right',height:'100%',width:450}}>
                <DpMenuContainer>
                    <img src={BirdSaleBanner} style={{height:90,width:430,marginBottom:20}}/>
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




export default BirdPage;