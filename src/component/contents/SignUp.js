import "../../App"
import SignUpDogCat from "../../resources/Photo/cats___dogs.jpeg"
import {
    FirstnameContainer,
    FirstnameInput, NameContainer,
    SignUpBanner,
    SignUpBodyContainer, SignUpBox, SignUpButton, SignUpInput,
    SignUpInputContainer, SignUpQuestion
} from "../../resources/styledComponent/signup";

const SignUp =()=>
    <>
            <SignUpBodyContainer>
                    <SignUpBanner src={SignUpDogCat}></SignUpBanner>
                <SignUpInputContainer>
                    <NameContainer>
                    <FirstnameContainer>
                    <SignUpQuestion>First Name*</SignUpQuestion>
                    <FirstnameInput placeholder={'Enter first name'} type="text" />
                    </FirstnameContainer>
                        <FirstnameContainer>
                            <SignUpQuestion>Last Name*</SignUpQuestion>
                            <FirstnameInput placeholder={'Enter last name'} type="text" />
                        </FirstnameContainer>
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
                    <SignUpButton>Sign In</SignUpButton>

                </SignUpInputContainer>




            </SignUpBodyContainer>


        </>

export default SignUp;