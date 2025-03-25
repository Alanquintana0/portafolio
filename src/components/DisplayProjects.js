import { ProjectCard } from './ProjectCard';
import React, { useEffect, useState } from 'react'
// import { projects } from '../data/projects';

export const DisplayProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try{
            const res = await fetch('http://localhost:8080/api/v1/projects');
            if(!res.ok){
                throw new Error('response not ok');
            }
            const data = await res.json();
            console.log(data);
            setProjects(data);
            setLoading(false);
        }catch(er){
            setError(er.message);
            setLoading(false);
        }
    }

    if(loading) return <div>loading projects..</div>;
    if(error) return <div>Error: {Error}</div>;


    return (
        <div className="projectDisplay">
            <div className="description">

            </div>
            <div className="list">
                {
                    projects.map(project => {
                        return(
                            <ProjectCard key={project.projectId} project={project}></ProjectCard>
                        )
                    })
                }
                
            </div>
        </div>
    );
}