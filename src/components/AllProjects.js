import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/project1.png';
import Img2 from '../assets/project2.png';
import Img3 from '../assets/project3.png';
import Img4 from '../assets/coldest.png';
import Img5 from '../assets/advo.png';
import Img6 from '../assets/bagly.png';
import Img7 from '../assets/phonewax.png';
import Img8 from '../assets/stove.png';
import Img9 from '../assets/stovedecal.png';
import { useNavigate } from 'react-router-dom';
const Projects = [
    {
        projectname: 'Coldest',
        projectTech: 'React JS',
        image: Img4,
        projectLink: "https://coldest.com/"
    },
    {
        projectname: 'Bubbels Club',
        projectTech: 'UI/UX Design',
        image: Img2,
        projectLink: "https://bubbelsclub.nl/"
    },
    {
        projectname: 'Ageless Medical',
        projectTech: 'Worpdress CMS',
        image: Img1,
        projectLink: "https://www.agelessiscool.com/"
    },
    {
        projectname: 'Boutique Smoke',
        projectTech: 'Wordpress/Three.js',
        image: Img3,
        projectLink: "https://boutiquesmoke.com/"
    },
    {
        projectname: 'Advo Easy',
        projectTech: 'Worpdress CMS',
        image: Img5,
        projectLink: "https://advoeazy.com/"
    },
    {
        projectname: 'Bagly',
        projectTech: 'MERN',
        image: Img6,
        projectLink: "https://bagly.it/"
    },
    {
        projectname: 'Phonewaxx',
        projectTech: 'MERN',
        image: Img7,
        projectLink: "https://www.phonewaxx.be/"

    },
    {
        projectname: 'Stoveshield',
        projectTech: 'Worpdress CMS',
        image: Img8,
        projectLink: "https://stoveshield.com/"
    },
    {
        projectname: 'Stovedecals',
        projectTech: 'Worpdress ',
        image: Img9,
        projectLink: "https://stovedecals.com/"
    },
];

const AllProjects = () => {
    const navigate = useNavigate()
    return (
        <div className=' min-h-screen'>
            <h1 className='text-center flex  justify-between p-5'>
                All PROJECTS
                <button className='btn btn-sm' onClick={() => navigate("/")}>Back</button>
            </h1>
            <div className='w-auto  mx-auto flex flex-col p-20 lg:flex-row flex-wrap gap-10'>
                {Projects.map((e) => (

                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}

                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <a href={e.projectLink}>
                            <div className='group  w-[500px] relative overflow-hidden border-2 border-white/50 rounded-xl'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500' src={e.image} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient'>{e.projectTech}</span></div>
                                {/* title */}
                                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                    <span className='text-3xl text-white'>{e.projectname}</span>
                                </div>
                            </div>
                        </a>
                        {/* <div>image</div> */}
                    </motion.div>

                ))}
            </div>

        </div>
    )
}

export default AllProjects