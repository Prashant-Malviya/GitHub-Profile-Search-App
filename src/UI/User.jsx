import React from 'react'
import { Link } from 'react-router-dom';

function User({user}) {

  const {avatar_url, login, id} = user;

  return (
    <>
    <div className=' flex flex-col my-3'>

       <div className="flex items-center mb-8">
          <div className="w-1/5">
            <img
              src={avatar_url}
              alt={login}
              className="w-full rounded-full"
            />
          </div>
          <div className="user-info ml-4">
            <h4 className="text-lg font-bold">{login}</h4>
            <small className="text-gray-600">{id}</small>
            <Link 
              to = {`/user/${login}`}
              className="text-blue-500 hover:underline block mt-2"
            >
              View Profile
            </Link>
          </div>
        </div>

        <div className='py-0.5 w-full bg-slate-400 rounded-full'></div>
        </div>
    </>
  )
}

export default User
