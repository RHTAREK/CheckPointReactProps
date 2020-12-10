import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile'
import propTypes from'prop-types'
function App() {
const handlerName =(name)=>alert(`${name}`)
  return (
    <div className="App" style={{backgroundColor:'white'}}>
     <Profile FullName="Tarek Rhouma" Profession="..." Bio="Something" HandlerName={handlerName}>
      <img src={logo} alt="logo"/>
     </Profile>
    </div>
  );
}

export default App;
const {func, object, string,} = propTypes;
Profile.propTypes={
  FullName:string.isRequired,
  Profession:string,
  Bio:string,
  HandlerName:func,
}
