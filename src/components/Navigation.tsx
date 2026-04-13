import styled from "styled-components";

const NavigationDetails = styled.div`
    h1 {
        color: red;
    }
`;

function Navigation() {
    return (
        <>
            <NavigationDetails>
                <h1>Hello</h1>
            </NavigationDetails>
        </>
    );
}

export default Navigation;
