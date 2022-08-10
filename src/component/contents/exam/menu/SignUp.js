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
import {useState} from "react";
import {getData} from "../../../../util/Api";

const SignUp = () =>
{



    const [sendInfo, setSendInfo] = useState({
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        pw : '',
        confirm : ''
    });

    const changeValue = (e, type) => {
        const copyData = {...sendInfo};
        copyData[type] = e.target.value;
        setSendInfo(copyData);
    }


    const createAccount = () =>{
       getData.post('member/signup', sendInfo)
    }

   return <>
        <SignUpBanner src={SignUpDogCat}></SignUpBanner>
        <SignUpBodyContainer>
            <SignUpInputContainer>
                <SignUpContainer>
                    <InputBox>
                        <NewCustomer>I am a New Customer</NewCustomer>
                        <NameContainer>
                            <FirstnameContainer>
                                <SignUpQuestion>First Name*</SignUpQuestion>
                                <FirstnameInput value={sendInfo.firstName} onChange={e => changeValue(e, 'firstName')} placeholder={'Enter first name'} type="text"/>
                            </FirstnameContainer>
                            <SecondnameContainer>
                                <SignUpQuestion>Last Name*</SignUpQuestion>
                                <FirstnameInput value={sendInfo.lastName} onChange={e => changeValue(e, 'lastName')}  placeholder={'Enter last name'} type="text"/>
                            </SecondnameContainer>
                        </NameContainer>
                        <SignUpBox>
                            <SignUpQuestion>Email Address*</SignUpQuestion>
                            <SignUpInput value={sendInfo.email} onChange={e => changeValue(e, 'email')}  placeholder={'Enter Email'} type={"text"}/>
                            <SignUpQuestion>Phone Number*</SignUpQuestion>
                            <SignUpInput value={sendInfo.phone} onChange={e => changeValue(e, 'phone')}  placeholder={'04xx xxx xxx'} type={"text"}/>
                            <SignUpQuestion>Password*</SignUpQuestion>
                            <SignUpInput value={sendInfo.pw}  onChange={e => changeValue(e, 'pw')}  placeholder={'Minimum 6 Character'} type={"password"}/>
                            <SignUpQuestion>confirm Password*</SignUpQuestion>
                            <SignUpInput value={sendInfo.confirm} onChange={e => changeValue(e, 'confirm')}  placeholder={'Minimum 6 Character'} type={"password"}/>
                        </SignUpBox>


                        <span>We give our customers exclusive deals and access to amazing vet content to make your pet family as happy and healthy as possible.</span>
                        <div>Sign me up!</div>
                        <SignUpButton onClick={createAccount}>Creat Account</SignUpButton>
                    </InputBox>
                </SignUpContainer>
                <BottomContainer>
                    <NewCustomer>I am a Returning Customer</NewCustomer>
                    <SignUpButton>Sign In</SignUpButton>
                </BottomContainer>
            </SignUpInputContainer>


        </SignUpBodyContainer>


    </>
}

export default SignUp;