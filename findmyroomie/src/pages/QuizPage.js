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

    const [onQuestion, setOnQuestion] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [index, setIndex] = useState(0);

    const [overnight, setOvernight] = useState(0);
    const [active, setActive] = useState(0);
    const [clean, setClean] = useState(0);
    const [owl, setOwl] = useState(0);
    const [result, setResult] = useState(16);

    const findResult = () => {

        let result = 0;

        //외박많이 or 집수니
        if (overnight >= 5) {
            console.log("A가 5 이상");
        } else {
            console.log("A가 5 이하");
        }

        //외향 or 내향
        if (active >= 5) {
            console.log("B가 5 이상");
        } else {
            console.log("B가 5 이하");
        }

        //청결중요 or 덜중요
        if (clean >= 5) {
            console.log("C가 5 이상");
        } else {
            console.log("C가 5 이하");
        }

        //올빼미 or 이른취침
        if (owl >= 5) {
            console.log("D가 5 이상");
        } else {
            console.log("D가 5 이하");
        }

        setResult(result);
    }

    const onClickNextBtn = (key) => {
        //Math.floor(Math.random() * 10)
        //문제 랜덤 출력이 state 동기화가 안돼서 자꾸 밀린다. 이유 찾기.

        //점수 계산
        let point = contents[index].weight * contents[index].answers[key].score;

        //특수한 경우 - 바로 종료
        if (index === 3 && key === 2) {
            //뷰 전환
            setShowResult(true);
            setOnQuestion(false);
        }

        //선택지에 따라 점수 합산
        if (index === 9) {
            //owl
            setOwl(owl + point);

            //마지막 단계 - finalNum 넣어주기
            findResult();

            //뷰 전환
            setShowResult(true);
            setOnQuestion(false);
        } else {
            if (index === 8) {
                //owl
                setOwl(owl + point);

            } else if (index >= 5) {
                //clean
                setClean(clean + point);

            } else if (index >= 2) {
                //active
                setActive(active + point);

            } else {
                //outgoing
                setOvernight(overnight + point);
            }
            //문제 전환
            setIndex(index + 1);
        }
    }

    return (
        <Wrapper>
            <Container isShow={onQuestion}>
                <Text>{contents[index].question.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Text>

                {contents[index].answers.map((answer, i) => (
                    <ButtonComponent
                        key={'answer - ' + i}
                        idx={i}
                        text={answer.text}
                        onclick={onClickNextBtn}
                    />
                ))}
            </Container>
            <ResultPage isShow={showResult} finalNum={result} />
        </Wrapper>
    );
}

export default QuizPage;