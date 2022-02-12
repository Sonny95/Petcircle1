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
                            <Route path="/cat" element={<CatPage />} />
                            <Route path="/signUp" element={<SignUp />} />
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
                        boxShadow: '0 2px 2px outset rgb(0 0 0 / 15%)'
                    }}>
                        4.7 ★★★★★ Google Customer reviews

                </div>
            </div>

        </>
    )
}


export default App;
