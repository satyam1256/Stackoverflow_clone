import { Public, Stars, Work } from '@mui/icons-material'
import React from 'react'
import {Link} from 'react-router-dom'
import './css/sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link>Home</Link>
          </div>
          <div className="sidebar-option">
            <Link>PUBLIC</Link>
            <div className='link'>
              <div className='link-tag'>
                <Public />
                <Link to={'/'}>Question</Link>
              </div>
              <div className='tag'>
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <Link>COLLECTIVES</Link>
            <div className='link'>
              <div className='link-tag'>
                <Stars />
                <Link>Explore Collectives</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <Link>FIND A JOB</Link>
            <div className='link'>
              <div className='link-tag'>
                <p>Jobs</p>
                <p>Companies</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <Link>TEAMS</Link>
            <div className='link'>
              <div className='link-tag'>
                <Work />
                <Link>Companies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar
