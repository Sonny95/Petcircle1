import HeadImg from "../../resources/Photo/Adimg.jpg";
import Dog1 from "../../resources/Photo/dog-1.png";
import Cat1 from "../../resources/Photo/cat-1.png";
import Fish from "../../resources/Photo/fish-1.png";
import Bird1 from "../../resources/Photo/bird-1.png";
import Reptile from "../../resources/Photo/reptile-1.png";
import SmallP1 from "../../resources/Photo/bunny-1.png";
import Hores from "../../resources/Photo/pony-1.png";
import Dfood from "../../resources/Photo/dog-food.png";
import Dtreats from "../../resources/Photo/dog-treats.png";
import Dworm from "../../resources/Photo/dog-flea-and-worming.png";
import Dtoys from "../../resources/Photo/dog-toys.png";
import Cfood from "../../resources/Photo/cat-food.png";
import Ctreats from "../../resources/Photo/cat-treats.png";
import Clitter from "../../resources/Photo/cat-litter.png";
import Ctoys from "../../resources/Photo/cat-toys.png";
import Ad1 from "../../resources/Photo/1.jpg";
import Ad2 from "../../resources/Photo/2.jpg";
import Ad3 from "../../resources/Photo/3.jpg";
import P1 from "../../resources/Photo/11.png";
import P2 from "../../resources/Photo/22.png";
import P3 from "../../resources/Photo/33.png";
import P4 from "../../resources/Photo/44.png";
import P5 from "../../resources/Photo/55.png";
import P6 from "../../resources/Photo/66.png";
import React from "react";
import {SubText} from "../../resources/styledComponent/contents";

