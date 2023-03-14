import Head from "next/head";
import Sidebar from "../components/SideBar"
import ContainerList from "../components/ContainerList"
import React from 'react';

export default function Home() {
  return (
    <div className="bg-slate-250">
      <Head>
        <title> Container mananger </title>
      </Head>
      <main>
        <div className='flex'>
          <Sidebar />
          <ContainerList />
        </div>


      </main>
      <style jsx >{`
        div {
            display: flex;
            gap: 10px;
            padding: 0px 0;
        }
      `}</style>
    </div>

  )

}

