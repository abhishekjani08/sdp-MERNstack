import React, { memo } from 'react'

export default memo(function UserInfo(props) {

    const { lastName, firstName, avatarUrl } = props
    return (
        <div className='userInfo'>
            <div className='userItemContainer'>
                <img src={avatarUrl} className="avatarStyle" alt="Image" />
                <h5>{firstName} {lastName}</h5>
            </div>
        </div>
    )
})