

import { Box, Button, Typography, styled } from '@mui/material';
import {  ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';

const Wrapper = styled(Box)(({ theme }) => ({
   margin: '0 3% 0 auto',
   display: 'flex',
   '& > *': {
       marginRight: '40px !important',
       textDecoration: 'none',
       color: '#FFFFFF',
       fontSize: 12,
       alignItems: 'center',
       [theme.breakpoints.down('sm')]: {
           color: '#2874f0',
           alignItems: 'center',
           display: 'flex',
           flexDirection: 'column',
           marginTop: 10
       }
   },
   [theme.breakpoints.down('sm')]: {
       display: 'block'
   }
}));
const Container = styled(Box)(({ theme }) => ({
   display: 'flex',
   cursor: 'pointer',
   [theme.breakpoints.down('sm')]: {
       display: 'block'
   }
}));
const LoginButton = styled(Button)`
   color: #2874f0;
   background-color: #FFFFFF;
   padding: 5px 40px;
   border-radius: 2px;
   box-shadow: none;
   font-weight:600;
   height:32px;
   margin-left:
`

const CustomButtons =()=>{

   const {cartItems }= useSelector((state)=> state.cart)

const[open, setOpen] = useState(false);
const {account, setAccount} = useContext(DataContext);

const openDailog = ()=>{
   setOpen(true)
}

const navigate = useNavigate();



return(
   <Wrapper>
      {
         account ? <Profile account={account} setAccount={setAccount}/> :
       <LoginButton variant="contained" onClick={()=>{openDailog()}}>LogIn</LoginButton> 
      }

       <Typography style={{marginTop: 3, width: 135}}>Become a seller</Typography>
       <Typography style={{marginTop: 3}}>More</Typography>

       <Container onClick={()=> navigate('/cart')}>
         <Badge badgeContent={cartItems?.length} color="secondary" >
          <ShoppingCart/>
         </Badge>
        <Typography sx={{marginLeft:"8px"}}>Cart</Typography>
       </Container>
       <LoginDialog open={open} setOpen={setOpen}/>
   </Wrapper>

)

}
export default CustomButtons;