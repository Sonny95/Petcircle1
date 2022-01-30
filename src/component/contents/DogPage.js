import App from "../../App";
import DogSale from "../../resources/Photo/shop-dog-sale.png"
import S1 from "../../resources/Photo/shop-puppy.png"
import S2 from "../../resources/Photo/shop-small-dog.png"
import S3 from "../../resources/Photo/shop-large-dog.png"

const DogPage  = () => {
    return(
        <>

    <div className="DogMenu" style={{width:1300, height:450,margin:'0px auto',padding:10}}>
<div style={{width:900}}>
    <div style={{height:300,width:210,float:'left'}}>
        <div>Food</div>
        <div>Dry Food</div>
        <div>Wet Food</div>
        <div>Natural Food</div>
        <div>Vet Diets</div>
        <div>Grain Free</div>
        <div>Freeze and Air Dried</div>
    </div>
    <div style={{height:300,width:210,float:'left'}}>
        <div>Treats</div>
        <div>Natural Treats</div>
        <div>Dental Treats</div>
        <div>Training Treats</div>
        <div>Freeze and Air Dried</div>
        <div>Long Lasting Treats</div>
        <div>Biscuits</div>
    </div>
        <div style={{height:300,width:210,float:'left'}}>
            <div>Other Suppllies</div>
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
        </div>
        <div style={{height:300,width:210,float:'left',marginRight:20}}>
            <div>Top Dog Brands</div>
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
        </div>
    </div>
        <div style={{float:'right',height:'100%',width:400}}>
            <img src={DogSale} style={{height:80,width:350}}/>
            <div style={{margin:'10px 110px',fontSize:15}}>Shop by Lifestage</div>

            <div style={{color:'#01abb8'}}>
            <div style={{float:'left',color:'#01abb8'}}>
                <img src={S1} style={{height:90, width:90,marginLeft:18}}/>
                <div style={{marginLeft:40}} >Puppy</div>
            </div>
            <div style={{float:'left',}}>
                <img src={S2} style={{height:90, width:90,marginLeft:25}}/>
                <div style={{marginLeft:50}}>Adult</div>
            </div>
            <div style={{float:'left'}}>
                <img src={S3} style={{height:90, width:90,marginLeft:25}}/>
                <div style={{marginLeft:50}}>Senior</div>
            </div>
        </div>
            {/*<img src={S1} style={{height:90, width:90,marginLeft:18}}/>*/}
            {/*<img src={S2} style={{height:90, width:90,marginLeft:25}}/>*/}
            {/*<img src={S3} style={{height:90, width:90,marginLeft:25}}/>*/}
            {/*<div >Puppy</div>*/}
            {/*<div >Adult</div>*/}
            {/*<div >Senior</div>*/}

        </div>
        </div>
        </>
)
}

export default DogPage;