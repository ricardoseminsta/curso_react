import styled from 'styled-components';

type ContainerProps = {
    bgColor: string;
}
export const Container = styled.div<ContainerProps>`
max-width: 600px;
margin: 0 auto;
display: flex;
background-color: ${props => props.bgColor};
    color: white;
    padding: 20px;

    span {
        font-weight: bold;
        color: #000;
    }

    .link {
        color: #fff;
        font-size: 18px;

        &:hover {
            color: #0f0;
        }
    }

    @media (max-width: 500px) {
        background-color: green;
        flex-direction: column;
    }
`;

type ButtonProps = {
    bg: string;
    small?: boolean;
}
export const Button = styled.button<ButtonProps>`
    font-size: ${props => props.small ? '15px' : '30px'};
    background-color: ${props => props.bg};
`;