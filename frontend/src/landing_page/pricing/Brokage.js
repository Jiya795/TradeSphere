import React from 'react';
function Brokage() {
    return ( 
        <div className='container'>
            <div className='row p-6 mt-5 border-top'>
                <div className='col-8'>
                    <h3 className='text-center mt-5' style={{color:"rgb(13, 110, 253)"}}>Brokage Calculator</h3>
                    <ul className='text-muted fs-7 mt-2'>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>


                </div>
                <div className='col-4'>
                    <h3 className='text-center mt-5'style={{color:"rgb(13, 110, 253)"}}>List of charges</h3>

                </div>


            </div>

        </div>
     );
}

export default Brokage;