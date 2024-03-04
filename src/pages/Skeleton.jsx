import React from 'react'
import { Typography } from "@material-tailwind/react";

const Skeleton = () => {
  return (
    <div className='w-screen flex justify-center items-center cube h-screen'>
        <div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>
    </div>
  )
}

export default Skeleton
