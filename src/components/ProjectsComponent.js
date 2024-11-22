import React from 'react'

import { projectdata } from './ProjectCard';
export default function ProjectsComponent() {

  return (
    <div style={{ marginTop: '4em' }}>

      <h3 className="pageheading2">Projects</h3>

      <div className="projects">

        {projectdata.map((pd) =>
        (<div class="card" style={{ width: ' 20rem', height: '19rem', opacity: 0.7 }}>

          <div class="card-body">
            <h5 class="card-title">{pd.title}</h5>
            <p class="card-text">{pd.description}</p>
            <a href={pd.loc} target='_blank' rel="noreferrer" class="btn btn-secondary">Click to See</a>
          </div>
        </div>))}



      </div>

    </div>

  )
}

