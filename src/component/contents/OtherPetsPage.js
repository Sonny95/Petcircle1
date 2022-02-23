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
    OtherPetsContainer, PetsBannerBox, petsBannerContainer,
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

import {useNavigate} from "react-router-dom";
import {menuStore} from "../../util/zustandStore";


const OtherPetsPage = () => {


    let navigate = useNavigate();
    const {activeKey, setActiveKey} = menuStore(state => state);

    const GoSpan = ({children}) => {

        const movePage = () => {
            navigate(`/other/${children.toLowerCase().replace(/ /gi, '-')}`);
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

            navigate(`/other/${words[words.length - 1].toLowerCase()}`);
            setActiveKey(null);
        }

        return (
            <ShopAllLetter className={'moveSpan'} onClick={movepage}>{children}</ShopAllLetter>
        )
    }
    return (
        <>

            <OtherPetsContainer>
                <OtherPetsBox>
                    <PetsMenuBox>
                        <CapitalMenu>Fish</CapitalMenu>
                        <PetsMenuLane></PetsMenuLane>
                        <GoSpan>Food</GoSpan>
                        <GoSpan>Water Care</GoSpan>
                        <GoSpan>Filters and Media</GoSpan>
                        <GoSpan>Tanks and Aquariums</GoSpan>
                        <GoSpan>Cleaning and Maintenance</GoSpan>
                        <GoSpan>Decorations</GoSpan>
                        <GoSpan>Heating and Lighting</GoSpan>
                        <GoSpan>Pumps</GoSpan>
                        <GoSpan>Health</GoSpan>
                        <GoSpan>Feeding</GoSpan>
                        <GoAll>Shop all Fish</GoAll>
                    </PetsMenuBox>
                    <PetsMenuBox>
                        <CapitalMenu>Small Pet</CapitalMenu>
                        <PetsMenuLane></PetsMenuLane>
                        <GoSpan>Food</GoSpan>
                        <GoSpan>Treats</GoSpan>
                        <GoSpan>Bedding and Clean Up</GoSpan>
                        <GoSpan>Toys and Hideaways</GoSpan>
                        <GoSpan>Feeding Accessories</GoSpan>
                        <GoSpan>Cages and Acccessroies</GoSpan>
                        <GoSpan>Grooming</GoSpan>
                        <GoSpan>Health</GoSpan>
                        <GoSpan>Harnesses and Leads</GoSpan>
                        <GoSpan>Beds</GoSpan>
                        <GoAll>Shop all Small Pet</GoAll>
                    </PetsMenuBox>
                    <PetsMenuBox>
                        <CapitalMenu>Reptile</CapitalMenu>
                        <PetsMenuLane></PetsMenuLane>
                        <GoSpan>Food</GoSpan>
                        <GoSpan>Heating and lighting</GoSpan>
                        <GoSpan>Tanks and Terrariums</GoSpan>
                        <GoSpan>Bedding and Substrate</GoSpan>
                        <GoSpan>Habitats and Habitat Accessories</GoSpan>
                        <GoSpan>Filters and Media</GoSpan>
                        <GoSpan>Feeding Accessories</GoSpan>
                        <GoSpan>Clean Up</GoSpan>
                        <GoSpan>Health</GoSpan>
                        <GoAll>Shop all Reptile</GoAll>
                    </PetsMenuBox>
                    <PetsMenuBox>
                        <CapitalMenu>Horse</CapitalMenu>
                        <PetsMenuLane></PetsMenuLane>
                        <GoSpan>Food</GoSpan>
                        <GoSpan>Health</GoSpan>
                        <GoSpan>Womers and Insect Repellents</GoSpan>
                        <GoSpan>Hoof Care</GoSpan>
                        <GoSpan>Grooming</GoSpan>
                        <GoSpan>Treats</GoSpan>
                        <GoSpan>Saddlery and Accessories</GoSpan>
                        <GoSpan>Toys</GoSpan>
                        <GoSpan>Stable Supplies</GoSpan>
                        <GoAll>Shop all Horse</GoAll>
                    </PetsMenuBox>
                </OtherPetsBox>
                <petsBannerContainer>
                    <PetsBannerBox>
                        <OtherPetsBanner src={O1}/>
                        <OtherPetsBanner src={O2}/>
                        <OtherPetsBanner src={O3}/>
                        <OtherPetsBanner src={O4}/>
                    </PetsBannerBox>
                    <PetsBannerBox>
                        <OtherPetsBanner src={O5}/>
                        <OtherPetsBanner src={O6}/>
                        <OtherPetsBanner src={O7}/>
                        <OtherPetsBanner src={O8}/>
                    </PetsBannerBox>
                </petsBannerContainer>

            </OtherPetsContainer>
        </>

    )
}
export default OtherPetsPage;
