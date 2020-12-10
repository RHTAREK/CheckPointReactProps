import React from 'react' 

function Profile (props) {const{FullName , Profession ,Bio, HandlerName,children}=props
return(
<>
<h1 style={{color:'red'}}>{FullName}</h1>
<h2 style ={{color:'blue'}}>{Profession}</h2>
<p style = {{color:'yellow'}}>{Bio}</p>
<span style={{backgroundColor:"purple"}}>{children}</span>
<button style={{color:'orange'}} onClick = { ()=> HandlerName(FullName)}>Click Me ! :D </button>
</>
)





}export default Profile
Profile.defaultProps = {
    FullName : 'there is no name here ',
    Profession: 'profession ...?',
    Bio : 'nothing\'s here ',
    children:'^_^',
}