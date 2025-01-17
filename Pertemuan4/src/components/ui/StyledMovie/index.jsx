import styled from "styled-components";

const StyledMovie = styled.div `
    margin-bottom: 1rem;

    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    h3 {
        color: #4361ee;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
    }

    p {
        color: #fff;
    }

    @media (min-width: 768px) {
        flex-basis: 50%;
    }

    @media (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
    }
`;

export default StyledMovie;