import React from "react";

const Footer = () =>{


    return (
        <div className="Footer">
            <div className="FooterTop"
                 style={{backgroundColor: '#f5f6f8', width: '100%', height: 190, padding: 50}}>
                <div style={{margin: '0px auto', width: 1400, height: '100%'}}>
                    <div style={{float: 'left'}}>
                        <h2> Get the best deals!</h2>
                        <h4>hear first about our exclusive offers and pet care advice.</h4>
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
                    </div>
                    <div style={{float: 'right', height: '100%', marginRight: 30}}>
                        <h2>Let's be friends</h2>
                        <h4>Join our community of pet lovers</h4>
                    </div>
                </div>
            </div>

            <div style={{
                fontSize: 18,
                height: 280,
                backgroundColor: '#00b1b9',
                padding: 50,
                color: 'white'
            }}>
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
                        <div style={{fontSize: 22}}>Help Centre</div>
                        <div>Contact Us</div>
                        <div>Shipping</div>
                        <div>Returns</div>
                        <div>Product Recalls</div>
                        <div>Best Price Guarantee</div>
                        <div>Auto Delivery</div>
                        <div>FAQy</div>
                    </div>
                    <div style={{height: '100%', width: 300, float: 'left'}}>
                        <div style={{fontSize: 22}}>Our Partners</div>
                        <div>ServiceSeeking.com.au</div>
                        <div>Cracka Wines</div>
                        <div>Showpo</div>
                        <div>Harris Farm Markets</div>
                        <div>Supplier Information</div>
                    </div>


                    <div style={{height: '100%', float: 'right'}}>
                        <div style={{fontSize: 22}}>Customer Service</div>
                        <div>Available 7 Days a week</div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: '#00737f', width: '100%', height: 50}}>
                <div style={{width: 1300, margin: '0px auto', paddingTop: 12, color: 'white'}}>© 2011-2022
                    Millell
                    Pty Ltd | ABN: 17 148 151 213 | S02(REL-1.2303.2)
                </div>
            </div>
        </div>
    )
}

export default Footer