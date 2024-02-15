import './Online.scss'

export const Online = ({user}) => {
    return (
        <>
            <li className="onlineFriend">
                <div className="friendContainer">
                    <img src={user.profilePic} alt="" className="friendImg" />
                    <span className="onlineBadge"></span>
                </div>
                <span className="username">{user.username}</span>
            </li>
        </>
    )
}
