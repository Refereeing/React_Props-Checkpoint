import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {
    const tryStyle={color:"white", fontFamily:"sans-serif", fontSize:"20px"};
    return (
        <>
            <h2 style={tryStyle}>Full Name : {props.fullName}</h2>
            <p style={tryStyle}>Bio : {props.bio}</p>
            <h2 style={tryStyle}>Profession : {props.profession}</h2>
            <div style={{color:"white", fontFamily:"sans-serif", fontSize:"20px"}}>This is my profile picture: {props.children}</div>
        </>
    )
};

//const MyImage = ({children}) => {
    //return (
        //<>
            //<h1 style={{color:"white", fontFamily:"sans-serif", fontSize:"20px"}}>This is my {children} : </h1>
            //<img src="/profileAboubaker_Ismail_2022.jpg" alt="Referee" height="370px" style={{marginBottom : 20, marginTop : 10, borderRadius:"8px", border:"1px solid black" }}/>
        //</>
    //)
//};

const MessageAlert = ({handleName}) => {
    const buttonStyle = {height : 40, width: 150, fontSize: 20, fontWeight: 400, color: "red", marginBottom : 20, fontFamily:"sans-serif", borderRadius:"10px", backgroundColor:"yellow", border:"1px solid black"};
    return (
        <button style={buttonStyle} onClick={e => handleName(e)}>click here</button>
    )
};

Profile.defaultProps = {
    fullName: "Mootez_Referee",
    bio: "I am an enthusiastic geologist engineer. As a pastime, I am a football referee⚽.",
    profession: "Geologist engineer ⛏👷‍♂️",
    children: "imagE"

};
//MyImage.defaultProps = {
    //children: "imagE"
//};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.string
};
//MyImage.propTypes = {
    //children: PropTypes.string
//};

export {Profile, MessageAlert};