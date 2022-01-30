import Header from "../component/layout/Headser";
import Contents from "../component/layout/Contents";
import Footer from "../component/layout/Footer";
import React, {useState} from "react";

const LandingPage = () =>{
    const [activeKey, setActiveKey] = useState(null);
    const [closeKey, setCloseKey] = useState(false);

    const getKey = (e) => {
        setActiveKey(e)
    }

    return (
        <div className="Head">
            <Header getActiveKey={getKey} closeKey={closeKey}/>
            <div onClick={() => setCloseKey(!closeKey)} style={{opacity: activeKey === null ? 1 : 0.3}}>
                <Contents/>
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
        </div>
    )
}
export default LandingPage