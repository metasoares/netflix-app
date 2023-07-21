import React from 'react'
import tw from "tailwind-styled-components"
import netflixIcon from '../Assets/netflixIcon.png'
import { useNavigate } from 'react-router-dom'
import netflixImage from '../Assets/netBackground.jpg'
// import './Home.css'


export const Home = () => {

   const navigate = useNavigate()
  return (
    <NetflixHomeContainer className='home-container'>
      <FirstSectionContainer className='maskBackgroundImage' >
      <HomeContainer>
        <NetflixHeader className='netflix-header'>
           <NetflixIcon src={netflixIcon}  alt='Netflix Icon' className='netflix-image'/>
           <RightItemsContainer className=''>
              <SelectContainer>
                 Select
              </SelectContainer>
              <SignInHomeButtonContainer className='signInHomeContainer' onClick={()=> navigate('/signin')}>
                 Sign In
              </SignInHomeButtonContainer>
           </RightItemsContainer>
        </NetflixHeader>
        <DescriptionContainer>
          <DescJuniorContainer>
              <Title>Unlimited movies, TV shows, and more</Title>
              <Midtext>Watch anywhere. Cancel anytime.</Midtext>
              <LastDescription>Ready to watch? Enter your email to create or restart your membership</LastDescription>
          </DescJuniorContainer>
           <AcctionContainer>
               <EmailInput type='email' name='email' className='' />
               <GetStartedButton type='button'>Get Started</GetStartedButton>
           </AcctionContainer>
           </DescriptionContainer>
        </HomeContainer>
      </FirstSectionContainer>
      <SecondSectionContainer>
         <HomeSecondContainer>

         </HomeSecondContainer>
      </SecondSectionContainer>
    </NetflixHomeContainer>

  )
}

const NetflixHomeContainer = tw.main`w-full h-full flex flex-col`
const FirstSectionContainer = tw.section`w-full h-120 flex justify-center py-4  bg-center bg-cover bg-no-repeat`
//bg-home-netflix
const SecondSectionContainer = tw.section`w-full h-full flex justify-center`

const HomeContainer = tw.div`w-11/12 h-full flex flex-col`
const HomeSecondContainer = tw.div`w-11/12 h-full flex flex-col`

const NetflixHeader = tw.header`w-full h-12 flex justify-between items-center `

const NetflixIcon = tw.img`w-20 h-12 object-fill`
const RightItemsContainer = tw.div`w-36 h-8 flex justify-between `
const SelectContainer = tw.button`w-18 h-8  text-sm rounded-sm bg-transparent border-[0.1px] rounded-sm text-white font-medium`
const SignInHomeButtonContainer = tw.button`w-18 h-8 text-white text-sm bg-netRedColor rounded-sm font-medium cursor-pointer`

const DescriptionContainer = tw.div`w-full h-full flex flex-col text-white space-y-4 justify-center`
const DescJuniorContainer = tw.div`w-full h-72 grid flex-col justify-between font-medium`
const Title = tw.h1`w-full h-auto text-center text-4xl font-semibold`
const Midtext = tw.span`w-full h-auto text-lg text-center `
const LastDescription = tw.h3`w-full h-auto text-xl text-center`

const AcctionContainer = tw.div`w-full h-26 grid flex-col space-y-2 justify-center `
const EmailInput = tw.input`w-56 h-12 bg-zinc-800 border border-zinc-400 outline-none rounded-sm px-2 py-2`
const GetStartedButton = tw.button`w-56 h-12 bg-netRedColor border-none outline-none rounded-sm font-medium`



