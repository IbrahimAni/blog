import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Key } from 'react';
import {PostCard, PostWidget, Categories} from "../components";
import {getPost} from "../services";
import {FeaturedPosts} from "../sections"

export default function Home({posts}: { posts: Array<{ node: { title: string, content: string } }>}){
// const Home: NextPage = ({posts} : any) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Technicity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <div>
              <PostCard post={post.node} key={post.node.title.toString()} />
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 cpl-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget slug={undefined} categories={undefined} />
              <Categories />
            </div>
        </div>
      </div>

      

    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPost()) || [];  

  return {
    props: { posts }
  }
}