import styled from "styled-components";

export default function Exemplo(){
    return (
        <ExemploWrapper>
            <h1>Este é um componente de Login</h1>
        </ExemploWrapper>
    )
}

const ExemploWrapper = styled.div`
    background: #ff0;
    h1{
        color: #000;
    }
`