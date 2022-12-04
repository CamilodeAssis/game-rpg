import styled from "styled-components";
import {SideTypes } from '../../types/sideTypes'


export const Container = styled.div<{left: number, top: number, size: number, sidePos: number;}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-image: url('/src/assets/images/char.png');
    background-position: 0px ${props => props.sidePos}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
`;
export const Char = styled.div`


`;
