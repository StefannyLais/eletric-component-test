import styled, { css } from 'styled-components';
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solids;
max-width: 350px;
margin: 8px 0;
background: black;

border-radius: 5px;
img{
    height: 250px;
    object-fit: cover;
}
div{
    padding: 12px 18px;
    color: white;
    display: flex;
    flex-direction: column;
    a{
    color:#00E1FF;
    margin-top: 6px;
    display: block;
    font-family: 'Oswald', sans-serif;
    text-decoration: none;

}
    span{
        font-size: 12px;
    }
}

${({isClicked})=> isClicked && css`background: red`}
`
