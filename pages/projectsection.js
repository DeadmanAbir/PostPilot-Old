import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SelectApp from '../components/SelectApp';
import { auth } from '../Firebase/Firebase';
import axios from 'axios';
function projectsection() {
    const[isProjectOpen, setProject]=useState(false);
    useEffect(() => {
        async function fetchData() {
          if(auth.currentUser){
            try {
              console.log(auth.currentUser.displayName);
                const response = await axios.get(`http://localhost:5000/general/allprojects/${auth.currentUser.displayName}`);
            
                console.log(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            }
          }
    
        fetchData();
      });
    return (
        <div className="bg-[url('/service-1.jpeg')] text-white">
          {isProjectOpen ? <SelectApp setProject={setProject} /> : null}
          <div className="flex justify-center flex-wrap gap-10 pt-[10rem] lg:px-0 px-10 py-20">
            <div className="bg-[#111629] w-[28rem] h-[15rem] lg:h-[20rem] flex gap-4 flex-col justify-center items-center rounded-3xl border border-white">
             
              <FontAwesomeIcon icon={faPlus} className="text-[24px]"  onClick={() => {
                  setProject(true);
                }} />

              <p
                onClick={() => {
                  setProject(true);
                }}
              >
                Add Project
              </p>
            </div>
            <div className="bg-[#111629] w-[28rem] h-[15rem] lg:h-[20rem] flex justify-center items-center rounded-3xl border border-white flex-col gap-6">
              <h1 className="text-[24px] font-[400]">Project Name</h1>
              <div className="flex gap-8">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-[50px]" />
                <FontAwesomeIcon icon={faTwitter} className="text-blue-600 text-[50px]" />

    
              </div>
            </div>
         <div className="bg-[#111629] w-[28rem] h-[20rem] flex justify-center items-center rounded-3xl border border-white">
        <p>Add Project</p>
      </div>
      <div className="bg-[#111629] w-[28rem] h-[20rem] flex justify-center items-center rounded-3xl border border-white">
        <p>Add Project</p>
      </div>
          </div>
        </div>
      );
}

export default projectsection