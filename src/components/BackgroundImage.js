import backgroundimage from '../../public/backgroundimage.jpg'
import { Box } from '@mui/system'
 
export default function BackgroundImage() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        opacity: 0.45,
        backgroundImage: `url(${backgroundimage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}