import './Profile.scss';
import { Topbar } from '../../components/topbar/Topbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'
import { Rightbar } from '../../components/rightbar/Rightbar'

export const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="pprofileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/rivers.jpg" alt="" className="profileCoverImg" />
                            <img src="/assets/cooking.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Ruby Kumari</h4>
                            <span className="profileInfodesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
