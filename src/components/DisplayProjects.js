import { ProjectCard } from './ProjectCard';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects';

export const DisplayProjects = () => {
    


    return (
        <div className="projectDisplay">
            <div className="description">

            </div>
            <div className="list">
                {
                    projects.map(project => {
                        return(
                            <ProjectCard key={project.id} project={project}></ProjectCard>
                        )
                    })
                }
                
            </div>
        </div>
    );
}