function Nav() {
    return (
        <div style={{backgroundImage:"url(img7.jpg)",backgroundSize:"cover",height:"100vh",width:"210vh",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{textAlign:"center",color:"royalblue"}}>Jyothi Engineering College</h1>
            <div>
            <a href="/SignUp"><button style={{margin:"0 10px"}}>SignUp</button></a>
            <a href="/Login">< button style={{margin:"0 10px"}}>login</button></a>
            <a href="/About"><button style={{margin:"0 10px"}}>about us</button></a>
            <a href="/ContactDetails"><button style={{margin:"0 10px"}}>contact details</button></a>
           
            </div>
        </div>
    );
}

export default Nav;
