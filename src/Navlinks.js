import { Link } from 'react-router-dom'
import React from 'react'
import './Navlinks.css'

function Navlinks(){
    return(
        <div className="navlink__main">
            <div className="navlink__inner">
                <Link>
                    All Movies
                </Link>
                <Link>
                    Vampires / Werewolves
                </Link>
                <Link>
                    Witch and Warlock
                </Link>
                <Link>
                    Twilight Best Seller
                </Link>
                <Link>
                    All About Dracula
                </Link>
            </div>
        </div>
    )
}

export default Navlinks