import React, { useState, useEffect } from "react";
import site from "../../../assets/site.png";
import github from "../../../assets/github.png";
import location from "../../../assets/location.png";
import user from "../../../assets/user.png";
import { Link, useParams } from "react-router-dom";
import axios from "../../../Api/axios";
import Repo from "../../../UI/Repo";

function User() {
  const { login } = useParams();

  // user information
  const [userInfo, setUserInfo] = useState({});

  // user repos
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      // const responseUser = await axios.get('/userInfo');
      // const responseRepos = await axios.get('/repos');

      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserInformation();
  }, []);

  console.log(repos,"repos");

  return (
    <div className="container mx-auto">
      <Link
        to="/"
        className="back bg-green-400 text-black rounded-md  absolute left-20 top-4  px-4 py-1 font-bold"
      >
        Back
      </Link>

      <div className="user-information bg-gray-800 p-8 rounded-lg flex flex-row text-white">
        <div className="image w-1/3 mr-8">
          <img
            src={userInfo.avatar_url}
            alt="User"
            className="w-48 rounded-lg object-cover"
          />
        </div>
        <div className="user-content p-4">
          <h3>{userInfo?.name}</h3>
          <p>{userInfo?.bio}</p>
          <div className="more-data text-sm font-light">
            <p className="flex items-center p-1">
              <img src={user} alt="User" className="w-5 mr-2" />
              {userInfo?.followers}{" "}
              {userInfo?.followers == 1 ? "follower" : "followers"}, Following{" "}
              {userInfo?.following}
            </p>
            { userInfo?.location &&
              <p className="flex items-center p-1">
                <img src={location} alt="Location" className="w-5 mr-2" />
               { userInfo?.location}
              </p>
            }
            { userInfo?.blog &&
              <p className="flex items-center p-1">
              <img src={site} alt="Site" className="w-5 mr-2" />
              <a href={userInfo?.blog}>{userInfo?.blog}</a>
            </p>}
            <p className="flex items-center p-1">
              <img src={github} alt="Github" className="w-5 mr-2" />
              <a href={userInfo?.html_url} className="text-green-500">
                View Github Profile
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="user-repos">
      {repos.length > 0 ? (
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No repos for this user...</h2>
        )}
      </div>
    </div>
  );
}

export default User;
