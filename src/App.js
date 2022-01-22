import React, {useState} from 'react';
import './resources/css/header.css';
import SalePage from "./component/contents/SalePage";
import DogPage from "./component/contents/DogPage"
import CatPage from "./component/contents/CatPage"
import HeadImg from './resources/Adimg.jpg'
import Dog1 from './resources/dog-1.png'
import Cat1 from './resources/cat-1.png'

const App = () => {


    const [activeKey, setActiveKey] = useState(20391847);

    const [text, setText] = useState('');
    const [productlist, setProductList] = useState([]);


    //ㄱ자바스크립트 객체란 무엇인가
    const menuList = [
        {color: 'yellow', name: 'Sale'},
        {color: 'blue', name: 'Dog'},
        {color: 'gray', name: 'Cat'},
        {color: 'lightGreen', name: 'Bird'},
        {color: 'violet', name: 'Other'},
        {color: 'orange', name: 'Brand'},
        {color: 'navy', name: 'Vetips'}
    ];


    const product = ['apple', 'alergy', 'desk', 'drill', 'game', 'goal', 'table', 'tea']
    const getPage = (param) => {
        switch (param) {
            case 0 :
                return <SalePage/>
            case 1 :
                return <DogPage/>
            case 2 :
                return <CatPage/>

        }
    }


    const changeText = (e) => {
        setText(e.target.value)
        const result = product.filter((value) => value.includes(e.target.value));
        setProductList(result);
    }

    return (<>
            <div className="Head">
                <div style={{
                    backgroundColor: '#414141',
                    width: '100%',
                    height: 30,
                    color: 'white',
                    textAlign: 'center',
                    paddingTop: 4
                }}>
                    Free metro shipping on orders $49+
                </div>

                <div className="Head_Top"
                     style={{backgroundColor: '#00b1b9', width: '100%', height: 80, color: 'white'}}>
                    <div style={{maxWidth: 1500, height: '100%', margin: '0px auto'}}>

                        <img src="https://www.petcircle.com.au/petcircle-assets/images/PC-Logo.svg"
                             style={{height: 90, width: 90, marginTop: -12, float: 'left'}}/>
                       <div style={{width : 'calc(100% - 430px)', float: 'left', marginLeft: 20}}>
                           <input placeholder={'search for .....'} value={text} onChange={changeText} type="text" style={{
                            height: 28,
                            marginTop: 25,
                            width: '100%'
                        }}/>
                           {text.length !== 0 && <div style={{backgroundColor: 'white', width: 'calc(100% + 6.5px)', color: 'black'}}>
                               {productlist.map(value => <div>{value}</div>)}
                           </div>}
                       </div>

                        <div style={{width: 300, height: '100%', float: 'right'}}>
                            원하는걸 넣으면?!?!?
                        </div>

                    </div>

                </div>

                <div className="Head_Bottom" style={{
                    backgroundColor: '#007483',
                    width: '100%',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    <div style={{width: 190 * menuList.length, height: 35, margin: '0px auto', fontSize: 20}}>
                        {menuList.map((res, index) => {
                            let bgColour = 'transparent'
                            if (index === 0) {
                                bgColour = res.color


                            }
                            return <div className={'menu'} style={{
                                width: 190, height: 35, float: 'left', cursor: 'pointer',
                                backgroundColor: activeKey === index ? res.color : ''
                            }} onClick={() => setActiveKey(index)}>
                                <div style={{backgroundColor: bgColour}}>{res.name}</div>
                            </div>
                        })}


                    </div>
                </div>
                {getPage(activeKey)}
            </div>
            <div>
                <img src={HeadImg} style={{width: '100%'}}/>
            </div>

            <div className="Body" style={{paddingLeft: 300,}}>
                <h2>Better Range</h2>
                <div>
                    <div style={{backgroundColor: '#00b1b9', height: 70, width: 400, marginTop: 30}}>
                        <img src={Dog1} style={{width: 150, height: 90, marginTop: -20, marginLeft: 30}}/>
                        Shop Dog
                    </div>
                    <div style={{backgroundColor: '#00b1b9', height: 70, width: 400, marginTop: 100}}>
                        <img src={Cat1} style={{width: 150, height: 92, marginTop: -22, marginLeft: 30}}/>
                        Shop Cat
                    </div>
                </div>

            </div>
            <div className="Footer">
                <div className="FooterTop" style={{backgroundColor: '#f5f6f8', width: '100%', height: 200}}>

                    <div style={{paddingLeft: 300}}>
                        <h2> Get the best deals!</h2>
                        <h4>hear first about our exclusive offers and pet care advice.</h4>
                        <div style={{float: 'left'}}>
                            <input type="text" placeholder="Enter your email address" style={{
                                width: 500,
                                height: 41,
                                border: '1px solid #c7ccd6',
                                borderRadius: 6,
                                boxShadow: 'inset 0 2px 2px rgb(0 0 0 / 15%)'
                            }}/>
                            <button style={{
                                backgroundColor: '#01abb8',
                                height: 43,
                                width: 150,
                                marginLeft: 10,
                                border: 'none',
                                borderRadius: 6,
                                fontColor: '#fff'
                            }}>
                                Sign me up!
                            </button>
                            <div style={{float: 'right'}}>
                                <h1>Let's be friends</h1>
                                <h4>Join our community of pet lovers</h4>
                            </div>

                        </div>

                    </div>
                </div>

                {/*footer*/}
                <div style={{fontSize: 18, height: 390, backgroundColor: '#00b1b9', padding: 50, color: 'white'}}>
                    <div style={{margin: '0px auto', width: 1300, height: '100%'}}>
                        <div style={{height: '100%', width: 300, float: 'left'}}>
                            <div style={{fontSize: 22}}>Company</div>
                            <div>About US</div>
                            <div>Community</div>
                            <div>Media</div>
                            <div>Careers</div>
                            <div>Security and Privacy</div>
                            <div>Terms of use</div>
                        </div>

                        <div style={{height: '100%', width: 300, float: 'left'}}>
                            <div style={{fontSize: 22}}>Company</div>
                            <div>About US</div>
                            <div>Community</div>
                            <div>Media</div>
                            <div>Careers</div>
                            <div>Security and Privacy</div>
                            <div>Terms of use</div>
                        </div>
                        <div style={{height: '100%', width: 300, float: 'left'}}>
                            <div style={{fontSize: 22}}>Company</div>
                            <div>About US</div>
                            <div>Community</div>
                            <div>Media</div>
                            <div>Careers</div>
                            <div>Security and Privacy</div>
                            <div>Terms of use</div>
                        </div>


                        <div style={{height: '100%', float: 'right'}}>
                            <div style={{fontSize: 22}}>Customer Service</div>
                            <div>Available 7 Days a week</div>
                            <div>Community</div>
                        </div>


                    </div>

                </div>
                <div style={{backgroundColor: '#00737f', width: '100%', height: 50}}>
                    <div style={{width: 1300, margin: '0px auto', paddingTop: 12, color: 'white'}}>© 2011-2022 Millell
                        Pty Ltd | ABN: 17 148 151 213 | S02(REL-1.2303.2)
                    </div>

                </div>
            </div>
            {/*icon*/}
            <div style={{position: 'fixed', width: 100, height: 80, bottom: 0, left: 0, backgroundColor: 'white'}}>
                4.7 google
            </div>
        </>
    )
}


export default App;
