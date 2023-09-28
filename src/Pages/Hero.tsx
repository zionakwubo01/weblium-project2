import styled from "styled-components";
import img from "../Assets/bg-1.jpg";
import img1 from "../Assets/about-1.png"
import video from "../assets/vid.mp4"
import we from  "../assets/weblium.png"
import { useRef, useEffect, useState } from "react";
import Scrollltop from "../Block/Scrollltop"

const Hero = ()=>{
    const Dev: string[] = [
        "background-image: linear-gradient(to right, darkblue, gold);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
        "white",
        "white",
      ];
      const Prev: string[] = [
        "white",
        "background-image: linear-gradient(to right, purple, violet);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
        "white",
      ];
      const Shi: string[] = [
        "white",
        "white",
        "background-image: linear-gradient(to right, orangered, orange);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
      ];
    
      let dev_ref: any = useRef();
      let prev_ref: any = useRef();
      let shi_ref: any = useRef();
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        dev_ref.current.style = Dev[count % Dev.length];
        prev_ref.current.style = Prev[count % Prev.length];
        shi_ref.current.style = Shi[count % Shi.length];
      });
    
      useEffect(() => {
        setInterval(() => {
          setCount((el) => el + 1 / 2);
        }, 5000);
      }, []);

    return(
        <div>
            <Container>
             <Wrapper>
                <Textholg>
                    <Big ref={dev_ref}>
                          The most effortless
                          website builder
                    </Big>
                    <Small ref={prev_ref}>
                    Create your website in the blink of an eye!
                    No coding or designing skills needed.
                    </Small>
                    <Holdbut>
                    <Button>Start For Free</Button>
                    <Button2>Order a Website</Button2>
                    </Holdbut>
                <Text ref={shi_ref}>* No Credit Card Needed</Text>
                    </Textholg>
                <Video style={{borderRadius:"15px"}}  src={video} autoPlay />
                <Scrollltop/>
             </Wrapper>
            </Container>
        </div>
    );
}
export default Hero;
const Text = styled.div`
font-size: 13px;
color: blue;
`

const Video = styled.video`
    height: 70%;
    width: 50%;
    border-radius: 200px;
    background-color: black; 
    object-fit: cover;
    @media (max-width: 320px) {
        display: none;
    }
`

const Holdbut = styled.div`
        width: 75%;
        height: 80px;
        /* background-color: red; */
        margin-left: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 320px) {
            display: flex;
            flex-direction: column;
            gap: 10px;
            aliggn-items: flex-start;
        }
`

const Button2 = styled.div`
width: 180px;
height: 50px;
background-color: blue;
border-radius: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid blue;
@media (max-width: 320px) {
        width: 300px;
        font-size: 18px;
        height: 60px;
    }

&:hover{
    background-color: blue;
    color: white;
}

`
const Button = styled.div`
width: 180px;
height: 50px;
background-color: blue;
border-radius: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 320px) {
        width: 300px;
        font-size: 18px;
        height: 60px;

    }

&:hover{
    background-color: white;
    color: blue;
    border: 2px solid blue;

}
`


const Small = styled.div`
font-weight: bold;
font-size: 25px;
`


const Big = styled.div`
    font-size: 45px;
    font-family: Quicksand;
    font-weight: bold;
    color: blue;
    
`

const Textholg = styled.div`
min-height: 290px;
width: 40%;
/* background-color: green; */
display: flex;
justify-content: space-between;
flex-direction: column;
@media (max-width: 320px) {
      width: 100%;
  }
`

const Wrapper  = styled.div`
    width: 95%;
    height: 80%;
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    @media (min-width: 320px) {
        margin-top: 60px;
    }
    @media (max-width: 320px) {
        display: flex;
        flex-direction: column;
    }
`

const Container = styled.div`
    height: 100vh;
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`