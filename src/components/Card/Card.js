'use client'

import themeDefault from "@/components/Theme/Theme";
import { 
  Card as CardMUI,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

export default function Card({
    image, title, subtitle, actions
  }){
    return(
        <CardMUI sx={{bgcolor: themeDefault.palette.background.paper}}>
              <CardMedia
                image = {image}
                title = {title} 
                sx={{pt:'100%'}}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="h2" align="center">
                  {title}
                </Typography>
                <Typography align="center">
                  {subtitle}
                </Typography>
              </CardContent>
              {
                actions
                ?(<CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                     {actions}
                  </CardActions>
                  ): null
              }              
        </CardMUI>
    )
}