import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, styled, IconButton, Drawer, List, ListItem } from '@mui/material';
import { useNavigate } from "react-router-dom";
//import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

//component search
import Search from './Search';
import CustomButtons from "./CustomButtons";

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height:55px;
`
const Component = styled(Box)`
   margin-left: 12%;
   cursor:pointer
`
const SubHeading = styled(Typography)`
   font-size: 10px;
   font-style: italic
`
const PlusImage = styled('img')({
   width: 10,
   height: 10,
   marginLeft: 4
});
const CustomButtonWrapper = styled(Box)(({ theme }) => ({ 
   margin: '0 5% 0 auto', 
   [theme.breakpoints.down('sm')]: {
       display: 'none'
   }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
   display: 'none',
   [theme.breakpoints.down('sm')]: {
       display: 'block'
   }
}));


const Header = () => {
   
   const [ open, setOpen] = useState(false);

   let navigate= useNavigate();
   const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
   const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

   const handleOpen = ()=>{
       setOpen(true)
   }
   const handleClose = ()=>{
       setOpen(false)
   }

   const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <ListItem>
                  <CustomButtons />
              </ListItem>
          </List>
      </Box>
  );

   return (
      <StyleHeader>
         <Toolbar style={{ minHeight: 55 }}>
         <MenuButton color='inherit' onClick={handleOpen}>
            <MenuIcon />
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
            
            <Component onClick={()=>{navigate('/')}}>
               <img src={logoURL} alt="logo" style={{ width: "75px" }} />
               <Box style={{ display: 'flex', }}>
                  <SubHeading>Explore&nbsp;
                     <Box component="span" style={{ color: "#FFE500" }}>Plus</Box>
                  </SubHeading>
                  <PlusImage src={subURL} alt="sub-logo" />
               </Box>
            </Component>
            

            <Search />
            <CustomButtonWrapper>
               <CustomButtons />
            </CustomButtonWrapper>
         </Toolbar>
      </StyleHeader>


   )
}
export default Header;