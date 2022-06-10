import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import {Card} from '../../molecules/index';
import {Input} from '../../atoms/index';
import BoardPageStyle from './boardpageStyle';

const BoardPageComponent: React.FC<any> = (props) => {
return (
    <>
        <BoardPageStyle>
            <div className='title_div'>
                <div>
                    <h1>
                        게시판
                    </h1>
                </div>
                <div className='title_right'>
                    <Input placeholder='댓글을 입력해주세요.'></Input>
                    <div className='title_right_icon'>
                    <FontAwesomeIcon icon={faSearch} style={{width:'100%',height:'100%'}}/>
                    </div>
                </div>
            </div>
            {
                props.data.length !=0 ? 
                props.data.reverse().map((data)=>{
                    return(
                    <Card key={data.share_date} data={data}>
                    </Card>
                    )
                })
                :
                ''
            }
        </BoardPageStyle>
    </>
);
};

export default BoardPageComponent;