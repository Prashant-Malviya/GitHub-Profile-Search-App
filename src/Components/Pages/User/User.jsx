import React, {useState, useEffect} from 'react'
import site from '../../../assets/site.png'
import github from '../../../assets/github.png'
import location from '../../../assets/location.png'
import user from '../../../assets/user.png'
import { Link, useParams } from 'react-router-dom'
import axios from '../../../Api/axios'

function User() {

  const {login} = useParams();


  // user information
  const [userInfo, setUserInfo] = useState({});

  // user repos
  const [repos,setRepos] = useState([]);

  useEffect(()=>{
    const fetchUserInformation = async ()=>{
      // const responseUser = await axios.get('/userInfo');
      // const responseRepos = await axios.get('/repos');

      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`)
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserInformation();
  },[])

  return (
    <div className='container mx-auto'>

      <Link to='/' className="back bg-green-400 text-slate-200 rounded-md  absolute left-20 top-4  px-4 py-1 ">
        Back
      </Link>

      <div className="user-information bg-gray-800 p-8 rounded-lg flex flex-row text-white">
        <div className="image w-1/3 mr-8">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFwoktiR6A-rU6uOSrbHEdbJFt-xpSgtpV9ezjAPvIA&s" 
            alt="User" 
            className="w-48 rounded-lg object-cover" 
          />
        </div>
        <div className="user-content p-4">
          <h3>Name of the User</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit laudantium facilis enim modi quos id, mollitia eveniet voluptatibus magnam.</p>
          <div className="more-data text-sm font-light">
            <p className="flex items-center p-1">
              <img src={user} alt="User" className="w-5 mr-2" /> 
              20 followers, Following 10
            </p>
            <p className="flex items-center p-1">
              <img src={location} alt="Location" className="w-5 mr-2" /> 
              Location
            </p>
            <p className="flex items-center p-1">
              <img src={site} alt="Site" className="w-5 mr-2" /> 
              portfolio.com
            </p>
            <p className="flex items-center p-1">
              <img src={github} alt="Github" className="w-5 mr-2" />
              <a href="#" className="text-green-500">View Github Profile</a>
            </p>
          </div>
        </div>
      </div>

      <div className="user-repos bg-gray-100 p-8 my-8 rounded-lg">
        <div className="repo p-4 border-b border-gray-500">
        <a href="">
          <h3>Name of the repo</h3>
        </a>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos sunt ab quia quae. doloremque corrupti distinctio, incidunt animi similique!</p>
          <small>Written In JavaScript</small>
        </div>
      </div>
    </div>
  )
}

export default User
