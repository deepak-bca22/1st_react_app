import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
        
      <nav className='navbar'>
      <div className='container'>

        <div className='row'>

            <div className='col-md-12'>
                <h3 className='text-dark text-center bg-primary p-1 '>Employee Management System</h3>

                 <ul className='navbar-nav'>
                    <li className='nav-items'>
                        <Link to={"../"} className='nav-link text-primary '>Home</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to={"/user"} className='nav-link text-primary'>Admin</Link>
                    </li>

                 </ul>

            </div>
        </div>
      </div>
      </nav>

    </React.Fragment>
  )
}

export default Header