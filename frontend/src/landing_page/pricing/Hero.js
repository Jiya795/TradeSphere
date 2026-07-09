import React from 'react';
function Hero() {
    return (
        <div className='container '>
            <div className='row border-bottom p-5 mt-5 text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted fs-5 mt-3'>Free equity investments and flat <i class="fa fa-inr"></i>20 traday and F&O trades</h3>
                <div className='col-4 p-5 mt-5'>
                    <img src='Media\pricing0.svg' />
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted text-center'>All equity delivery investments (NSE, BSE),
                        are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5 mt-5'>
                    <img src='media/intradayTrades.svg' />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted text-center'>Flat Rs. 20 or 0.03% (whichever is lower)
                        per executed order on intraday trades
                        across equity, currency, and commodity
                        trades.</p>
                </div>
                <div className='col-4 p-5 mt-5'>
                    <img src='Media\pricing0.svg' />
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted text-center'>All direct mutual fund investments are
                        absolutely free — ₹ 0 commission.</p>
                </div>



            </div>

        </div>
    );
}

export default Hero;