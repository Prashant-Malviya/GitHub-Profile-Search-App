import React from 'react'

function Repo({repo}) {

    const {name, html_url, description, language} = repo;

  return (
    
      <div className="user-repos bg-gray-100 p-8 my-8 rounded-lg">
        <div className="repo p-4 border-b border-gray-500 space-y-3">
          <a href={html_url}>
            <h3 className='font-bold text-2xl text-blue-600'>{name}</h3>
          </a>
         { description && <p className='text-lg text-slate-500'>
            {description}
          </p>}
         { language && <small className='font-bold text-amber-600'>Written In <span className='text-blue-400 text-xl'>{language}</span> </small>}
        </div>
      </div>
    
  )
}

export default Repo
