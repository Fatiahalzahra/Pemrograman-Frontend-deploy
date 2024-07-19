import styled, {css} from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;

    background-color: ${(props) => 
        props.theme.colors[props.variant] || props.theme.colors["primary"]
    };

    ${(props) => props.size && css `
            ${props.theme.size[props.size]}
        ` || css `
            ${props.theme.size["md"]}
        `}

    ${(props) => props.full && css `
            display: block;
            width: 100%;
        `}
`;

export default Button;