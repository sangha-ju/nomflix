import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Message = ({ text, color }) => (
    <Container>
        <Text color={ color }>{ text }</Text>
    </Container>
);

Message.propTypes = {
    text: PropTypes.string.isRequired
}

const Container = styled.div `
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const Text = styled.span `
    color: ${props => props.color};
`;

 export default Message;