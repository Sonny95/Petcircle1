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


   //ㄱ자바스크립트 객체란 무엇인가
     const menuList = [
         {color : 'yellow', name : 'Sale'},
         {color : 'blue', name : 'Dog'},
         {color : 'gray', name : 'Cat'},
         {color : 'lightGreen', name : 'Bird'},
         {color : 'violet', name : 'Other'},
         {color : 'orange', name : 'Brand'},
         {color : 'navy', name : 'Vetips'}
     ];


     const getPage = (param) =>{
         switch (param) {
             case 0 :
            return <SalePage/>
             case 1 :
                 return <DogPage/>
             case 2 :
                 return <CatPage/>

         }
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
                     style={{backgroundColor: '#00b1b9', width: '100%', height: 84, color: 'white',flot:'left'}}>
                    <img src="https://www.petcircle.com.au/petcircle-assets/images/PC-Logo.svg"
                         style={{height: 90, width: 90, marginTop: -10,marginLeft:300}}/>
                    <input type="text" style={{width:750, margin:'-10px 0px 0px 25px', height:30, border:'none', borderRadius:7}}/>
                </div>

                <div className="Head_Bottom" style={{
                    backgroundColor: '#007483',
                    width: '100%',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    <div style={{width : 190 * menuList.length,  height : 35, margin : '0px auto', fontSize:20}}>
                    {menuList.map((res, index) => {
                        let bgColour = 'transparent'
                        if(index === 0 ) {
                            bgColour = res.color


                        }
                        return <div className={'menu'} style={{width : 190, height : 35,float:'left', cursor : 'pointer',
                            backgroundColor: activeKey === index ? res.color : ''}} onClick={()=>setActiveKey(index)}>
                            <div style={{backgroundColor:bgColour}}>{res.name}</div></div>
                    })}


                    </div>
                </div>
                {getPage(activeKey)}
            </div>
            <div>
                <img src={HeadImg} style={{width:'100%'}}/>
            </div>

            <div className="Body" style={{paddingLeft:300,}}>
                <h2>Better Range</h2>
                <div>
                <div style={{backgroundColor:'#00b1b9', height:70, width:400, marginTop:30 }} >
                    <img src={Dog1} style={{width:150,height:100,marginTop:-30, marginLeft:30}}/>
                    Shop Dog >
                </div>
                <div style={{backgroundColor:'#00b1b9', height:70, width:400,marginTop:100}} >
                    <img src={Cat1} style={{width:150,height:100,marginTop:-30, marginLeft:30}}/>
                    Shop Cat >
                </div>
                </div>

            </div>
        </>
    )
}



export default App;
