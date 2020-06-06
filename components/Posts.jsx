import React from 'react';
import { PageHeader, Card } from 'antd';
import PostSnippet from './PostSnippet';
import api from '../mock_api';
import _ from 'lodash';


function Posts(props){
    return(
        <div className="posts_container">
            <div className='posts-header-container' >
                <PageHeader
                    className="posts-header"
                    title="Posts"
                />
            </div>
            <div className='posts-article-container'>
                {
                    _.map(api,(article,idx)=>(
                        <PostSnippet
                            key = {idx} 
                            id ={idx}
                            title={article.title} 
                            content={article.content} 
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Posts;