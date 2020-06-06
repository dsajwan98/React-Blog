import React from 'react';
import { PageHeader, Card } from 'antd';

var content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend convallis erat, vel blandit sapien. Duis faucibus, ante in sollicitudin commodo, risus nulla 
laoreet nulla, ac tincidunt nisl sem vitae tortor. Curabitur justo velit, hendrerit venenatis felis ac, aliquet fringilla libero. Donec non odio ac dui porta cursus. Vestibulum at fringilla felis. Nulla posuere dignissim lobortis. Integer eget venenatis elit. Aliquam sagittis mollis ipsum, eu vehicula velit auctor id. Ut tristique nisl sit amet luctus ullamcorper. Fusce id enim sit amet lectus efficitur pellentesque a in lacus. Sed lobortis sed neque ac dapibus.

Curabitur at vulputate mauris, id auctor justo. In porttitor in augue vel elementum. Suspendisse luctus ipsum massa, sed feugiat urna commodo et. Nullam et pulvinar orci. Nunc ultricies ligula nec lacus efficitur pharetra. Etiam nulla ante, volutpat vitae ex sit amet, luctus condimentum nisl. Fusce sit amet sem ex. Vivamus vitae purus iaculis ipsum elementum dictum. Pellentesque feugiat congue cursus. Cras volutpat sollicitudin lobortis. Fusce congue consectetur erat, eu egestas est vehicula sed. Etiam sit amet consectetur ligula, sit amet sollicitudin arcu. Vivamus in odio ornare, molestie dolor ac, gravida mi. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Phasellus ornare sed urna at fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus ullamcorper imperdiet. Aenean porta urna ante, a feugiat metus vehicula quis. Suspendisse egestas faucibus semper. Etiam hendrerit ligula mi, at cursus sapien molestie et. Etiam eget augue tincidunt, fringilla magna nec, luctus dui. Donec rutrum libero at massa tempus efficitur. Suspendisse at leo vitae justo interdum porttitor. Praesent quis dui metus. Nunc ipsum purus, accumsan nec pulvinar sit amet, commodo laoreet enim.
`;

const Post = (props) =>{
    return(
        <div className="post-container">
            <div className='posts-header-container' >
                <PageHeader
                    className="posts-header"
                    title="Post"
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