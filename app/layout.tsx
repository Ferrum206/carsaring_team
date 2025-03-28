import localFont from 'next/font/local';


const stolzlFont = localFont({
    src: [
        {
            path: './fonts/Stolzl-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/Stolzl-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Stolzl-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/Stolzl-Bold.woff2',
            weight: '700',
            style: 'normal',
        }
    ]
})


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
        <body className={stolzlFont.className}>
            {children}
        </body>
    </html>
  )
}

