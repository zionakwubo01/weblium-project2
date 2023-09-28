import styled from "styled-components"


const Feat = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Top>
                        <h1>Features of Weblium</h1>
                        <p>Develop and optimize your project, increase profits — all our benefits are at your disposal.</p>
                    </Top>
                    <Buttom>
                        <Card>
                            <h1>Pages</h1>
                            <p>Hundreds of ready-made templates and blocks, automatic mobile versions, and third-party code embedment.</p>
                        </Card>
                        <Card>
                            <h1>Marketing</h1>
                            <p>Pop-up windows that can run on triggers, forms, trigger action execution, and working with analytics systems.</p>
                        </Card>
                        <Card>
                            <h1>Support</h1>
                            <p>Online support available 24/7 all year round, video lessons, and an extensive knowledge base.</p>
                        </Card>
                        <Card>
                            <h1>Online Store</h1>
                            <p>An option to add up to 10000 goods, variable items, online payments collection, checkout and cart pages.</p>
                        </Card>
                        <Card>
                            <h1>CRM</h1>
                            <p>Fully functioning customer and deal accounting in one place with a personal account, separate for each online store.</p>
                        </Card>
                        <Card1>
                            <h1>SEO</h1>
                            <p>Tags, "breadcrumbs", shema.org markup, 301 redirect, and unique 404-page setups.</p>
                        </Card1>
                    </Buttom>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Feat;
const Card1 = styled.div`
width: 28%;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding: 0px 20px;
border-radius: 10px;
margin-bottom: 30px;
padding-bottom: 25px;

@media screen and (max-width: 500px){
    width: 100%;
}


h1{
    color: #1348c2;
    font-weight: 600;

    @media screen and (max-width: 500px){
        font-size: 20px;
    }
}

p{
    font-size: 22px;
    color: gray;
    font-weight: 400;

    @media screen and (max-width: 500px){
        font-size: 18px;
    }
}
`
const Card = styled.div`
width: 28%;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding: 0px 20px;
border-radius: 10px;
margin-bottom: 30px;

@media screen and (max-width: 500px){
    width: 100%;
}

h1{
    color: #1348c2;
    font-weight: 600;

    @media screen and (max-width: 500px){
        font-size: 20px;
    }
}

p{
    font-size: 22px;
    color: gray;
    font-weight: 400;

    @media screen and (max-width: 500px){
        font-size: 18px;
    }
}
`

const Buttom = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 20px;
`

const Top = styled.div`
width: 70%;
height: 20%;
text-align: center;

@media screen and (max-width:500px){
    width: 100%;
    text-align: center;
}

h1{
    color: #1348c2;
    font-size: 60px;
    font-weight: 500;

    @media screen and (max-width: 500px){
        font-size: 30px;
    }
}

p{
    color: gray;
    font-size: 25px;

    @media screen and (max-width: 500px){
        font-size: 18px;
        font-weight: 600;
    }
}
`

const Wrapper = styled.div`
width: 90%;
flex-direction: column;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
background-color: #f5f5f5;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-top: 50px;
`