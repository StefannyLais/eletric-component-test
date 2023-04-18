import styled from 'styled-components';
export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 20px; 
    max-width: 900px;
    margin: 0 auto;

    header{
        display: flex;
        padding: 8px 0;
        color: white;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid white;
    }
    > div {
        display: flex;
        justify-content: center;
        gap: 56px;

        @media screen and (max-width: 500px){
            flex-direction: column;
            gap: 12px;
        }
    }

    
    

`