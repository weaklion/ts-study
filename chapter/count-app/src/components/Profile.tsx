import React from 'react';

interface ProfileInfo {
  name : string,
  job : string
}

export function Profile(props : ProfileInfo) {
  return (
    <div>
      <h2>프로필</h2>
      <div>
        <b>이름 : { props.name } </b>
      </div>
      <div>
        <b>직업 : { props.job } </b>
      </div>
    </div>
  )
}

export default Profile;