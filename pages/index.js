import React, { Component } from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-fetch';
import useSWR, { SWRConfig } from "swr";
import Link from 'next/link';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default () => {

    const { data, error } = useSWR('http://wp.godavaritimes.com/wp-json/wp/v2/pages/5', fetcher)

if (error) return <Layout><div>failed to load</div></Layout>
    if (!data) return <Layout><div>loading...</div></Layout>
    // console.log(data[0]['post-meta-fields'].mobile_featured_image[0]) adsfasdfadsf
    console.log(data);
    return <Layout>
{
<div dangerouslySetInnerHTML={{__html:data.content.rendered}} />
  }
    </Layout>
}
