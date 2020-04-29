import React from 'react'

function Header() {
    return (
        <div className="header">
          <div style={{flex:1,marginLeft:'200px',marginTop:'30px'}}>
            <span className="logo">Logo</span>
          </div>
          <div style={{flex:1,marginTop:'30px'}}>
             <span className="rightTab">Home</span>
             <span className="rightTab">My Profile</span>
             <span className="rightTab">Clients</span>
             <span className="rightTab tabbtn">Get in Touch</span>
          </div>
        </div>
    )
}

export default Header
