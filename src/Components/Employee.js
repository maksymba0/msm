import { useEffect, useState } from "react";
import "./Employee.css"
import DefaultAvatar from "./default_avatar.jpg"
function Employee() 
{
    const [userData,setUserData] = useState([]);
    const [permissionData,setPermissionData] = useState([]);
    useEffect(() => 
    {
        
    const getData = async () => 
    {
        await fetch("http://localhost:8080/getusers",{method:'GET'}).
        then((response) => response.json()).then((json)=>
            {
                console.log(json);
                setUserData(json);
            });  
        await fetch("http://localhost:8080/getuserpermissions",{method:'GET'}).
        then((response) => response.json()).then((json)=>
            {
                console.log(json);
                setPermissionData(json);
            }); 
    };

    // Call getData function to fetch data
    getData();
     
    // Since this is a functional component, it should return JSX to render
    
    },[])
  
    return (
         
<>  
<table className="EmployeePanel" style={{
height:'auto',
width:'auto',
borderColor:'red',
marginTop:'80px',
position:'relative'}}>
      <thead>
        <tr style={{fontSize:'16px'}}>
          <th style={{padding:'0px 20px',}}>ID</th>
          <th style={{padding:'0px 30px'}}>Image</th>
          <th style={{padding:'0px 150px',}}>Username</th>
          <th style={{padding:'0px 0px',}}>Password</th>
          <th style={{padding:'0px 30px',}}>SeeingEmployees</th>
          <th style={{padding:'0px 30px',}}>SeeingProducts</th>
          <th style={{padding:'0px 30px',}}>SeeingReports</th>
          <th style={{padding:'0px 30px',}}>EditProducts</th>
          <th style={{padding:'0px 30px',}}>Whitelisted</th>
        
        </tr>
      </thead>
      {userData.length? (<tbody> 
      {userData.map((user) => (
        <tr style={{fontFamily:'monospace',fontWeight:'lighter',fontSize:'25px'}}>
                <td style={{border:'3px dashed #000',padding:'0px 20px',}}>{user.id}</td>
                <td style={{width:'100px',height:'100px',border:'3px solid #000'}}><img src={DefaultAvatar} style={{imageRendering:'auto',width:'100px',height:'100px'}}/></td>
                <td style={{border:'3px solid #000',padding:'0px 70px',}}>{user.username}</td>
                <td style={{border:'3px solid #000',padding:'0px 20px',}}>{user.password}</td>
                <td style={{backgroundColor: user.permissions.allowedToAccessToEmployees ? 'green' : '',border:'3px solid #000',textAlign:'center',padding:'0px 20px',}}>{user.permissions.allowedToAccessToEmployees ? "Yes":"No"}</td>
                <td style={{backgroundColor: user.permissions.allowedToAccessToProductsborder? 'green' : '',border:'3px solid #000',textAlign:'center',padding:'0px 20px',}}>{user.permissions.allowedToAccessToProducts ? "Yes":"No"}</td>
                <td style={{backgroundColor: user.permissions.allowedToAccessToReports? 'green' : '',border:'3px solid #000',textAlign:'center',padding:'0px 20px',}}>{user.permissions.allowedToAccessToReports ? "Yes":"No"}</td>
                <td style={{backgroundColor: user.permissions.allowedToEditProducts? 'green' : '',border:'3px solid #000',textAlign:'center',padding:'0px 20px',}}>{user.permissions.allowedToEditProducts ? "Yes":"No"}</td>
                <td style={{backgroundColor: user.permissions.whiteListed? 'green' : '',border:'3px solid #000',textAlign:'center',padding:'0px 20px',}}>{user.permissions.whiteListed ? "Yes":"No"}</td>
                </tr>
            ))}
      </tbody> ) : (
      <div style={{textAlign:'center'}}> 
        <label style={{fontSize:'20px',textShadow:'2px 3px 4px red',color:'white'}}>Error : Not connected to Database</label></div>)}
    </table> 
</>        
    ); // or any JSX you want to render while waiting for the data

}

export default Employee;