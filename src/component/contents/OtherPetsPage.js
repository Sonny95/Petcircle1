import App from "../../App";
import {
    CapitalMenu, DogButtonBox,
    DogMenuBox, DogSaleImg, DpLetter,
    DpMenuContainer, DpSmallButton,
    MenuLane,
    ShopAllLetter
} from "../../resources/styledComponent/dogPage";
import {
    OtherPetsBanner,
    OtherPetsBox,
    OtherPetsContainer, PetsBannerBox,
    PetsMenuBox,
    PetsMenuLane
} from "../../resources/styledComponent/otherPets";
import O1 from "../../resources/Photo/O1.png"
import O2 from "../../resources/Photo/O2.png"
import O3 from "../../resources/Photo/O3.png"
import O4 from "../../resources/Photo/O4.png"
import O5 from "../../resources/Photo/O5.png"
import O6 from "../../resources/Photo/O6.png"
import O7 from "../../resources/Photo/O7.png"
import O8 from "../../resources/Photo/O8.png"




const OtherPetsPage  = () =>
    <>

        <OtherPetsContainer>
            <OtherPetsBox>
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
            </OtherPetsBox>

            <PetsBannerBox>
            <OtherPetsBanner src={O1}/>
            <OtherPetsBanner src={O2}/>
            <OtherPetsBanner src={O3}/>
            <OtherPetsBanner src={O4}/>
            <OtherPetsBanner src={O5}/>
            <OtherPetsBanner src={O6}/>
            <OtherPetsBanner src={O7}/>
            <OtherPetsBanner src={O8}/>
            </PetsBannerBox>

        </OtherPetsContainer>
    </>


export default OtherPetsPage;
