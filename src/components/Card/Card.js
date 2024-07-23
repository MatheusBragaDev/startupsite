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
        <CardMUI 
          sx={{
            borderRadius:"25px",
            bgcolor: themeDefault.palette.background.paper, 
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: 'auto',
          }}
        >
              <CardMedia
                  component="img"
                  image={image}
                  title={title}
                  sx={{
                    height: 'auto',
                    width: 'auto',
                    borderRadius:'25px',
                    objectFit: 'cover',
                  }}
              />
              <CardContent 
                sx={{ 
                  textAlign: 'center',
                  flexGrow:1,
                }}
              >
                <Typography variant="h5" component="h2" align="center">
                  {title}
                </Typography>
                <br></br>
                <Typography variant="h6" align="center">
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