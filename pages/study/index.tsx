import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import StudyComponent from 'page/studyPage'

const LoginPage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <StudyComponent />
    </>
  );
};

// LoginPage.getInitialProps = () => {};

export default LoginPage;
