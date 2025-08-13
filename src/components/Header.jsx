import React from 'react'
import { Button } from '@mui/material'
import { IoRestaurant } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <section  className='w-100 d-flex justify-content-center'>
            <nav   className=' w-75 d-flex align-items-center justify-content-between m-2 p-2 '>
                <img className='p-2' width={150}  src="src/assets/restaurant.png" alt="" />
                <Link to='./booking'><Button variant="outlined" startIcon={<IoRestaurant />} className='p-2'>Book Your Spot</Button></Link>
                <Button variant='outlined' size="small"  startIcon={<BiLogIn />} className='me-4'>LOGIN</Button>
            </nav>
        </section>
    </div>
  )
}

export default Header