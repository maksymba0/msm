

import { useState } from 'react';
import './Auth.css'

function Auth({LogInProp})
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isActive,setisActive] = useState(true);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const LogIn = async () => {
        setisActive(false);
    await sleep(2000); // Wait for 3 seconds
    // After 3 seconds, continue with your logic
    // Send a request to the backend
    // Sets the LoggedInState to true
    LogInProp(true);
    setisActive(true);
    };
     

    return (
    <div className="AuthBox">

        <label style={{position:'absolute',marginTop:'-200px',fontSize:'28px',fontFamily:'Eras ITC'}}>MaxShopManager</label>


        <label style={{padding:'10px'}}>Please Log In</label>

        <label style={{fontSize:'14px'}}> E-mail or Phone Number </label>
        <input value={username}
        onInput={event => 
        {     
            const trimmedValue = event.target.value.trim(); // Trim whitespace from input value
            if(trimmedValue !== '')
            {
                
                setUsername(trimmedValue);
            }else
            {
                setUsername('');
            }
        }} 
        type='field'></input>
        <label style={{fontSize:'14px'}}> Password </label>
        <input value={password} onInput={event => 
        {     
            const trimmedValue = event.target.value.trim(); // Trim whitespace from input value
            if(trimmedValue !== '')
            {
                 
                setPassword(trimmedValue);
            }else
            {
                setPassword('');
            }
        }} 
        type='password'></input>
        <input disabled={!isActive} onClick={LogIn} type='button' value='Log In'/>
    </div>
    );
}
export default Auth;