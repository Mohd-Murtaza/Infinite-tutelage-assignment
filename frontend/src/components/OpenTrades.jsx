import React from 'react'
import "../styles/openTrades.css"
const OpenTrades = () => {
    const openTrades=[
        {
            tradeName:"GBPUSD",
            badge:"Long",
            text:"0.12",
            movement:"+56.00",
            currency:"USD",
        },
        {
            tradeName:"USDJPY",
            badge:"Long",
            text:"0.52",
            movement:"-0.09",
            currency:"USD",
        },
        {
            tradeName:"EURUSD",
            badge:"Short",
            text:"0.34",
            movement:"-1.09",
            currency:"USD",
        }
    ]
  return (
    <div className='opernTradesMainContainer'>
      <span>Open Trades</span>
      {openTrades.map((item,ind)=>
        <div className='tradesCard' key={ind}>
            <div className='tradeNameAndTextDiv'>
                <div className='tradeNameAndBadgeDiv'>
                    <span>{item.tradeName}</span>
                    <span className={item.badge=="Long"?"Long":"Short"}>{item.badge}</span>
                </div>
                <span>{item.text}</span>
            </div>
            <div className='tradePriceMovementDiv'>
                <span className={item.movement[0]=="+"?"increment":"decrement"}>{item.movement}</span>
                <span>{item.currency}</span>
            </div>
        </div>
      )}
    </div>
  )
}

export default OpenTrades
