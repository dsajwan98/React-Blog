import React , {useState , useEffect} from 'react';
import { PageHeader, Card } from 'antd';
import api from "../mock_api";

const Post = (props) =>{

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    useEffect(()=>{
        let post = api[props.id];
        setTitle(post.title);
        setContent(post.content);
    })
    return(
        <div className="post-container">
            <div className='posts-header-container' >
                <PageHeader
                    className="posts-header"
                    title= {title}
                    content = {content}
                />
            </div>
            <div className='post-content'>
            <Card style={{marginTop: 16}}>
                {
                    content.split('\n').map((paragraph,i) => {
                       return <p key={i}>{paragraph}</p>
                    })
                }
            </Card>
            </div>
        </div>
    )
}

export default Post;