import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/ButtonComponent';
import QuizPage from './QuizPage';

const Container = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    flex-direction:column;
    justify-content:center;
    align-items:center;

    margin-top:23.5rem;
`

const Text = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-weight:700;
    font-size:2rem;
`

function LandingPage() {

    const [isShow, setIsShow] = useState(true);
    //const [isQuizShow, setIsQuizShow] = useState(false);

    //테스트 시작 버튼 클릭
    const onClickStartBtn = () => {
        setIsShow(false);
    }

    return (
        <>
            <Container isShow={isShow}>
                <Text>나는 어떤 유형의 룸메이트일까?</Text>
                <ButtonComponent type={true} text={"시작하기"} onclick={onClickStartBtn} />
            </Container>
            <QuizPage />
        </>
    );
}

export default LandingPage;