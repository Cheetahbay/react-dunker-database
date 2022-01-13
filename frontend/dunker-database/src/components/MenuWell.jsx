import React from 'react'

const MenuWell = ({ changeLeague }) => {
    return (
        <div>
            <header>
                <nav className='navbar-expand-lg navbar-dark bg-dark'>
                <div className="navbar-nav d-flex justify-content-center">
                    <a onClick={(e) => changeLeague(e.currentTarget.textContent)} href="#" className="nav-item nav-link">AMATEUR</a>
                    <a onClick={(e) => changeLeague(e.currentTarget.textContent)} href="#" className="nav-item nav-link">PRO</a>
                    <a onClick={(e) => changeLeague(e.currentTarget.textContent)} href="#" className="nav-item nav-link">NBA</a>
                    <a onClick={(e) => changeLeague(e.currentTarget.textContent)} href="#" className="nav-item nav-link">FORMER NBA</a>
                    <a onClick={(e) => changeLeague(e.currentTarget.textContent)} href="#" className="nav-item nav-link">FORMER</a>
                </div>
                </nav>
            </header>
        </div>
    )
}

export default MenuWell
