import React, { useEffect, useState, useRef } from 'react';
import BoardPageComponent from './boardpage';
import { BoardPageType } from './boardpageType';
import axios from 'axios';

const BoardPage: React.FC<BoardPageType> = (props, {}: BoardPageType) => {
  const [data, setdata] = useState([]);
  // 게시글 데이터 불러오기

  useEffect(() => {
    axios
      .post(
        'http://localhost:3001/api/board/get_board',
        {},
        {
          headers: {
            // Authorization : user.access_token,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
        setdata(res.data.board.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <BoardPageComponent {...props} data={data} />;
};

export default BoardPage;
