import { Box, Dialog, TextField, Typography, Button, styled } from '@mui/material';
import { useState, useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
height: 528px;
max-width: 650px;
min-width: 650px;

`
const Image = styled(Box)`
     background-color: #2874f0;
     background-image: url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png);
     background-repeat: no-repeat;
     background-position: center 85%;
     height:100%;
     width: 40%;
    & > p, & > h5 {
      color: #FFF;
      font-weight: 600
    }
    
`

const LoginButton = styled(Button)`
      text-transform: none;
      background-color: #FB641B;
      color: #fff;
      height: 40px;
`

const OtpButton = styled(Button)`
      text-transform: none;
      background-color: #FFF;
      color: #2874f0;
      height: 48px;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 205)
`

const Wrapper = styled(Box)`
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 25px;
    flex: 1;
    & > div, & > button, & > p {
      margin-top: 20px
     }
`

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787
`
const CreateAccount = styled(Typography)`
     font-size: 14px;
     text-align: center; 
     color: #2874f0;
     font-weight: 600;
     cursor: pointer
`
const Error = styled(Typography)`
     font-size:10px;
     color: #ff6161;
     line-height:0'
     margin-top:10px;
     font-weight: 600;
`

const LoginDialog = (props) => {

const loginInitialValues={
  username:"",
  password:"",
}

const signupInitialValues = {
      firstname:"",
      lastname:"",
      username:"",
      email:"",
      password:"",
      phone:"",
}
  const { setAccount} = useContext(DataContext)
  const [signup, setSignup] = useState(signupInitialValues)
  const [login, setLogin] = useState(loginInitialValues)
  const[error, setError] = useState(false)
  
  const accountInitialValues = {
    login:{
      view:'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendation'
    },
    signup:{
      view:'signup',
      heading: 'Looks like youre new here!',
      subHeading: 'Sign up with your mobile number to get started'
    }
  }

  const [account, toggleAccount] = useState(accountInitialValues.login)

 
  const toggleSignup = ()=>{
    toggleAccount(accountInitialValues.signup)
  }

const handleClose = ()=>{
  props.setOpen(false)
  toggleAccount(accountInitialValues.login)
}

const onInputChange = (e)=>{
    setSignup({...signup, [e.target.name]: e.target.value });

}
const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname)
}
const onValueChange = (e)=>{
  setLogin({...login, [e.target.name]: e.target.value });

}

const loginUser = async ()=>{
   let response =  await authenticateLogin(login)
   if(response.status === 200){
    console.log(response)
    handleClose();
    setAccount(response.data.data.firstname)
    //setError(false)
   }
   else{
     setError(true)
   }
}

  return (
    <Dialog open={props.open} onClose={handleClose} PaperProps={{sx:{maxWidth: 'unset'}}}>
         <Component>
          <Box  style={{display:"flex", height:"100%", width: "100%"}}>
               <Image>
                <Typography variant='h5' style={{marginLeft:30, marginTop:50}}>{account.heading}</Typography>
                
                <Typography style={{marginTop: 20, width:"70%", marginLeft:30}}>{account.subHeading}</Typography>
               </Image>

      { account.view === 'login' ?
               <Wrapper>
                  <TextField onChange={(e)=> onValueChange(e)} name='username' variant="standard" label="Enter Email/Mobile number"></TextField>
                 {error && <Error> plese enter valid credentials</Error>}
                  <TextField onChange={(e)=> onValueChange(e)} name='password' variant="standard" label="Enter Password"></TextField>
                  <Text> By Continuing, you agree to Flipkrt's Terms of use and Privacy Policy</Text> 
                  <LoginButton onClick={()=>{ loginUser()}}> Login</LoginButton>
                  <Typography style={{textAlign:"center"}}>OR</Typography>
                  <OtpButton> Request OTP</OtpButton>
                  <CreateAccount onClick={()=> toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
               </Wrapper>
              :
              <Wrapper>
                  <TextField variant="standard" onChange={(e)=> onInputChange(e)}  name="firstname" label="Enter Firstname"></TextField>
                  <TextField variant="standard" onChange={(e)=> onInputChange(e)}  name="lastname" label="Enter Lastname"></TextField>
                  <TextField variant="standard" onChange={(e)=> onInputChange(e)}  name="username" label="Enter username"></TextField>
                  <TextField variant="standard" onChange={(e)=> onInputChange(e)}  name="email" label="Enter Email"></TextField>
                  <TextField variant="standard" onChange={(e)=> onInputChange(e)}  name="password" label="Enter Password"></TextField>
                  <TextField variant="standard" onChange={(e)=> onInputChange(e)}  name="phone" label="Enter Phone"></TextField>
                  <LoginButton onClick={()=>{ signupUser()}}> Signup </LoginButton>
              </Wrapper>  
       }
           </Box>   
         </Component>
    </Dialog>
  )
} 

export default LoginDialog;