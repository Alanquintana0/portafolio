import React from 'react';
import { ProjectCard } from './ProjectCard';

export const DisplayProjects = () => {
    return (
        <div className="projectDisplay">
            <div className="description">

            </div>
            <div className="list">
                <ProjectCard></ProjectCard>
            </div>
        </div>
    );
}