const Contents = () => {

    const petList = [{name: 'fish', src: Fish},
        {name: 'bird', src: Bird1},
        {name: 'Reptile', src: Reptile},
        {name: 'Small Pet', src: SmallP1},
        {name: 'Horse', src: Hores}]

    return (
        <>
            <div>
                <img src={HeadImg} style={{width: '100%'}}/>
            </div>

            <div className="Body" style={{width: '100%', height: 430}}>
                <div style={{
                    width: 1250,
                    height: '100%',
                    margin: '0px auto',
                    color: 'white',
                    textAlign: 'left'
                }}>
                    <h2 style={{marginBottom: 40, color: 'black'}}>Better Range</h2>
                    <div style={{
                        backgroundColor: '#00b1b9',
                        height: 70,
                        width: 400,
                        float: 'left',
                        borderRadius: '6px 6px 0 0'
                    }}>
                        <img src={Dog1} style={{width: 150, height: 90, marginTop: -20, marginLeft: 30}}/>
                        <div style={{float: 'right', margin: '18px 15px', fontSize: 20}}>Shop Dog ></div>
                    </div>

                    <div style={{
                        backgroundColor: '#00b1b9',
                        height: 70,
                        width: 400,
                        float: "left",
                        borderRadius: '6px 6px 0 0',
                        marginLeft: 26
                    }}>
                        <img src={Cat1} style={{width: 150, height: 92, marginTop: -22, marginLeft: 30}}/>
                        <div style={{float: 'right', margin: '18px 15px', fontSize: 20}}>Shop Cat ></div>
                    </div>


                    <div style={{float: "right", color: '#00737f'}}>

                        {petList.map((value, index) => {
                            return <div style={{height: 65, width: 400, marginBottom: 2, backgroundColor: '#f5f6f8',
                               borderRadius : index === 0 ? '8px 8px 0px 0px' :  index === petList.length -1 ? ' 0px 0px 8px 8px' : ''
                            }}>
                                <img src={value.src} style={{width: 80, height: 65, marginLeft: 30}}/>
                                <SubText>{value.name} ></SubText>
                            </div>
                        })}

                    </div>
                    <div className="dogButton" style={{height: 270, width: 404, float: 'left'}}>
                        <div style={{
                            backgroundColor: '#f5f6f8',
                            height: 130,
                            width: 200,
                            float: 'left',
                            margin: '3px 2px 2px 0'
                        }}>
                            <img src={Dfood}
                                 style={{height: 50, width: 90, marginTop: '40px', marginLeft: '30px'}}/>
                            <span style={{
                                color: '#00737f',
                                fontSize: 18,
                                float: 'right',
                                marginTop: '50px',
                                marginRight: '20px'
                            }}> Food </span>
                        </div>
                        <div style={{
                            backgroundColor: '#f5f6f8',
                            height: 130,
                            width: 200,
                            float: 'left',
                            margin: '3px 2px 2px 0'
                        }}>
                            <img src={Dtreats}
                                 style={{height: 55, width: 90, marginTop: '35px', marginLeft: '30px'}}/>
                            <span style={{
                                color: '#00737f',
                                fontSize: 18,
                                float: 'right',
                                marginTop: '50px',
                                marginRight: '20px'
                            }}> Treats </span>
                        </div>
                        <div style={{
                            backgroundColor: '#f5f6f8',
                            height: 130,
                            width: 200,
                            float: 'right',
                            margin: '0 2px 2px 0',
                            borderRadius: '0 0 9px 0'
                        }}>
                            <img src={Dworm}
                                 style={{height: 50, width: 60, marginTop: '40px', marginLeft: '30px'}}/>
                            <div style={{
                                color: '#00737f',
                                fontSize: 18,
                                float: 'right',
                                height: '10%0',
                                width: 60,
                                marginTop: '38px',
                                marginRight: '35px'
                            }}> Flea & Worming
                            </div>
                        </div>
                        <div style={{
                            backgroundColor: '#f5f6f8',
                            height: 130,
                            width: 200,
                            float: 'right',
                            margin: '0 2px 2px 0',
                            borderRadius: '0 0 0 9px'
                        }}>
                            <img src={Dtoys}
                                 style={{height: 85, width: 100, marginTop: '20px', marginLeft: '30px'}}/>
                            <span style={{
                                color: '#00737f',
                                fontSize: 18,
                                float: 'right',
                                marginTop: '50px',
                                marginRight: '20px'
                            }}> Toys </span>
                        </div>
                    </div>

                    <div className="catButton" style={{height: 270, width: 404, float: 'left', marginLeft: 21}}>
                        <div style={{
                            backgroundColor: '#f5f6f8',
                            height: 130,
                            width: 200,
                            float: 'left',
                            margin: '3px 2px 2px 0'
                        }}>
                            <img src={Cfood}
                                 style={{height: 50, width: 80, marginTop: '40px', marginLeft: '30px'}}/>
                            <span style={{
                                color: '#00737f',
                                fontSize: 18,
                                float: 'right',
                                marginTop: '50px',
                                marginRight: '30px'
                            }}> Food </span>
                        </div>
                        <div style={{
                            backgroundColor: '#f5f6f8',
                            height: 130,
                            width: 200,
                            float: 'left',
                            margin: '3px 2px 2px 0'
                        }}>
                            <img src={Ctreats}
                                 style={{height: 70, width: 90, marginTop: '30px', marginLeft: '20px'}}/>
                            <span style={{
                                color: '#00737f',
                                fontSize: 18,
                                float: 'right',
                                marginTop: '50px',
                                marginRight: '20px'
                            }}> Treats </span>
                        </div>
                        <div style={{
                            backgroundColor: '#f5f6f8',
                            height: 130,
                            width: 200,
                            float: 'right',
                            margin: '0 2px 2px 0',
                            borderRadius: '0 0 9px 0'
                        }}>
                            <img src={Clitter}
                                 style={{height: 70, width: 90, marginTop: '30px', marginLeft: '25px'}}/>
                            <span style={{
                                color: '#00737f',
                                fontSize: 18,
                                float: 'right',
                                marginTop: '50px',
                                marginRight: '20px'
                            }}> Litter </span>
                        </div>
                        <div style={{
                            backgroundColor: '#f5f6f8',
                            height: 130,
                            width: 200,
                            float: 'right',
                            margin: '0 2px 2px 0',
                            borderRadius: '0 0 0 9px'
                        }}>
                            <img src={Ctoys}
                                 style={{height: 80, width: 100, marginTop: '20px', marginLeft: '30px'}}/>
                            <span style={{
                                color: '#00737f',
                                fontSize: 18,
                                float: 'right',
                                marginTop: '50px',
                                marginRight: '20px'
                            }}> Toys </span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{width: '100%', height: 230}}>
                <div className="bodyBottom"
                     style={{width: 1250, height: '100%', margin: '0px auto', color: 'white'}}>
                    <h2 style={{color: 'black'}}>Better Price</h2>
                    <img src={Ad1}
                         style={{height: 150, width: 400, marginTop: 15, borderRadius: 10, float: 'left'}}/>
                    <img src={Ad2} style={{
                        height: 150,
                        width: 400,
                        marginTop: 15,
                        marginLeft: 25,
                        borderRadius: 10,
                        float: 'left'
                    }}/>
                    <img src={Ad3}
                         style={{height: 150, width: 400, marginTop: 15, borderRadius: 10, float: 'right'}}/>
                </div>
            </div>

            <div style={{width: '100%', height: 470, backgroundColor: '#f5f6f8'}}>
                <div className="bodyBottom" style={{width: 1250, height: '100%', margin: '0px auto'}}>
                    <h2 style={{color: 'black', paddingTop: 25}}>Shop Aussie Made Products</h2>
                    <div>
                        <div style={{
                            height: 350,
                            width: 188,
                            float: 'left',
                            border: '1px solid #c7ccd6',
                            borderRadius: 6,
                            backgroundColor: 'white',
                            textAlign: 'center'
                        }}>
                            <img src={P1} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 8}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Vetalogica</strong>
                                    Biologically Appropriate Adult Hunter Valley Havest Dry Dog Food, 11kg
                                </div>
                                <div>★★★★☆ 7</div>
                                <strong style={{fontSize: 25, margin: '5px auto'}}>$125.99</strong>
                            </div>
                            <button style={{
                                height: 30,
                                width: 160,
                                backgroundColor: '#efeb63',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: 18
                            }}> + Add to Cart
                            </button>
                        </div>
                        <div style={{
                            height: 350,
                            width: 188,
                            float: 'left',
                            marginLeft: 22,
                            border: '1px solid #c7ccd6',
                            borderRadius: 6,
                            backgroundColor: 'white',
                            textAlign: 'center'
                        }}>
                            <img src={P2} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Bell and Bone</strong>
                                    Carob And Ginger Superfood Dog Treats, 150g
                                </div>
                                <div style={{marginTop: 21}}>
                                    <div>★★★★☆ 9</div>
                                    <strong style={{fontSize: 25, marginTop: '5px auto'}}>$11.9</strong>
                                </div>
                            </div>
                            <button style={{
                                height: 40,
                                width: 170,
                                backgroundColor: '#efeb63',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: 18
                            }}> + Add to Cart
                            </button>
                        </div>

                        <div style={{
                            height: 350,
                            width: 188,
                            float: 'left',
                            marginLeft: 20,
                            border: '1px solid #c7ccd6',
                            borderRadius: 6,
                            backgroundColor: 'white',
                            textAlign: 'center'
                        }}>
                            <img src={P3} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Aussie Dog</strong>
                                    Home Alone, mini
                                </div>
                                <div style={{marginTop: 41}}>
                                    <div>★★★★☆ 10</div>
                                    <strong style={{fontSize: 25, margin: '5px auto'}}>$53.36</strong>
                                </div>
                            </div>
                            <button style={{
                                height: 40,
                                width: 170,
                                backgroundColor: '#efeb63',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: 18
                            }}> + Add to Cart
                            </button>
                        </div>
                        <div style={{
                            height: 350,
                            width: 188,
                            float: 'left',
                            marginLeft: 22,
                            border: '1px solid #c7ccd6',
                            borderRadius: 6,
                            backgroundColor: 'white',
                            textAlign: 'center'
                        }}>
                            <img src={P4} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Petz Park</strong>
                                    Skin Coat, 45scoops
                                </div>
                                <div style={{marginTop: 41}}>
                                    <div>★★★★★ 9</div>
                                    <strong style={{fontSize: 25, margin: '5px auto'}}>$22.36</strong>
                                </div>
                            </div>
                            <button style={{
                                height: 40,
                                width: 170,
                                backgroundColor: '#efeb63',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: 18
                            }}> + Add to Cart
                            </button>
                        </div>
                        <div style={{
                            height: 350,
                            width: 188,
                            float: 'left',
                            marginLeft: 22,
                            border: '1px solid #c7ccd6',
                            borderRadius: 6,
                            backgroundColor: 'white',
                            textAlign: 'center'
                        }}>
                            <img src={P5} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>Healthy Everyday Pets</strong>
                                    Dry Dog Food Adult Athlete, 12kg
                                </div>
                                <div style={{marginTop: 22}}>
                                    <div>★★★★☆ 11</div>
                                    <strong style={{fontSize: 25, margin: '5px auto'}}>$101.24</strong>
                                </div>
                            </div>
                            <button style={{
                                height: 40,
                                width: 170,
                                backgroundColor: '#efeb63',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: 18
                            }}> + Add to Cart
                            </button>
                        </div>
                        <div style={{
                            height: 350,
                            width: 188,
                            float: 'right',
                            marginLeft: 20,
                            border: '1px solid #c7ccd6',
                            borderRadius: 6,
                            backgroundColor: 'white',
                            textAlign: 'center'
                        }}>
                            <img src={P6} style={{height: 140, width: 140}}/>
                            <div style={{float: 'left', textAlign: 'left', padding: 10}}>
                                <div style={{fontSize: 15}}>
                                    <strong>ZamiPet</strong>
                                    Dig Chews Complete Care Multi, 60pack
                                </div>
                                <div style={{marginTop: 22}}>
                                    <div style={{color: 'orange'}}>Leave the first review</div>
                                    <strong style={{fontSize: 25, margin: '5px auto'}}>$35.96</strong>
                                </div>
                            </div>
                            <button style={{
                                height: 40,
                                width: 170,
                                backgroundColor: '#efeb63',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: 18
                            }}> + Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contents