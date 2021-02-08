import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/ButtonComponent';
import contents from './sections/questions';
import ResultPage from './ResultPage';

const Wrapper = styled.div`
    display: flex;
    height:100vh;
    justify-content:center;
    align-items:center;
`

const Container = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Text = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-weight:700;
    font-size:2rem;
    margin-bottom: 6.5rem;
    text-align:center;
`

function QuizPage() {

    //Math.floor(Math.random() * 10)

    const [onQuestion, setOnQuestion] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState({
        'outing': 0,
        'active': 0,
        'clean': 0,
        'owl': 0
    });

    const onClickNextBtn = () => {

        //점수 더하기
        //클릭한 버튼의 score를 받아와서
        //weight*점수들 해서 result에 더한 값을 넣어놓고
        //10번째 누르면 합산된 점수 더해서 resultPage로 넘겨주기

        if (index === 9) {
            setShowResult(true);
            setOnQuestion(false);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <Wrapper>
            <Container isShow={onQuestion}>
                <Text>{contents[index].question.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Text>

                {contents[index].answers.map((answer, i) => (
                    <ButtonComponent
                        key={'answer-' + i}
                        text={answer.text}
                        onclick={onClickNextBtn}
                    />
                ))}
            </Container>
            <ResultPage isShow={showResult} result={result} />
        </Wrapper>
    );
}

export default QuizPage;