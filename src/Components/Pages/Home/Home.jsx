import React, { useEffect, useState } from "react";
import axios from "../../../Api/axios";
import User from "../../../UI/User";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";



function Home() {
  const [query, setQuery] = useState("");

  // users fetched from the api
  const [users, setUsers] = useState("");

  //page
  const [page,setPage] = useState(1);

  //per page
  const [limit,setLimit] = useState(10);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handlePrevPage = () => {
    setPage(page => {
      if(page === 1) return page;
      else return page-1;
    })
  }

  const handleNextPage = () => {
    setPage(page => page + 1);
  }

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/search/users?q=" + query, {
        params:{
          page,
          per_page: limit
        }
    });
      return data?.items;
      console.log(data, "resonse <====");
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("Your Query is empty...");
    }
  };

  const handlePageLimit = (e) => {
    const value = e.target.value;
    setLimit(parseInt(value));
  };

  useEffect(()=>{
    const displayUsersOnChange = async ()=>{
      if(query){
        const items = await fetchUsers();
        setUsers(items);
      }
    }
    displayUsersOnChange();
  },[page,limit])

  return (
    <div className=" lg:w-full w-auto">
      <div className="bg-gray-800 p-4 rounded-lg h-auto w-auto flex flex-col justify-center items-center text-white py-10 px-auto px-7">
        <h4 className="text-xl font-bold mb-4">GitHub Search User</h4>
        <form className="w-full max-w-sm flex flex-row">
          <input
            type="text"
            className="w-auto h-auto px-4 py-2 rounded-md text-black"
            placeholder="Search..."
            onChange={handleQueryInput}
          />
          <button
            type="submit"
            className="ml-2 font-bold px-5 py-2 rounded-md bg-green-600 text-white"
            onClick={handleSearchUsers}
          >
            Search
          </button>
        </form>
      </div>

      <div className="bg-gray-200 p-4 mt-5 rounded-lg w-auto h-auto">
        <div className="more-options flex justify-between">
          <label>
            <small>Per Page</small>
            <select onChange={handlePageLimit}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>

          <div className="pagination flex flex-row space-x-2 font-bold">
            <button className="text-lg px-4 py-1 bg-blue-300 hover:text-white hover:bg-blue-600 rounded-full"
            onClick={handlePrevPage}
            >
            <IoMdArrowRoundBack />
            </button>

            <p>{page}</p>

            <button className="text-lg px-4 py-1 bg-blue-300 hover:text-white hover:bg-blue-600 rounded-full"
            onClick={handleNextPage}
            >
            <IoMdArrowRoundForward />
            </button>
          </div>

        </div>
        {users ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <h2 className="text-red-500 font-bold sm:text-lg lg:text-3xl md:text-3xl">Please Search... </h2>
        )}
      </div>
    </div>
  );
}

export default Home;
