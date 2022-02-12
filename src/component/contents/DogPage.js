import App from "../../App";
import DogSale from "../../resources/Photo/shop-dog-sale.png"
import S1 from "../../resources/Photo/shop-puppy.png"
import S2 from "../../resources/Photo/shop-small-dog.png"
import S3 from "../../resources/Photo/shop-large-dog.png"
import {
    CapitalMenu,
    DogButtonBox, DogMenuBox,
    DogSaleImg,
    DpLetter,
    DpMenuContainer,
    DpSmallButton, MenuLane, ShopAllLetter
} from "../../resources/styledComponent/dogPage";
import DogSaleAll from "../../resources/Photo/dog-shop-all.png"
import {useNavigate} from "react-router-dom";


const DogPage  = (props) => {
    const {getActiveKey} =props;
        let navigate = useNavigate();
    return(
        <>

    <div className="DogMenu" style={{width:1400, height:500,margin:'0px auto',padding:10}}>
<div style={{width:900}}>
    <DogMenuBox>
        <CapitalMenu>Food</CapitalMenu>
        <MenuLane></MenuLane>
        <div>Dry Food</div>
        <div>Wet Food</div>
        <div>Natural Food</div>
        <div>Vet Diets</div>
        <div>Grain Free</div>
        <div>Freeze and Air Dried</div>
        <ShopAllLetter>Shop all Food</ShopAllLetter>
    </DogMenuBox>
    <DogMenuBox>
        <CapitalMenu>Treats</CapitalMenu>
        <MenuLane></MenuLane>
        <div onClick={()=> {
            getActiveKey(false);
            navigate('/dog');
        }} style={{cursor : 'pointer'}}>Natural Treats</div>
        <div>Dental Treats</div>
        <div>Training Treats</div>
        <div>Freeze and Air Dried</div>
        <div>Long Lasting Treats</div>
        <div>Biscuits</div>
        <ShopAllLetter>Shop all Food</ShopAllLetter>
    </DogMenuBox>
        <DogMenuBox>
            <CapitalMenu>Other Suppllies</CapitalMenu>
            <MenuLane></MenuLane>
            <div>Toys</div>
            <div>Flea and Worning</div>
            <div>Health</div>
            <div>Training and Clean Up</div>
            <div>Grooming</div>
            <div>Beds</div>
            <div>Feeding</div>
            <div>Collars and Leads</div>
            <div>Clothes</div>
            <div>Technology</div>
            <div>House and Travel</div>
            <ShopAllLetter>Shop all Food</ShopAllLetter>
        </DogMenuBox>
        <DogMenuBox>
            <CapitalMenu>Top Dog Brands</CapitalMenu>
            <MenuLane></MenuLane>
            <div>Advance</div>
            <div>Black Hawk</div>
            <div>Hills Prescription Diet</div>
            <div>Hills Science Diet</div>
            <div>Kong</div>
            <div>Meals For Mutts</div>
            <div>Nexgard Spectra</div>
            <div>Paws for Life</div>
            <div>Royal Canin</div>
            <div>Royal Cannin Veterinary Diet</div>
            <div>Supercoat</div>
            <div>Taste of the wild</div>
            <ShopAllLetter>Shop all Food</ShopAllLetter>
        </DogMenuBox>
    </div>



        <div style={{float:'right',height:'100%',width:450}}>
            <DpMenuContainer>
            <img src={DogSale} style={{height:90,width:430,marginBottom:20}}/>
                <DpLetter>Shop by Lifestage</DpLetter>

            <DogButtonBox>
                <img src={S1} style={{height:90, width:90}}/>
                <div >Puppy</div>
            </DogButtonBox>

            <DogButtonBox >
                <img src={S2} style={{height:90, width:90}}/>
                <div >Adult</div>
            </DogButtonBox>

            <DogButtonBox >
                <img src={S3} style={{height:90, width:90}}/>
                <div >Senior</div>
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