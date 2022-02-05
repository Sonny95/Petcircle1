import App from "../../App";
import {
    CapitalMenu, DogButtonBox,
    DogMenuBox, DogSaleImg, DpLetter,
    DpMenuContainer, DpSmallButton,
    MenuLane,
    ShopAllLetter
} from "../../resources/styledComponent/dogPage";
import DogSale from "../../resources/Photo/shop-dog-sale.png";
import S1 from "../../resources/Photo/shop-puppy.png";
import S2 from "../../resources/Photo/shop-small-dog.png";
import S3 from "../../resources/Photo/shop-large-dog.png";
import DogSaleAll from "../../resources/Photo/dog-shop-all.png";
import {PetsMenuBox, PetsMenuLane} from "../../resources/styledComponent/otherPets";

const OtherPetsPage  = () =>
    <>

        <div className="OtherPetsMenu" style={{width:1400, height:500,margin:'0px auto',padding:10}}>
            <div style={{width:1400}}>
                <PetsMenuBox>
                    <CapitalMenu>Fish</CapitalMenu>
                    <PetsMenuLane></PetsMenuLane>
                    <div>Food</div>
                    <div>Water Care</div>
                    <div>Filters and Media</div>
                    <div>Tanks and Aquariums</div>
                    <div>Cleaning and Maintenance</div>
                    <div>Decorations</div>
                    <div>Heating and Lighting</div>
                    <div>Pumps</div>
                    <div>Health</div>
                    <div>Feeding</div>
                </PetsMenuBox>
                <PetsMenuBox>
                    <CapitalMenu>Small Pet</CapitalMenu>
                    <PetsMenuLane></PetsMenuLane>
                    <div>Food</div>
                    <div>Treats</div>
                    <div>Bedding and Clean Up</div>
                    <div>Toys and Hideaways</div>
                    <div>Feeding Accessories</div>
                    <div>Cages and Acccessroies</div>
                    <div>Grooming</div>
                    <div>Health</div>
                    <div>Harnesses and Leads</div>
                    <div>Beds</div>
                </PetsMenuBox>
                <PetsMenuBox>
                    <CapitalMenu>Reptile</CapitalMenu>
                    <PetsMenuLane></PetsMenuLane>
                    <div>Food</div>
                    <div>Heating and lighting</div>
                    <div>Tanks and Terrariums</div>
                    <div>Bedding and Substrate</div>
                    <div>Habitats and Habitat Accessories</div>
                    <div>Filters and Media</div>
                    <div>Feeding Accessories</div>
                    <div>Clean Up</div>
                    <div>Health</div>
                </PetsMenuBox>
                <PetsMenuBox>
                    <CapitalMenu>Horse</CapitalMenu>
                    <PetsMenuLane></PetsMenuLane>
                    <div>Food</div>
                    <div>Health</div>
                    <div>Womers and Insect Repellents</div>
                    <div>Hoof Care</div>
                    <div>Grooming</div>
                    <div>Treats</div>
                    <div>Saddlery and Accessories</div>
                    <div>Toys</div>
                    <div>Stable Supplies</div>
                </PetsMenuBox>
            </div>




        </div>
    </>


export default OtherPetsPage;
