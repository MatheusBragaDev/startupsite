'use client'
import React from 'react';
import themeDefault from "@/components/Theme/Theme";
import { 
  Card as CardMUI,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box
} from "@mui/material";

export default function Card({
    image, title, subtitle, actions
  }){
    const isButton = (element) => {
      return element.type === Button;
    };
    return(
        <CardMUI 
          sx={{
            borderRadius:"25px",
            bgcolor: themeDefault.palette.background.paper, 
            display: 'flex',
            flexDirection: 'column',
            height: '100%', // Ocupa toda a altura disponível
            width: '100%',  // Ocupa toda a largura disponível
            boxShadow: 3,  // Adiciona uma sombra sutil
            overflow: 'hidden',  // Evita que o conteúdo transbord
          }}
        >
              <CardMedia
                  component="img"
                  image={image}
                  // title={title}
                  sx={{
                    height: 'auto',
                    width: '100%',
                    borderRadius:'25px 25px 0 0',
                    objectFit: 'cover',
                  }}
              />
              <CardContent 
                sx={{ 
                  textAlign: 'center',
                  flexGrow:1,
                  padding:0,
                  mt:3,
                }}
              >
                <Typography variant="h5" component="h2" align="center">
                  {title}
                </Typography>
                <Typography variant="h6" align="center">
                  {subtitle}
                </Typography>
              </CardContent>
              {
                actions
                ?(
                  <CardActions 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'flex-start',
                      padding: 2,
                      gap: 2, 
                    }}
                  >
                    {/* Itens alinhados à esquerda */}
                    <Box sx={{ width: '100%' }}>
                      {actions.map((action, index) => (
                        <Box 
                          key={index} 
                          sx={{ 
                            mb: index === actions.length - 1 ? 0 : 2,
                            textAlign: index === actions.length - 1 ? 'center' : 'left',
                          }}
                        >
                          {action.type === Button ? (
                            <Box sx={{ textAlign: 'center' }}>
                              {action}
                            </Box>
                          ) : (
                            action
                          )}
                        </Box>
                      ))}
                    </Box>
                  </CardActions>
                  ): null
              }              
        </CardMUI>
    )
}