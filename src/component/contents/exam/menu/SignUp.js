import "../../../../App"
import SignUpDogCat from "../../../../resources/Photo/cats___dogs.jpeg"
import {
    BottomContainer,
    FirstnameContainer,
    FirstnameInput, InputBox, NameContainer, NewCustomer, SecondnameContainer,
    SignUpBanner,
    SignUpBodyContainer, SignUpBox, SignUpButton, SignUpContainer, SignUpInput,
    SignUpInputContainer, SignUpQuestion
} from "../../../../resources/styledComponent/signup";

const SignUp = () =>
    <>
        <SignUpBanner src={SignUpDogCat}></SignUpBanner>
        <SignUpBodyContainer>
            <SignUpInputContainer>
                <SignUpContainer>
                    <InputBox>
                        <NewCustomer>I am a New Customer</NewCustomer>
                        <NameContainer>
                            <FirstnameContainer>
                                <SignUpQuestion>First Name*</SignUpQuestion>
                                <FirstnameInput placeholder={'Enter first name'} type="text"/>
                            </FirstnameContainer>
                            <SecondnameContainer>
                                <SignUpQuestion>Last Name*</SignUpQuestion>
                                <FirstnameInput placeholder={'Enter last name'} type="text"/>
                            </SecondnameContainer>
                        </NameContainer>
                        <SignUpBox>
                            <SignUpQuestion>Email Address*</SignUpQuestion>
                            <SignUpInput placeholder={'Enter Email'} type={"text"}/>
                            <SignUpQuestion>Phone Number*</SignUpQuestion>
                            <SignUpInput placeholder={'04xx xxx xxx'} type={"text"}/>
                            <SignUpQuestion>Password*</SignUpQuestion>
                            <SignUpInput placeholder={'Minimum 6 Character'} type={"password"}/>
                            <SignUpQuestion>confirm Password*</SignUpQuestion>
                            <SignUpInput placeholder={'Minimum 6 Character'} type={"password"}/>
                        </SignUpBox>


                    <span>We give our customers exclusive deals and access to amazing vet content to make your pet family as happy and healthy as possible.</span>
                    <div>Sign me up!</div>
                    <SignUpButton>Creat Account</SignUpButton>
                    </InputBox>
                </SignUpContainer>
                <BottomContainer>
                   <NewCustomer>I am a Returning Customer</NewCustomer>
                <SignUpButton>Sign In</SignUpButton>
                </BottomContainer>
            </SignUpInputContainer>


        </SignUpBodyContainer>


    </>

export default SignUp;