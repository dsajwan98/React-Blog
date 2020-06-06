import React from 'react';
import {Card} from 'antd';
import {Link} from '@reach/router';


const PostSnippet = (props)=>{
    return(
        <div className='article-container'>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={<Link to={`post/${props.id}`}>Read Article</Link>}
                >
                <p>
                    {
                        props.content.split('\n').map((paragraph,i) => {
                            return <p key={i}>{paragraph}</p>
                        })
                    }
                </p>
            </Card>
        </div>
    )
}

export default PostSnippet;