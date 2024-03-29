import React from 'react';
import projectReducer from '../../store/reducers/projectReducer';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="project-list section">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                        <p className="grey-text">3rd September, 2am</p>
                    </div>
                </div>
            </div>
    )
}
export default ProjectSummary;