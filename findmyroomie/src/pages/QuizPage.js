import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/ButtonComponent';
import contents from './sections/questions';

const Container = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    flex-direction:column;
    justify-content:center;
    align-items:center;

    margin-top:20rem;
`

const Text = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-weight:700;
    font-size:2rem;
    margin-bottom: 6.5rem;
`

function QuizPage({ isShow }) {

    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 4));


    //중복제거필요
    const onClickNextBtn = () => {
        setRandomNum(Math.floor(Math.random() * 4));
        console.log(randomNum);
    }

    return (
        <Container isShow={isShow}>
            <Text>{contents[randomNum].question}</Text>

            {contents[randomNum].answers.map((answer, i) => (
                <ButtonComponent
                    key={'answer-' + i}
                    text={answer.text}
                    onclick={onClickNextBtn}
                />
            ))}
        </Container>
    );
}

export default QuizPage;