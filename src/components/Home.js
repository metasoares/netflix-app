import React from 'react'
import tw from "tailwind-styled-components"
import netflixIcon from '../Assets/netflix-icon.png'
import { useNavigate } from 'react-router-dom'


export const Home = () => {

   const navigate = useNavigate()
  return (
    <NetflixHomeContainer className='home-container'>
        {/* <HomeContainer> */}
        <NetflixHeader className='netflix-header'>
           <NetflixIcon src={netflixIcon}  alt='Netflix Icon' className='netflix-image'/>
           <LeftItemsContainer className=''>
              <SelectContainer>
                 Select
              </SelectContainer>
              <SignInHomeButtonContainer className='signInHomeContainer' onClick={()=> navigate('/signin')}>
                 Sign In
              </SignInHomeButtonContainer>
           </LeftItemsContainer>
        </NetflixHeader>
        {/* </HomeContainer> */}
    </NetflixHomeContainer>

  )
}

const NetflixHomeContainer = tw.main`w-full h-full flex flex-col px-2 py-4`
// const HomeContainer = tw.div`w-10/12 h-full flex flex-col bg-yellow-400`
const NetflixHeader = tw.header`w-full h-14 flex justify-between items-center `

const NetflixIcon = tw.img`w-14 h-11 object-cover`
const LeftItemsContainer = tw.div`w-40 h-9 flex justify-between `
const SelectContainer = tw.button`w-18 h-9  text-sm rounded-sm bg-transparent border-[0.1px] rounded-sm text-white font-medium`
const SignInHomeButtonContainer = tw.button`w-18 h-9 text-white text-sm bg-netRedColor rounded-sm font-medium cursor-pointer`

