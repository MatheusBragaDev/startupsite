import Image from 'next/image'
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
      }}>
      <Image
        alt="backgroundimage"
        src={backgroundimage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vhw"
        style={{
          objectFit: 'cover',
        }}
      />
    </Box>
  )
}