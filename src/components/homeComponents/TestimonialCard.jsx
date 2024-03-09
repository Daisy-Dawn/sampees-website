const TestimonialCard = ({ image, name, profession, comment }) => {
  return (
    <div className='w-full md:w-[19rem] lg:max-w-[21.875rem]  h-full lg:h-[18.875rem] bg-[#f4f4ed] rounded-[0.625rem] p-4 shadow-lg'>
      <div className='flex items-center gap-2'>
        <img
          src={image}
          className='w-[3.5rem] h-[3.5rem] object-cover rounded-full border-2 border-solid border-petal'
          alt='profile photo'
          loading='lazy'
        />
        <div>
          <h3 className='font-mont font-semibold text-base'>{name}</h3>
          <h4 className='font-poppins font-normal text-sm text-blossom'>
            {profession}
          </h4>
        </div>
      </div>
      <p className='text-base mt-4 font-poppins text-balance text-[#0d0d0e]'>
        {comment}
      </p>
    </div>
  )
}

export default TestimonialCard
