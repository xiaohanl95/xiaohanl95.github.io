export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({variable:'--font-geist-sans',subsets:['latin']});
const geistMono = Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
export const metadata: Metadata = {
 title:{default:'Xiaohan (Sally) Li | Aerosols, Clouds & Climate',template:'%s | Xiaohan (Sally) Li'},
 description:'Xiaohan (Sally) Li is an atmospheric scientist specializing in aerosol microphysics, aerosol–cloud interactions, and climate. Lead developer of GLAMM.',
 metadataBase:new URL('https://xiaohanl95.github.io'),
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
