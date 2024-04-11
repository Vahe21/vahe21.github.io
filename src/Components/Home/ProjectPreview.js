import React from "react";
import {ProjectTag} from "../../UI/Tag";
import {Link} from "react-router-dom";

const ProjectPreview = ({project})=>(
    <Link to={project.linkTo}>
        <img src={project.image} style={{maxWidth:472 , maxHeight:337}} alt="..." className="h-auto max-w-full"/>
        <p className={'font-Kanit text-dark text-s pt-4 pb-2'} style={{fontWeight:'275'}}>{project.title}</p>
        <div  className={'flex-row flex'} style={{flexWrap:'wrap'}}>
            {
                project.tags.map((item)=>(
                    <ProjectTag key={item} item={item}/>
                ))
            }
        </div>
    </Link>
)

export default ProjectPreview