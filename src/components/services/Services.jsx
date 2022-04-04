import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './Services.css'

function Services() {
  return (
   <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <div className='container servicesContainer'>
       {/* <article className='service'>
         <div className='serviceHead'>
            <h3>UI/UX design</h3>
         </div>
        <ul className='serviceList'>
          <li>
          <BsCheck className='serviceIcons'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit eum </p>
          </li>

          <li>
          <BsCheck className='serviceIcons'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit eum </p>
          </li>

          <li>
          <BsCheck className='serviceIcons'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit eum </p>
          </li>

          <li>
          <BsCheck className='serviceIcons'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit eum </p>
          </li>

          <li>
          <BsCheck className='serviceIcons'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit eum </p>
          </li>

          <li>
          <BsCheck className='serviceIcons'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit eum </p>
          </li>
        </ul>
       </article> */}


       {/* Web Development */}
       <article className='service'>
         <div className='serviceHead'>
            <h3>Web Development Services</h3>
         </div>
        <ul className='serviceList'>
          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Building powerful, fast, user-friendly and reactive web apps </p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Designing and implementing user-facing features for websites and application using React;jS </p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Firebase 9 authentication, queries, storage </p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Providing amazing user experiences by leveraging the power of JavaScript with ease </p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Developing and implementing front-end architecture to support user-interface concepts </p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          
          <p>Troubleshooting interface software and debugging application codes </p>
          </li>
        </ul>
       </article>

       {/* GIS SERVICES */}
       <article className='service'>
         <div className='serviceHead'>
            <h3>Geospatial Services</h3>
         </div>
        <ul className='serviceList'>
          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Performing standard spatial analyses, data searches and collecting geographical data using GPS and other equipment</p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Establishing map area and developing symbology using cartograaphic and design principle</p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Developing and implementing queries, scripts and operating GIS-specific hardware including large format plotter and scanner </p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Georeferencing digital maps to align with real ground locations, using GPS and other data as controls </p>
          </li>

          <li>
          <div className='serviceIconss'><BsCheck /></div>
          <p>Assisting in training and mentoring newer GIS staff members </p>
          </li>

          
        </ul>
       </article>

     </div>

   </section>
  )
}

export default Services