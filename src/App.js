import React, {useState} from 'react';
import './resources/css/header.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import CatPage from "./component/contents/exam/CatPage";
import DogPage from "./component/contents/exam/DogPage";
import Contents from "./component/layout/Contents";
import SignUp from "./component/contents/SignUp";
import Brands from "./component/contents/Brands";
import Tips from "./component/contents/Tips";
import LoginPage from "./component/contents/LoginPage";
import BirdPage from "./component/contents/exam/BirdPage";
import OtherPetsPage from "./component/contents/exam/OtherPetsPage";
import { Space } from 'antd';
import {CommentOutlined} from '@ant-design/icons';

const App = () => {
    const [activeKey, setActiveKey] = useState(null);
    const [closeKey, setCloseKey] = useState(false);

    const getKey = (e) => {
        setActiveKey(e)
    }


    return (
        <>
            <div className="Head">

                    <BrowserRouter>
                        <Header getActiveKey={getKey} closeKey={closeKey}/>
                        <div onClick={() => setCloseKey(!closeKey)} style={{opacity: activeKey === null ? 1 : 0.3}}>

                        <Routes>
                            <Route path="/" element={<Contents/>} />
                            <Route path="/dog/:postId" element={<DogPage />} />
                            <Route path="/cat/:postId" element={<CatPage />} />
                            <Route path="/bird/:postId" element={<BirdPage />} />
                            <Route path="/other/:postId" element={<OtherPetsPage />} />
                            <Route path="/signUp" element={<SignUp />} />
                            <Route path="/LoginPage" element={<LoginPage />} />
                            <Route path="/brands" element={<Brands />} />
                            <Route path="/tips" element={<Tips />} />
                        </Routes>

                        </div>
                    </BrowserRouter>
                    <Footer/>
                    <div style={{
                        position: 'fixed',
                        width: 165,
                        height: 54,
                        bottom: 0,
                        left: 0,
                        backgroundColor: '#f5f5f5',
                        border: '0.5px solid #c7ccd6',
                        padding:'0px 10px',
                        cursor:'pointer'
                    }}>
                        <div style={{color:'orange'}}>4.7 ★★★★★</div>
                        <div style={{fontWeight:500,fontSize:'13px',marginTop:-5}}>Google</div>
                        <div style={{fontWeight:400,fontSize:'13px',marginTop:-5}}>Customer reviews</div>

                </div>
                <div style={{
                    position: 'fixed',
                    width: 100,
                    height: 40,
                    bottom: 20,
                    right: 20,
                    backgroundColor: '#4186c6',
                    border: 'none',
                    padding:'0px 10px',
                    borderRadius:30,
                    cursor:'pointer'
                }}>

                    <div style={{color:'white',fontSize:20,margin:'0px 20px'}}>  Chat</div>


                </div>
            </div>

        </>
    )
}


export default App;
