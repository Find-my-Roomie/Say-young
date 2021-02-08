import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import results from './sections/results';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
`

function ResultPage({ isShow, result }) {

    //결과 받아와서 유형 번호 체크하고
    //그 번호에 맞는 결과 results[번호]로 출력하면 되겠다

    return (
        <Wrapper isShow={isShow}>결과가 나갈 페이지여요</Wrapper>
    );
}

export default ResultPage;