import { Post } from '../post/Post'
import { Share } from '../share/Share'
import './Feed.scss'
import {Posts} from '../../dummyData'

export const Feed = () => {
  return (
    <div className='feed'>
        <div className="feedWrapper">
            <Share/>
            {Posts.map(p =>{return <Post post={p} key={p.id}/>})}
        </div>
    </div>
  )
}
