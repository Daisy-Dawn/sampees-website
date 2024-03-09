import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import AboutButton from "../components/AboutButton";
import Map from "../components/MainMap";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";


const Contact = () => {
  const navigate = useNavigate();
  // options for radio input
  const options = ['General enquiry', 'Product enquiry', "Delivery Enquiry"];

  // form data states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phoneNumber: "",
    selectedOption: options[0],
    message:""
  })

  // form error states
  const [errors, setErrors] = useState({
    firstName:"",
    lastName:"",
    email: "",
    phoneNumber:"",
    message:""
  });

  // function for handling change in input state
  const handleChange = e => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: ''
    })
  }

  // email checker
  const checkEmail = (email)=>{
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  // Validation function
  const validateForm = ()=>{
    const newErrors = {}
    
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First Name is required!'
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required!'
    }
    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone number is required!'
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required'
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required!'
    }else {
      // check email format if the email field is not empty
      const emailValidity = checkEmail(formData.email);
      if (!emailValidity) {
        newErrors.email = "Email is in a wrong format!";
      }
    }
    
    //check for errors
    if (Object.values(newErrors).some(error => error !== '')) {
      setErrors(newErrors);
      return false;
    } else{
      return true;
    }
  }
  
  const handleFormSubmission = (e)=>{
    e.preventDefault();

    if(validateForm()){
      // send the email to the client
      const serviceId = 'service_0rc00vp'
      const templateId = 'template_g9l3kj7'
      const publicKey = 'imzRXN85NkuLIVV0S'

      // create new object that contains dynamic template params
      const templateParams = {
        from_name: formData.firstName + ' ' + formData.lastName,
        to_name: 'Sampees Global Resources Limited',
        from_subject: formData.selectedOption,
        message: formData.message,
        from_phone: formData.phoneNumber,
        from_email: formData.email
      }

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(response => {
          console.log('Email sent successfully', response)
          Swal.fire({
            title: "Congrats!",
            text: "Your form was submitted successfully!",
            icon: "success"
          });
          navigate('/')
        })
        .catch(error => {
          console.log('Error sending mail', error)
          Swal.fire({
            title: "Error!",
            text: "There has been an error sending your message, while rectifying the error, please refresh and try again after a few seconds.!",
            icon: "error"
          });
        })
    }
  }

  return (
    <div className="md:p-12 lg:p-[1.5rem] contact-bg xl:p-[3rem] p-[1rem] ">
      <div>
        <h2 className="text-[1.6rem] sm:text-[2.5rem] font-semibold font-mont text-center">Contact Us</h2>
        <h3 className="text-base font-semibold font-mont text-center text-blossom mt-4">Any question or remarks? Just write us a message!</h3>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 justify-between p-0 sm:p-4 mt-4 gap-8">
        <div className="grid grid-cols-1 order-2 lg:order-1 gap-[2rem] bg-[#F8F9FA] backdrop:blur-sm p-6 md:p-8 rounded-[0.625rem] text-black">
        <div>
            <h3 className="font-poppins font-semibold text-lg text-center lg:text-start">Contact Information</h3>
            <h4 className="font-poppins font-normal text-sm text-center text-blossom lg:text-start">Say something to start a live chat!</h4>
          </div>

          <div>
          <h2 className="mb-[0.5rem] font-mont text-center md:text-left text-[1rem] font-bold text-blossom">HEAD OFFICE</h2>
          <div className="flex flex-row lg:flex-row items-center gap-4 lg:gap-2">
              <MdOutlinePhoneInTalk size={24} />
              <div className="flex-col flex gap-4 md:flex-row">
                <p className="text-base">+234-7026305228</p>
                <p className="text-base">+234-8026840200</p>
              </div>
              
            </div>
            <div className="flex flex-row lg:flex-row items-center gap-4 lg:gap-2 my-6">
              <MdOutlineMailOutline size={24} />
              <p className="text-base">samchoprite@gmail.com</p>
            </div>
            <div className="flex flex-row lg:flex-row items-center gap-4 lg:gap-2">
              <MdOutlineLocationOn size={24} />
              <p className="max-w-[80%] text-left lg:text-start text-base">Block D Shop 8 Almagamated  Bakery Int&#39;l Market, Ogidi, Anambra State</p>
            </div>
          </div>

          <div>
          <h2 className="mb-[0.5rem] font-mont text-center md:text-left text-[1rem] font-bold text-blossom">FACTORY OFFICE</h2>
            <div className="flex flex-row lg:flex-row items-center gap-4 lg:gap-2">
              <MdOutlineLocationOn size={24} />
              <p className="max-w-[80%] text-left lg:text-start text-base">No.1 Sampeters Close Ndiagu, Ogidi Idemili North L.G.A</p>
            </div>
          </div>

          <div>
          <h2 className="mb-[0.5rem] font-mont text-center md:text-left text-[1rem] font-bold text-blossom">LAGOS BRANCH OFFICE</h2>
            <div className="flex flex-row lg:flex-row items-center mb-4 gap-4 lg:gap-2">
              <MdOutlineLocationOn size={24} />
              <p className="max-w-[80%] text-left lg:text-start  text-base">Shop 32 Awolowo Modern Market Olosha, Mushin Lagos</p>
            </div>
            <div className="flex flex-row lg:flex-row items-center gap-4 lg:gap-2">
              <MdOutlinePhoneInTalk size={24} />
              <p className="text-base">+234-8033346345</p>
            </div>
          </div>

          <div>
          <h2 className="mb-[0.5rem] font-mont text-center md:text-left text-[1rem] font-bold text-blossom">IBADAN BRANCH OFFICE</h2>
            <div className="flex flex-row lg:flex-row items-center mb-4 gap-4 lg:gap-2">
              <MdOutlineLocationOn size={24} />
              <p className="max-w-[80%] text-left lg:text-start capitalize text-base">Chi Bakers, opposite yembtol petrol stateion, Apata ibadan</p>
            </div>
            <div className="flex flex-row lg:flex-row items-center gap-4 lg:gap-2">
              <MdOutlinePhoneInTalk size={24} />
              <p className="text-base">+234-8132594206</p>
            </div>
          </div>

          <div>
          <h2 className="mb-[0.5rem] font-mont text-center md:text-left text-[1rem] font-bold text-blossom">KANO BRANCH OFFICE </h2>
            <div className="flex flex-row lg:flex-row items-center mb-4 gap-4 lg:gap-2">
              <MdOutlineLocationOn size={24} />
              <p className="max-w-[80%] text-left lg:text-start  text-base">14B Katako Line, Sabon-geri Market, Kano</p>
            </div>
            <div className="flex flex-row lg:flex-row mb-2 items-center gap-4 lg:gap-2">
              <MdOutlinePhoneInTalk size={24} />
              <div className="flex-col flex gap-4 md:flex-row">
              <p className="text-base">+234-9031379666</p>
              <p className="text-base">+234-8062433495</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-black p-1 text-white rounded-full cursor-pointer  hover:bg-[#7e212c] transition-colors duration-300"><a href="https://www.facebook.com/profile.php?id=61557285863744"><FaFacebook size={16}/></a></div>
            <div className="bg-black p-1 text-white rounded-full cursor-pointer  hover:bg-[#7e212c] transition-colors duration-300"><a href="https://wa.link/4kb7e2"><FaWhatsapp size={16}/></a></div>
          </div>
        </div>
        
        <div className="lg:flex-[2] order-1 lg:order-2 px-2 lg:px-0 2xl:px-8  md:px-8 pt-8">
          <form action="#" method="post" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-auto">
              <label htmlFor="firstName" className="font-poppins font-medium mb-4 flex items-center gap-1">First Name <span className="text-blossom">*</span></label>
              <input type="text" onChange={handleChange} value={formData.firstName} name="firstName" id="firstName" className="block contact p-2 outline-none  w-full"/>
              {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>}
            </div>
            <div className="col-span-2 md:col-auto">
              <label htmlFor="lastName" className="font-poppins font-medium mb-4 flex items-center gap-1">Last Name <span className="text-blossom">*</span></label>
              <input type="text" name="lastName" id="lastName" onChange={handleChange} value={formData.lastName} className="block contact p-2 outline-none w-full"/>
              {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>}
            </div>
            <div className="col-span-2 md:col-auto">
              <label htmlFor="email" className="font-poppins font-medium mb-4 flex items-center gap-1">Email <span className="text-blossom">*</span></label>
              <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} className="block contact p-2 outline-none w-full" />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <div className="col-span-2 md:col-auto">
              <label htmlFor="phone" className="font-poppins font-medium mb-4 flex items-center gap-1">Phone Number <span className="text-blossom">*</span></label>
              <input type="number" name="phoneNumber" id="phone" onChange={handleChange} value={formData.phoneNumber} className="block contact p-2 outline-none w-full" />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>}
            </div>
            <div className="col-span-2">
              <h3 className="font-medium font-poppins mb-2">Select Subject?</h3>
              <div className="flex gap-4 flex-wrap">
                {options.map((option, index)=> (
                  <div key={index} className="flex gap-2">
                    <input 
                      key={index} 
                      type="radio" 
                      id={`option ${index}`} 
                      value={option} 
                      name={`selectedOption`}
                      onChange={handleChange}
                      checked={formData.selectedOption === option}
                      className="cursor-pointer"
                    />
                    <label htmlFor={`option ${index}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="font-poppins font-medium">Message <span className="text-blossom">*</span></label>
              <textarea name="message" onChange={handleChange} value={formData.message} id="message" cols="25" rows="8" autoCorrect="true" className="block resize-none contact p-2 outline-none w-full mt-4"></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>
            <div className="justify-self-end col-span-2">
            <AboutButton title="Get Quote" color='white' hover='white'
              bgHover='#FED5D9' bg='#7E212C' action={handleFormSubmission} />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full mt-[3rem] h-screen rounded-[0.625rem]">
        <Map />
      </div>
    </div>
  )
}

export default Contact
