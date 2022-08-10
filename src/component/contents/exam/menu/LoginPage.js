import "../../../../App"
import SignUpDogCat from "../../../../resources/Photo/cats___dogs.jpeg"
import {
    Forgot, IntroduceLogin,
    LeftBox,
    LeftContainer,
    LoginBody,
    Loginimg,
    RightContainer
} from "../../../../resources/styledComponent/login";
import {
    NewCustomer,
    SignUpButton,
    SignUpInput,
    SignUpQuestion
} from "../../../../resources/styledComponent/signup";
import {useState} from "react";
import {getData} from "../../../../util/Api";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {


    const [id, setId] = useState('');
    const [pw, setPw] = useState('');


    let navigate = useNavigate();

    const checkInfo = () => {
        if(!id.length){
            return alert('아이디좀 쳐라 ')
        }else if(!pw.length){
            return alert('비밀번호 쳐라 자식아 ')
        }
        let parameter = {
            id: id,
            pw: pw
        }
        getData.post('member/login', parameter).then(res => {
                const {state} = res.data;
                console.log(res,':::')
                switch (state) {
                    case 0:
                       alert('scc');
                       return navigate('/')
                    case 1:
                       return alert('Id is not matched')
                    case 2:
                       return alert('Pw is not matched')
                }
            }
        )
    }

    return <div>
        <Loginimg src={SignUpDogCat}/>
        <LoginBody>
            <LeftContainer>
                <NewCustomer>I am a Returning Customer</NewCustomer>
                <LeftBox>
                    <SignUpQuestion>Email Address*</SignUpQuestion>
                    <SignUpInput value={id} onChange={(e) => setId(e.target.value)} placeholder={'Enter Email'}
                                 type={"text"}/>
                    <SignUpQuestion>Password*</SignUpQuestion>
                    <SignUpInput value={pw} onChange={(e) => setPw(e.target.value)} placeholder={'Enter Password'}
                                 type={"password"}/>
                    <SignUpButton onClick={checkInfo}>Sign In</SignUpButton>
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
}

export default LoginPage;