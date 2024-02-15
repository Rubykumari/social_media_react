import './Rightbar.scss'
import { Users } from '../../dummyData'
import { Online } from '../online/Online'

export const Rightbar = ({ profile }) => {
  console.log(profile, "Profile");
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="onlinefriendList">
          {Users.map(u => <Online key={u.id} user={u} />)}
        </ul>
      </>
    )
  }
  const ProfileRightbar = ()=>{
    return (
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarinfo">
         <div className="infoItem">
          <span className="infoKey">City: </span>
          <span className="infoValue">Ranchi</span>
         </div>
         <div className="infoItem">
          <span className="infoKey">From: </span>
          <span className="infoValue">Devi Darshan Road</span>
         </div>
         <div className="infoItem">
          <span className="infoKey">Relationship: </span>
          <span className="infoValue">Married</span>
         </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
       <div className="rightbarFollowings">
        <div className="following">
          <img src="/assets/friend.jpg" alt="" className="followingImg" />
          <span className="followingName">Aashvi Sahu</span>
        </div>
        <div className="following">
          <img src="/assets/2.jpg" alt="" className="followingImg" />
          <span className="followingName">Aashvi Sahu</span>
        </div>
        <div className="following">
          <img src="/assets/3.jpeg" alt="" className="followingImg" />
          <span className="followingName">Aashvi Sahu</span>
        </div>
        <div className="following">
          <img src="/assets/4.jpg" alt="" className="followingImg" />
          <span className="followingName">Aashvi Sahu</span>
        </div>
        <div className="following">
          <img src="/assets/5.jpg" alt="" className="followingImg" />
          <span className="followingName">Aashvi Sahu</span>
        </div>
        <div className="following">
          <img src="/assets/6.jpg" alt="" className="followingImg" />
          <span className="followingName">Aashvi Sahu</span>
        </div>
       </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
