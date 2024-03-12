import React from 'react' 

function Logo()
{
    return (
       <a href="/" style={{ 
       marginLeft:'20px',
       marginTop:'10px',
       textDecorationLine:'none',
       border:'2px'}}>
       <label 
       style={{ 
       color:'white',  
       fontFamily:'Eras ITC',
       fontWeight: 'normal',
       fontSize: '40px' }}>
       Max Shop Manager</label></a>
    );
}

export default Logo;