import { Box, styled } from '@mui/material';
import React from 'react';
import Slide from './Slide';

const Component = styled(Box)({
    display:"flex",

})
const LeftComponent = styled(Box)({
    width:"83%"
})

const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComponent>
                <Slide
                    products={products}
                    title={title}
                    timer={timer}
                >

                </Slide>
            </LeftComponent>
            <Box maxHeight="90%">
                <img src={adURL} alt="ad" style={{ width: "80%", maxHeight:"99.6", marginLeft:"9.8%" }} />
            </Box>
        </Component>
    )
}

export default MidSlide;