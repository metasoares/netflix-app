import React from 'react'
import tw from "tailwind-styled-components"
import netflixIcon from '../Assets/netflixIcon.png'



export const SignIn = () => {
  return (
    <SignInContainer>
      <Container>
        <NetLogoContainer>
            <NetImage   src={netflixIcon} alt='Netflix logo'/>
        </NetLogoContainer>

        <SignInItemsContainer>
          <SignInTitle>Sign In</SignInTitle>
          <FormContainer>
            <InputContainer>
              <EmailInput name='Email' value='' placeholder='Email' id='Email' />
              <PasswordInput name='Password' value='' placeholder='Password' id='Password' />
            </InputContainer>
            <FormLastContainer>
               <SignInButton>Sign In</SignInButton>
               <RememberContainer>
                  <RightContainer>
                     <ToogleInput  type='checkbox' name='Remember' value='' />
                     <RememberText>Remember</RememberText>
                  </RightContainer>
                  <NeedHelpText>Need help?</NeedHelpText>
               </RememberContainer>
            </FormLastContainer>
          </FormContainer>
          <OptionsContainer>
            <NewUsersContainer>
               <IntroText>New to Netflix?</IntroText>
               <SignUpText>Sign up now</SignUpText>
            </NewUsersContainer>
            <GooglereCaptchaContainer>
              <CaptchaIntroText>
                 This page is protected by Google reCAPTCHA to ensure you're not a bot.
              </CaptchaIntroText>
              <LearnMoreText>Learn more</LearnMoreText>
            </GooglereCaptchaContainer>
        </OptionsContainer>
        </SignInItemsContainer>
      </Container>
    </SignInContainer>
  ) 
}

const SignInContainer = tw.main`w-full h-screen  flex justify-center py-4`
const Container = tw.main`w-11/12 h-full text-white`
const NetLogoContainer = tw.main`w-full h-12 flex justify-start`
const NetImage = tw.img`w-20 h-16 object-fill`

const SignInItemsContainer = tw.div`w-full h-full flex flex-col py-4`
const SignInTitle = tw.h1`w-full h-12 font-bold text-3xl`
const FormContainer = tw.form`w-full h-64 grid flex-col align-between`

const InputContainer = tw.div`w-full h-36 grid flex-col align-between`
const EmailInput = tw.input`w-full h-14 px-2 py-4 outline-none border-none bg-gray-800 rounded-sm`
const PasswordInput = tw.input`w-full h-14 px-2 py-4 outline-none border-none bg-gray-800 rounded-sm`

const FormLastContainer = tw.div`w-ful h-24 flex flex-col space-y-2`
const SignInButton = tw.button`w-full h-14 outline-none border-none  rounded-sm font-medium bg-netRedColor text-xl`

const RememberContainer = tw.div`w-full h-8 flex justify-between text-gray-400 items-center`
const RightContainer =tw.div`w-22 h-auto flex justify-between items-center`
const ToogleInput = tw.input`outline-none w-4 h-4 border-none`
const RememberText = tw.small`text-sm`
const NeedHelpText = tw.small`text-sm`

const OptionsContainer = tw.div`w-full h-20 flex flex-col space-y-2 text-gray-400 text-sm`
const NewUsersContainer = tw.div`w-full h-auto flex space-x-1`
const IntroText = tw.p`text-lg`
const SignUpText = tw.span`text-white font-medium text-lg`

const GooglereCaptchaContainer = tw.div`w-full h-auto flex flex-col`
const CaptchaIntroText = tw.div``
const LearnMoreText = tw.p` text-blue-400`









