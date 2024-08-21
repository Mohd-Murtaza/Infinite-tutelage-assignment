import React from "react";
import "../styles/tradingAccounts.css"
const TradingAcounts = () => {
  const masterAccounts = [
    {
      title: "Master Account",
      badge: "CTrader",
      hex: "#273728",
      price: "0.00",
      currency: "USD",
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6699 10.124L7.7939 18L6.5 16.7061L14.3751 8.83013H7.43428V7H17.5V17.0657H15.6699V10.124Z"
            fill="#667085"
          />
        </svg>
      )
    },
    {
        title: "Master Account",
        badge: "CTrader",
        hex: "#273728",
        price: "0.00",
        currency: "USD",
        icon: (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6699 10.124L7.7939 18L6.5 16.7061L14.3751 8.83013H7.43428V7H17.5V17.0657H15.6699V10.124Z"
              fill="#667085"
            />
          </svg>
        )
      }
  ];
  return (
    <div className="tradingAccountsMainContainer">
      <span>Tradig Accounts</span>
      {masterAccounts.map((item,ind)=>
        <div className="masterAcountsCard" key={ind}>
            <span>{item.title}</span>
            <div className="masterCardBadgeDiv">
                <span>{item.badge}</span>
                <span>{item.hex}</span>
            </div>
            <div className="masterCardPriceDiv">
                <div className="masterCardPriceInnerDiv">
                    <span>{item.price}</span>
                    <span>{item.currency}</span>
                </div>
                {item.icon}
            </div>
        </div>
      )}
    </div>
  );
};

export default TradingAcounts;
