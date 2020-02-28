import React from 'react'

const NavBarHome = () => {
    return(
        <div>
            <nav class="nav nav-pills flex-column flex-sm-row navbar-dark bg-dark">
                <a class="flex-sm-fill text-sm-center nav-link active" href="#">Home</a>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Projects</a>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Bugs</a>
                <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Tasks</a>
            </nav>
        </div>
    );
}

export default NavBarHome;