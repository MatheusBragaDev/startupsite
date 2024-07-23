"use client"
import {Montserrat} from 'next/font/google';
import {createTheme} from "@mui/material/styles";

const montserrat = Montserrat({
    weight:['300','400', '500', '700' ],
    subsets: ['latin'],
    display: 'swap',
});



const themeDefault = createTheme ({
    typography:{
        fontFamily: montserrat.style.fontFamily,
    },

    palette:{
        primary:{
            main: '#000000',
        },
        secondary:{
            main: '#ffffff',
        },

        background: {
            paper: 'rgb(242, 244, 245)',
            default: '#ffffff'            
        },

    }
});

export default themeDefault