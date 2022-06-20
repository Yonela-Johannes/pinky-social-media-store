import React from 'react';
import Feed from './Feed'

const Feeds = (props) => {
  const {user , admin } = props;
  return <div className='main'>
    <div className="bg-[transparent] rounded-md overflow-x-hidden">
      <Feed user={user} admin={admin}/>
    </div>
  </div>;
};

export default Feeds;
