import Header from '../layouts/Header/Header'
import Footer from '@/layouts/Footer/Footer'

export default function Default({children}) {
    return (
      <>
        <Header/>
         {children}
        <Footer/>
      </>
    )
  }