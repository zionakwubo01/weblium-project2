import styled from "styled-components";
import React from "react";
import {TfiFacebook} from "react-icons/tfi"
import {TiSocialLinkedin} from "react-icons/ti"
import {TiSocialTwitter} from "react-icons/ti"
import {TiSocialYoutube} from "react-icons/ti"
import {SlSocialInstagram} from "react-icons/sl"

const Footer = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Top>
                        <Logo>
                            {/* <Img src = {img}/> */}
                        </Logo>
                        <Email>
                            <h1>Email</h1>
                            <p>support@webilum.com</p>
                        </Email>
                        <Social>
                            <h1>Follow us:</h1>
                            <IconWrapper>
                            <Icon>
                                <TfiFacebook/>
                            </Icon>
                            <Icon>
                                <TiSocialLinkedin/>
                            </Icon>
                            <Icon>
                                <TiSocialTwitter/>
                            </Icon>
                            <Icon>
                                <TiSocialYoutube/>
                            </Icon>
                            <Icon>
                                <SlSocialInstagram/>
                            </Icon>
                            </IconWrapper>
                        </Social>
                    </Top>
                    <Buttom>
                        <Column>
                            <h1>Platform</h1>
                            <p>About us</p>
                            <p>Examples of sites on weblium</p>
                            <p>Affliate program</p>
                            <p>For agencies</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <h1>Weblium Studio</h1>
                            <p>Weblium Studio</p>
                            <p>Contacts</p>
                        </Column>
                        <Column>
                            <h1>Website builder</h1>
                            <p>Musicain/band</p>
                            <p>CV</p>
                            <p>Small Business</p>
                            <p>Restaurant</p>
                            <p>Education</p>
                            <p>Artist</p>
                            <p>Wedding</p>
                            <p>Sport website</p>
                            <p>Real estate</p>
                        </Column>
                        <Column>
                            <h1>Template</h1>
                            <p>Business</p>
                            <p>Restaurant</p>
                            <p>Photographers</p>
                            <p>Portfolio</p>
                            <p>Terms & Conditions</p>
                            <p>Landing pages</p>
                        </Column>
                        <Column>
                            <h1>Partners</h1>
                            <p>Template Monster</p>
                            <p>Temez</p>
                            <p>Crocoblock</p>
                            <p>MotoCMS</p>
                            <p>Motopress</p>
                            <p>Privacy Policy</p>
                            <p>MonsterOne</p>
                            <p>Web Design Library</p>
                        </Column>
                        <Column>
                            <h1>To read</h1>
                            <p>Blog</p>
                            <p>Knowledge base</p>
                            <p>Gudies</p>
                            <p>For agencies</p>
                            <h1>Language Version</h1>
                            <p>Weblium (RU)</p>
                            <p>Weblium (UA)</p>
                            <p>Weblium (ES)</p>
                        </Column>
                    </Buttom>
                    <Line/>
                <Copy>
                    <Do>
                        Webluim is free do-it-yourself website builder
                    </Do>
                    <At>
                        Copyright @ 2023 All right preserved.Managed by Web Depot FZE LLC
                    </At>
                </Copy>
                </Wrapper>
                <Down>
                    made with 
                    <Logo>
                    {/* <Img src = {img}/> */}
                    </Logo>
                </Down>
            </Container>
        </div>
    )
}

export default Footer;
const Do = styled.div`
color: white;
font-size: 20px;
@media screen and (max-width: 500px){
    width: 100%;
    text-align: center;
    font-size: 18px;
}
`

const At = styled.div`
color: white;
font-size: 22px;
text-align: right;
width: 20%;

@media screen and (max-width: 500px){
    width: 100%;
    text-align: center;
    font-size: 15px;
    margin-top: 30px;
}
`

const Copy = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
flex-wrap: wrap;
`

const Line = styled.hr`
    width: 100%;
    background-color: silver;
    margin: 30px 0px;
    /* border: none; */
`

const IconWrapper = styled.div`
display: flex;

@media screen and (max-width: 500px){
    justify-content: center;
    align-items: center;
    display: flex;
}
`

const Icon = styled.div`
width: 50px;
height: 50px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
color: #1348c2;
background-color: white;
font-size: 25px;
margin-right: 10px;

@media screen and (max-width: 500px){
    width: 30px;
    height: 30px;
    font-size: 20px;
}
`
const Social = styled.div`
width: 30%;

@media screen and (max-width: 500px){
    width: 100%;
    text-align: center;
    /* display: flex;
    align-items: center; */
}
`

const Email = styled.div`
width: 30%;

@media screen and (max-width: 500px){
    width: 100%;
    text-align: center;
    /* display: flex;
    align-items: center; */
}
`

const Img = styled.img`
width: 100%;

@media screen and (max-width: 500px){
    width: 60%;
}
`
const Logo = styled.div`
width: 10%;
object-fit: cover;

@media screen and (max-width: 500px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* display: flex;
align-items: center; */
`

const Column = styled.div`
width: 20%;

@media screen and (max-width: 500px){
    width: 100%;
    text-align: center;
}
/* background-color: green; */
`

const Top = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`

const Buttom = styled.div`
width: 100%;
display: flex;
/* align-items: center; */
justify-content: space-between;
flex-wrap: wrap;
`

const Down = styled.div`
width: 100%;
height: 100px;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
color: silver;
flex-wrap: wrap;
`

const Wrapper = styled.div`
width: 90%;
display: flex;
align-items:center;
justify-content: space-between;
flex-direction: column;
flex-wrap: wrap;

h1{
    color: white;

    @media screen and (max-width: 500px){
        font-size: 25px;
    }
};

p{
    color: white;
    margin-bottom: 20px;

    @media screen and (max-width: 500px){
        font-size: 15px;
    }
}
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #1348c2;
padding-top: 40px;
`