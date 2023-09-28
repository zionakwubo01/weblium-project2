import styled from "styled-components"
import { NavLink } from "react-router-dom";
import img from "../assets/IPTV-Provider.png"
import img2 from "../assets/Car Parts Seller.png"
import img3 from "../assets/Game Development Studio.png"
import img4 from "../assets/Car Rental.png"
import img5 from "../assets/Roofing Company.png"
import img6 from "../assets/General Business.png"

const Temp = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Top>
                        <H1>300+ ready-to-use templates</H1>
                        <p>Start creating your website by choosing one of these impressive Weblium templates.</p>
                        <NavHolder>
                            <Nav>Business</Nav>
                            <Nav1>Business Card</Nav1>
                            <Nav2>Online Store</Nav2>
                            <Nav>Landing</Nav>
                            <Nav>Portfolio</Nav>
                            <Nav>Event</Nav>
                        </NavHolder>
                    </Top>
   
                    <CardHolder>
                        <Card1>
                            <Text>IPTV-Provider</Text>
                            <Image>
                                <Img src= {img}/>
                                <Black>
                                    <Live>
                                        Live Demo
                                    </Live>
                                </Black>                               
                            </Image>
                            <Buttons>
                                <Button>Try this template</Button>
                                <Live2>Live Demo</Live2>
                            </Buttons>                            
                        </Card1>
                        <Card1>
                            <Text>Car Parts Seller</Text>
                            <Image>
                                <Img src= {img2}/>
                                <Black>
                                    <Live>
                                        Live Demo
                                    </Live>
                                </Black>                               
                            </Image>
                            <Buttons>
                                <Button>Try this template</Button>
                                <Live2>Live Demo</Live2>
                            </Buttons>                             
                        </Card1>
                        <Card1>
                            <Text>Game Development Studio</Text>
                            <Image>
                                <Img src= {img3}/>
                                <Black>
                                    <Live>
                                        Live Demo
                                    </Live>
                                </Black>                               
                            </Image>
                            <Buttons>
                                <Button>Try this template</Button>
                                <Live2>Live Demo</Live2>
                            </Buttons>                            
                        </Card1>
                        <Card1>
                            <Text>Car Rental</Text>
                            <Image>
                                <Img src= {img4}/>
                                <Black>
                                    <Live>
                                        Live Demo
                                    </Live>
                                </Black>                               
                            </Image>
                            <Buttons>
                                <Button>Try this template</Button>
                                <Live2>Live Demo</Live2>
                            </Buttons>                            
                        </Card1>
                        <Card1>
                            <Text>Roofing Company</Text>
                            <Image>
                                <Img src= {img5}/>
                                <Black>
                                    <Live>
                                        Live Demo
                                    </Live>
                                </Black>                               
                            </Image>
                            <Buttons>
                                <Button>Try this template</Button>
                                <Live2>Live Demo</Live2>
                            </Buttons>                           
                        </Card1>
                        <Card1>
                            <Text>General Business</Text>
                            <Image>
                                <Img src= {img6}/>
                                <Black>
                                    <Live>
                                        Live Demo
                                    </Live>
                                </Black>                               
                            </Image>
                            <Buttons>
                                <Button>Try this template</Button>
                                <Live2>Live Demo</Live2>
                            </Buttons>                            
                        </Card1>
                    </CardHolder>
                    <More>
                        More Template
                    </More>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Temp;
const Live2 = styled.button`
display: none;
    @media screen and (max-width: 500px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 16px;
    color: #1348c2;
    background-color: white;
    border: 2px solid #1348c2;
    border-radius: 10px;
    width: 150px;
    height: 45px;
    }
`
const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`

const More = styled.button`
    border: 3px solid #1348c2;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #1348c2;
    background-color: white;
    width: 250px;
    height: 60px;
    transition: all 400ms;
    cursor: pointer;

    &:hover{
        background-color: #1348c2;
        color: white;
    border: 3px solid white;

    }

    @media screen and (max-width: 320px){
        font-size: 18px;
        font-weight: 400;
        width: 200px;
        height: 50px;
    }
`

const Live = styled.div`
    color: white;
    background-color: #1348c2;
    font-size: 20px;
    font-weight: 600;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 450ms;

&:hover{
    background-color: white;
    color: black;
}
`

const Black = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
width: 100%;
height: 95%;
position: absolute;
top: 0px;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
transition: all 50ms;

&:hover{
    opacity: 1;
}

@media screen and (max-width: 320px){
    display: none;
}
/* z-index: 2; */

`

const Img = styled.img`
width: 100%;

`

const Text = styled.div`
text-align: center;
color:#646e82;
font-size: 30px;
font-weight: bolder;

@media screen and (max-width: 320px){
    font-size: 25px;
    font-weight: bold;
}
`

const Image = styled.div`
width: 100%;
object-fit: contain;
position: relative;
cursor: pointer;
`

const Button = styled.button`
width: 200px;
height: 50px;
background-color: #1348c2;
border-radius: 5px;
color: white;
font-size: 18px;
font-weight: 600;
border: none;

@media screen and (max-width: 320px){
    width: 150px;
    height: 45px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    margin-right: 20px;
}
`

const Card1 = styled.div`
width: 500px;
height: 410px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
/* flex-wrap: wrap; */
margin-bottom: 50px;

@media screen and (max-width:320px){
    width: 100%;
    height: 320px;
    justify-content: space-around;
}
`

const Line = styled.hr`
width: 100%;
background-color: gray;
border: none;
height: 1px;
`
const H1 = styled.div`
     font-size: 60px;
    font-weight: 600;
    color: #1348c2;

    @media screen and (max-width:320px){
        font-size: 30px;
        font-weight: 700;
    }
`
const Nav2 = styled.div`
width: 150px;
height: 50px;
color: silver;
font-size: 20px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 320px){
    font-size: 15px;
    // background-color: blue;
    width: 100px;
}
`
const Nav1 = styled.div`
width: 150px;
height: 50px;
color: silver;
font-size: 20px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 320px){
    font-size: 15px;
    // background-color: green;
    margin-right: 50px;
    width: 500px;
}
`
const Nav = styled.div`
width: 150px;
height: 50px;
color: silver;
font-size: 20px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 320px){
    font-size: 15px;
    // background-color: aquamarine;
    width: 100px;
}
`

const NavHolder = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 320px){
    width: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar{
        display: none;
    }
}
`

const CardHolder = styled.div`
width:100%;
min-height: 300px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`

const Top = styled.div`
width: 60%;
/* text-align: center; */
border-bottom: 1px solid gray;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    color: #646e82;
    font-size: 23px;

    @media screen and (max-width: 320px){
        font-size: 18px;
        font-weight: 600;
    }
}

@media screen and (max-width:320px){
    width: 100%;
    text-align: center;
}
`

const Wrapper = styled.div`
width: 90%;
min-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 30px;
z-index:3;
`