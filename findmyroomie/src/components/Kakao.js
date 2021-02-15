import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const { Kakao } = window;

const ShareBtn = styled.button`
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
`;

function KaKao({ _title, _desc, _imageUrl }) {

    const onHandleShareKaKao = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: _title,
                description: _desc,
                imageUrl: _imageUrl,
                link: {
                    mobileWebUrl: '나중에 링크 넣기',
                }
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845
            },
            buttons: [
                {
                    title: '내 룸메이트 유형은? 테스트 해보기',
                    link: {
                        mobileWebUrl: '나중에 링크 넣기',
                    }
                }
            ]
        });
    };

    return (
        <ShareBtn value="KaKao" onClick={onHandleShareKaKao} >
            <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
        </ShareBtn>
    );
}

export default KaKao;