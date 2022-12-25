import './App.css';
import {MessageAlert, Profile} from './Profile/Components/Profile';



function App() {
  const inlineStyle = {color:'white', fontSize: "10px", fontWeight: "20px", fontFamily:"sans-serif", 
    backgroundColor: "grey", textAlign: "center", border:"solid 4px yellow"};
  const handleName = e => {
    e.preventDefault();
    alert("Mootez_Referee");
  };
  return (
  <>
    <header style={inlineStyle}>
      <Profile /*fullName ="Mootez_Referee"*/ bio ="I am an enthusiastic geologist engineer. As a pastime, I am a football referee⚽." profession="Geologist engineer ⛏👷‍♂️"> <br />
        <img src="/redAboubaker_Ismail_2022.jpg" alt="Referee" height="400" style={{marginBottom : 10, marginTop : 10}}/>
      </Profile>
      {/*<MyImage> profile picture </MyImage>*/}
      <br />
      <MessageAlert handleName={handleName}></MessageAlert>
    </header>
  </>
  );
}

export default App;