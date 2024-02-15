import './Post.scss';
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'
import { useState } from 'react';

export const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const usersname = Users.filter(user => user.id === post?.id)[0].username;
    const profilePic = Users.filter(user => user.id === post?.id)[0].profilePic;

    const likeHandler = ()=>{
        setIsLiked(!isLiked)
        setLike(isLiked ? like-1: like+1)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={profilePic} alt="" className="postProfileimg" />
                        <span className="postUserName">{usersname}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler}/>
                        <img className='likeIcon' src="/assets/heart_like.png" alt="" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
