import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Box, styled} from '@mui/material';
import { getProducts } from "../../redux/actions/productActions";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
padding:10px;
background: #F2F2F2;
`

const Home=()=>{
   const {products} = useSelector(state => state.getProducts);
   console.log(products)
 
    const dispatch= useDispatch();

    useEffect(()=>{
      dispatch(getProducts());
    }, [dispatch])
    return(
         <div>
             <NavBar/>
             <Component>
                 <Banner/>
                 <MidSlide products={products} title="Deal of the Day" timer={true} />
                 <MidSection />
                 <Slide products={products} title="Discount for you" timer={false} />
                 <Slide products={products} title="Suggested Items" timer={false}/>
                 <Slide products={products} title="Top Selection" timer={false}/>
                 <Slide products={products} title="Recommended Items" timer={false}/>
                 <Slide products={products} title="Trending Offers" timer={false}/>
                 <Slide products={products} title="Seasons top picks" timer={false}/>
             </Component>
         </div>
    )
}

export default Home;

