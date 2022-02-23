import "../../App"
import SignUpDogCat from "../../resources/Photo/cats___dogs.jpeg"
import {
    Forgot, IntroduceLogin,
    LeftBox,
    LeftContainer,
    LoginBody,
    Loginimg,
    RightContainer
} from "../../resources/styledComponent/login";
import {
    NewCustomer,
    SignUpButton,
    SignUpInput,
    SignUpQuestion
} from "../../resources/styledComponent/signup";

const LoginPage = () =>
    <div>
        <Loginimg src={SignUpDogCat}/>
        <LoginBody>
            <LeftContainer>
                <NewCustomer>I am a Returning Customer</NewCustomer>
                <LeftBox>
                    <SignUpQuestion>Email Address*</SignUpQuestion>
                    <SignUpInput placeholder={'Enter Email'} type={"text"}/>
                    <SignUpQuestion>Password*</SignUpQuestion>
                    <SignUpInput placeholder={'Enter Password'} type={"password"}/>
                    <SignUpButton>Sign In</SignUpButton>
                </LeftBox>
                    <Forgot>Forgot Password?</Forgot>
            </LeftContainer>
            <RightContainer>
                <NewCustomer>I am a New Customer</NewCustomer>
                <SignUpButton>Creat Account</SignUpButton>
                <div>
                <IntroduceLogin>· Join 600,000 customers making big savings on food, treats & toys.</IntroduceLogin>
                <IntroduceLogin>· Sign up to hear first about our exclusive sales.</IntroduceLogin>
                <IntroduceLogin>· Get Pet Tips from Australia's #1 online pet shop.</IntroduceLogin>
                </div>
            </RightContainer>
        </LoginBody>
    </div>


export default LoginPage;