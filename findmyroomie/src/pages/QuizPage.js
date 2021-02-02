import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/ButtonComponent';

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

    const contents = [
        {
            'question': '친구와의 약속이 취소되었을 때, 당신은?',
            'answers': [
                {
                    text: '나가기 귀찮았는데 잘 됐다!',
                    score: ''

                },
                {
                    text: '다른 친구를 찾아봐야지',
                    score: ''
                }
            ]
        },
        {
            'question': '시험기간 중 가장 좋아하는 공부 장소는?',
            'answers': [
                {
                    text: '편한게 최고지! 내 방',
                    score: ''

                },
                {
                    text: '멀리 가긴 귀찮아.. 기숙사 내 스터디룸',
                    score: ''
                },
                {
                    text: 'ecc 열람실 셀프 감금',
                    score: ''
                }
            ]
        },
        {
            'question': '문제3',
            'answers': [
                {
                    text: '보기1',
                    score: ''

                },
                {
                    text: '보기2',
                    score: ''
                }
            ]
        },
        {
            'question': '문제4',
            'answers': [
                {
                    text: '보기1',
                    score: ''

                },
                {
                    text: '보기2',
                    score: ''
                }
            ]
        },

    ]

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