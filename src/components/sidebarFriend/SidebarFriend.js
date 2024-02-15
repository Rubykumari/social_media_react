import './SidebarFriend.scss';

export const SidebarFriend = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePic} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
