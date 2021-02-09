import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import results from './sections/results';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
`

function ResultPage({ isShow, finalNum }) {

    //퍼블리싱 어떻게 할지 생각해보기
    //잘맞는 룸미 안맞는 룸미에 대한 desc랑 img도 출력해줘야 되지 않을까?

    return (
        <Wrapper isShow={isShow}>
            {results[finalNum].sub}
            {results[finalNum].result}
            {results[finalNum].img}
            {results[finalNum].desc}
            {results[finalNum].GoodRoomie}
            {results[finalNum].BadRoomie}
        </Wrapper>
    );
}

export default ResultPage;