import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import SelectApp from '../components/SelectApp';
import { useAuth } from '@clerk/nextjs';
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import axios from 'axios';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Projectsection({ data, userId }) {


  const [isProjectOpen, setProject] = useState(false);
  let count = 0;
  return (
    <div className="bg-[url('/service-1.jpeg')] text-white">
      <Head>
        <title>PostPilot-Dashboard</title>
      </Head>
      {isProjectOpen ? <SelectApp setProject={setProject} userId={userId} data={data} /> : null}
      <div className="flex justify-center flex-wrap gap-10 pt-[10rem] lg:px-0 px-10 py-20">
        <div className="bg-[#111629] w-[28rem] h-[15rem] lg:h-[20rem] flex gap-4 flex-col justify-center items-center rounded-3xl border border-white">

          <FontAwesomeIcon icon={faPlus} className="text-[24px]" onClick={() => {
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

        {data.map((projects) => (
          <ProjectCard
            key={count++}
            name={projects.name}
            id={projects._id}
            userId={userId}
          />

        ))}

      </div>
    </div>
  );
}

export default Projectsection


function ProjectCard({ name, id, userId }) {

  async function deleteProject() {
    const data = {
      id
    }
    const confirmed = window.confirm("Are you sure you want to delete this project?");

    if (confirmed) {
      try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/linkedin/deleteProject`, {
          data, headers: {
            Authorization: `Bearer ${userId}`
          }
        })
        
      window.location.reload();

      } catch (e) {
        console.log(e.message);
        toast.error("Internal Error!");
      }
    }
  }
  return (
    <div className="bg-[#111629] w-[28rem] h-[15rem] lg:h-[20rem] flex justify-center items-center rounded-3xl border border-white flex-col gap-6">
      <h1 className="text-[24px] font-[400]">{name}</h1>
      <div className="flex gap-8">
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-[50px]" />
        <FontAwesomeIcon icon={faTrash} style={{ color: "#b1342b" }} className="text-blue-600 text-[50px] cursor-pointer" onClick={deleteProject} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />


      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { userId } = getAuth(ctx.req);
  let responseData;
  if (userId) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/general/allprojects`, {
      headers: {
        "Authorization": `Bearer ${userId}`
      }
    })
    responseData = await res.json();

  }
  return {
    props: {
      data: responseData,
      userId: userId
    }
  }
}