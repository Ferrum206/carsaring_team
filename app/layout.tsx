import localFont from 'next/font/local';
import MapContent from './components/map/Map';
import BlockContent from "./components/block/Block"
import Header from "./components/header/Header";
import "swiper/css";
import "./globals.css";
import Footer from './components/footer/Footer';


const stolzlFont = localFont({
  src: [
    {
      path: "./fonts/Stolzl-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Stolzl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Stolzl-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Stolzl-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});


export default function ContactLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
        <body className={stolzlFont.className}>
            <Header />
            {children}
            <MapContent/>
            <BlockContent/>
            <Footer/>
            
        </body>
    </html>
  )
}

    



  


