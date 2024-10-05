import React, { useState } from "react";
import "./main.scss";

function Payment({logo, brandName, brandColor}) {
    const tabs = ["Card", "UPI", "Wallet"]
    const sites = [
        {
            title: 'Paytm wallet',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Paytm_logo.jpg'
        },
        {
            title: 'Phone Pe',
            image: 'https://www.phonepe.com/webstatic/7888/static/2a45180808d78ef097db0118995d3f7c/54610/photo.png'
        },
        {
            title: 'Google Pay',
            image: 'https://i.pinimg.com/564x/8d/ec/e1/8dece15cc40aaf66ed47f6591b639d06.jpg'
        },
    ]
    const [activeWallet, setActiveWallet] = useState(null);
    const [activeTab, setActiveTab] = useState(tabs[0])

    const color = !brandColor ? "#FFA500" : brandColor;
    const title = !brandName ? "Unknown" : brandName;
    const image = !logo ? "https://picsum.photos/800" : logo;
    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
      }
    
    const rgbToHex = hexToRgb(color);
  return (
    <div className="container">
      <div className="child">
        <div className="pos">
          <div className="context">
            <h1>Complete your payment</h1>
            <h3>You are paying to {title}</h3>
          </div>

          <div className="photos">
            <img src={image} alt="logo" />
          </div>
        </div>

    <div className="content">
            <h2>Payment Method</h2>
            <p>Choose your preferred payment method</p>
        <div className="payment">
            <div className="tabu" style={{background: `${color}25`}}>
              {tabs.map((tab) => (
                <div
                key={tab}
                className={`tabs ${activeTab === tab? "active" : ""}`}
                style={activeTab=== tab ? {color: `${color}`} : {color: `${color}90`}}
                onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
              </div>
            
            <div className="okay">
           {activeTab === "Card" && (
            <>
            <input style={{'--dynamic-color': color}} type="text" className="input" placeholder="3843 3201 4421 XXXX" />
            <input style={{'--dynamic-color': color}} type="number" maxLength={3} max={3} className="input" placeholder="CVV" />
            <input style={{'--dynamic-color': color}} type="date" className="input" placeholder="DD/MM/YYYY" />
           </>
        )}
                   {activeTab === "UPI" && (
            <>
            <input style={{'--dynamic-color': color}} type="text" className="input" placeholder="adarsh@okhdfcbank" />
           </>
        )}
                   {activeTab === "Wallet" && (
            sites.map((items) => (
            <div className={`${activeWallet===items.title ? "active" : ""} button`} onClick={() => setActiveWallet(items.title)} style={{'--dynamic-color': color}}>
                <img src={items.image} alt="logo" />
                <p style={activeWallet===items.title ? {fontWeight: '600'} : {}}>{items.title}</p>
            </div>
            ))
        )}
            <button className="paynow" style={{'--dynamic-color-rgb': `${rgbToHex}`, '--dynamic-color': `${color}`}}>Pay now</button>
            </div>
        </div>
    </div>

        <div className="last" style={{'--dynamic-color-rgb': `${rgbToHex}`, '--dynamic-color': `${color}`}}>
          <h2>Secured by Voltsec</h2>
        </div>
      </div>
    </div>
  );
}

export default Payment;
