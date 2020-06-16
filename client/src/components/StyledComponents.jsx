import styled from 'styled-components';

export const VerticalSpacer = styled.div`
    width: 100%;
    min-height: ${(props) => (props.size ? `${props.size * 22}px` : '22px')};
`;

export const Header = styled.header`
    width: 100%;
    height: 60px;
    padding-right: 25px;
    padding-left: 25px;
    border-radius: 4px;
    background-color: whitesmoke;
    border: 1px solid lightgrey;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > h1 {
        font-size: 26px;
        line-height: 30px;
        margin-top: 12px;
    } 
`;