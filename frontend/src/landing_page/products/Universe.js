import React from 'react';
function Universe() {
    return ( 
       <div className='container mt-5'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms.</p>
            <div className='col-4 p-3 mt-3'>
                <img src='MediasmallcaseLogo.png'/>
                <p className='text-small text-muted mt-2'>Thematic investment platform</p>
            </div>
            <div className='col-4 p-3 mt-3'>
                <img src='MediastreakLogo.png'style={{width:"120px"}}/>
                <p className='text-small text-muted mt-2'>Algo & strategy platform</p>
            </div>
            <div className='col-4 p-3 mt-3'>
                <img src='MediasensibullLogo.svg'/>
                <p className='text-small text-muted mt-2'>Options trading platform</p>
            </div>

             <div className='col-4 p-3 mt-3'>
                <img src='MediazerodhaFundhouse.png'style={{width:"160px"}}/>
                <p className='text-small text-muted mt-2'>Asset management</p>
            </div>
            <div className='col-4 p-3 mt-3'>
                <img src='MediagoldenpiLogo.png'/>
                <p className='text-small text-muted mt-2'>Bonds trading platform</p>  
            </div>
            <div className='col-4 p-3 mt-3'>
                <img src='MediadittoLogo.png' style={{width:"120px"}}/>
                <p className='text-small text-muted mt-2'>Insurance</p>
            </div>
            

        </div>
        <div className='text-center'><button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup now</button></div>
       
       </div>
     );
}

export default Universe;