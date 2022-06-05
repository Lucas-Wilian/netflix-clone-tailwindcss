import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

export const Login = () => {
  return (
    <div>
      <Head>
        <title>Netflix</title>
      </Head>
      <Image
        src='https://rb.gy/p2hghi'
        layout='fill'
        className='-z-10 !hidden opacity-60 sm:inline'
        objectFit='cover'
      />
    </div>
  );
};
