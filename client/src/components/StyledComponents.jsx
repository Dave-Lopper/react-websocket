import styled from 'styled-components';

export const VerticalSpacer = styled.div`
    width: 100%;
    min-height: ${(props) => (props.size ? `${props.size * 22}px` : '22px')};
`;