import React from 'react';

function Home() {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-800 p-4 rounded-lg h-150 flex flex-col justify-center items-center text-white">
        <h4 className="text-lg font-bold mb-4">GitHub Search User</h4>
        <form className="w-full max-w-sm">
          <input
            type="text"
            className="w-3/4 px-4 py-2 rounded-l-md focus:outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="px-8 py-2 rounded-r-md bg-green-600 text-white"
          >
            Search
          </button>
        </form>
      </div>

      <div className="bg-gray-200 p-4 mt-5 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="w-1/5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFwoktiR6A-rU6uOSrbHEdbJFt-xpSgtpV9ezjAPvIA&s"
              alt="User Avatar"
              className="w-full rounded-full"
            />
          </div>
          <div className="user-info ml-4">
            <h4 className="text-lg font-bold">Name of the user here</h4>
            <small className="text-gray-600">ID34fj</small>
            <a
              href="#"
              className="text-blue-500 hover:underline block mt-2"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
