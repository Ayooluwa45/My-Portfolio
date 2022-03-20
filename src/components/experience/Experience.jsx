import React from "react";
import{BsFillPatchCheckFill} from'react-icons/bs'
import './Experience.css'

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experienceContainer">
        <div className="experienceFrontend">
            <h3>Frontend Development</h3>
            

             <div className="experienceContent">
              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                  <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                 <div>
                 <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                 </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                  <div>
                  <h4>Javscript</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                  <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
               <div>
               <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
               </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                 <div>
                 <h4>React</h4>
                  <small className="text-light">Experienced</small>
                 </div>
              </article>
            </div>
        </div>
        <div className="experienceGisAnalyst">
        <h3>Gespatial Skills</h3>
        <div className="experienceContent">
         
              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                  <div>
                  <h4>ARCGIS</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                  <div>
                  <h4>ARCGIS</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                  <div>
                  <h4>ARCGIS</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                  <div>
                  <h4>ARCGIS</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>

              <article className="experienceDetail">
                  <BsFillPatchCheckFill className="experienceIcons"/>
                  <div>
                  <h4>ARCGIS</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>

            
            </div>
        </div>

      </div>
    </section>
  );
} 

export default Experience;
