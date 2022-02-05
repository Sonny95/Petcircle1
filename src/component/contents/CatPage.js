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


const CatPage  = () =>
    <>
        <div className="DogMenu" style={{width:1400, height:430,margin:'0px auto',padding:10}}>
        <div style={{width:900}}>
            <DogMenuBox>
                <CapitalMenu>Food</CapitalMenu>
                <MenuLane></MenuLane>
                <div>Dry Food</div>
                <div>Wet Food</div>
                <div>Vet Diets</div>
                <div>Natural Food</div>
                <div>Grain Free</div>
                <div>Freeze and Air Dried</div>
                <ShopAllLetter>Shop all Food</ShopAllLetter>
            </DogMenuBox>
            <DogMenuBox>
                <CapitalMenu>Litter and Accessories</CapitalMenu>
                <MenuLane></MenuLane>
                <div>Litter</div>
                <div>Litter Boxes</div>
                <div>Litter Box Accessories</div>
                <div>Tofu</div>
                <div>Clumping</div>
                <div>paper</div>
                <ShopAllLetter>Shop all Food</ShopAllLetter>
            </DogMenuBox>
            <DogMenuBox>
                <CapitalMenu>Other Suppllies</CapitalMenu>
                <MenuLane></MenuLane>
                <div>Treats</div>
                <div>Toys</div>
                <div>Flea and Worning</div>
                <div>Health</div>
                <div>Feeding</div>
                <div>Trees and Scratchers</div>
                <div>Beds</div>
                <div>Training and Clean Up</div>
                <div>Grooming</div>
                <div>Collars and Leads</div>
                <div>House and Travel</div>
                <div>Technology</div>
                <ShopAllLetter>Shop all Food</ShopAllLetter>
            </DogMenuBox>
            <DogMenuBox>
                <CapitalMenu>Top Cat Brands</CapitalMenu>
                <MenuLane></MenuLane>
                <div>Advance</div>
                <div>Black Hawk</div>
                <div>Breeders Choice</div>
                <div>Dine</div>
                <div>Felix</div>
                <div>Greenies</div>
                <div>Hills Prescription Diet</div>
                <div>Hills Sceince Diet</div>
                <div>Pro Plan</div>
                <div>Royal Canin</div>
                <div>Royal Canin Veterinary Diet</div>
                <div>Ziwi</div>
                <ShopAllLetter>Shop all Food</ShopAllLetter>
            </DogMenuBox>
        </div>



        <div style={{float:'right',height:'100%',width:450}}>
            <DpMenuContainer>
                <img src={CatSale} style={{height:90,width:430,marginBottom:20}}/>
                <DpLetter>Shop by Lifestage</DpLetter>

                <DogButtonBox>
                    <img src={CS1} style={{height:90, width:90}}/>
                    <div >Puppy</div>
                </DogButtonBox>

                <DogButtonBox >
                    <img src={CS2} style={{height:90, width:90}}/>
                    <div >Adult</div>
                </DogButtonBox>

                <DogButtonBox >
                    <img src={CS3} style={{height:90, width:90}}/>
                    <div >Senior</div>
                </DogButtonBox>


                <DogSaleImg src={CatAll}/>







            </DpMenuContainer>
        </div>
    </div>
</>


export default CatPage;