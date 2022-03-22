import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './Services.css'

function Services() {
  return (
   <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <div className='container servicesContainer'>
       <article className='service'>
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
       </article>


       {/* Web Development */}
       <article className='service'>
         <div className='serviceHead'>
            <h3>Web Development</h3>
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
       </article>

       {/* GIS SERVICES */}
       <article className='service'>
         <div className='serviceHead'>
            <h3>Geospatial Services</h3>
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
       </article>

     </div>

   </section>
  )
}

export default Services