import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/projectStyle.css";
import React from "react";
import projects from "../data/projectList";

const ProjectSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        fade: true,
        centerMode: true,
        centerPadding: 0,
    };
    return (
        <>
            <div className="tag">
                <h1 className= "Heading">Project Gallery</h1>
                <h3>Click on the image for links!</h3>
            </div>
            <div className="projectslider">
                <Slider {...settings}>
                    {projects.map((project) => (
                        <div className="card">
                            <h3 className="projectTitle">{project.title}</h3>
                            <div className="projectLinks">
                                <a href={project.link}>
                                    <img src= {project.src} alt={project.alt}/>
                                </a>
                            </div>
                            <p className="desc">{project.desc}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
};


export default ProjectSlider;