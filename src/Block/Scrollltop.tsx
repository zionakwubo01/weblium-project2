import {FaAngleUp} from "react-icons/fa"
import styled from "styled-components"
import {useState} from 'react'
const Scrolltop = ()=>{
    const [Top, setTop] = useState(false)

    const Totop = ()=>{
        if(Top && window.pageYOffset >=100){
            setTop(true)
        }else if(Top && window.pageYOffset<=100){
            setTop(false)
        }
    }

    const scrollOnclick = ()=>{
window.scrollTo({top: 0, behavior: "smooth"})
    }
    window.addEventListener("scroll", Totop)
    return(
        <div>
<Container onClick={scrollOnclick}>
<Con>
    <FaAngleUp/>
</Con>
</Container>
        </div>
    )
}
export default Scrolltop;
const Con = styled.div`

`
const Container = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: black;
color: white;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index:2;
right: 50px;
top: 650px;
cursor: pointer;
@media (max-width: 320px){
    display: none;
}
`
