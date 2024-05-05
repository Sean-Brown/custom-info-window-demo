import React from "react";
import styled from "styled-components";

export default function IWContent() {
    return (
        <Container>
            <button onClick={() => alert('the component is alive!!')}>Click Me!!</button>
        </Container>
    );
}

const Container = styled.div`
    width: 150px;
    height: 100px;
`;