import React from 'react';
import styled, { css } from 'styled-components';
import { EditPageType } from './editpageType';

const EditPageStyle = styled.div.attrs((props) => ({}))<EditPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
 display:flex;
    justify-content: center;
    flex-direction : column;
    height:80vh;
    align-items: center;
    width:100%;
    .line_text{
        width:80%;
        height:20%;
        padding-bottom:5%;
    }
    .memo{
        width:80%;
    }
    .commit{
        margin-top:5%;
        width:40%;
    }
`}}
;
`;

export default EditPageStyle;