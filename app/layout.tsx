import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';
import './globals.css';

export const metadata = {
  title: "Ali's Blog",
  description: 'Created By Ali',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='dark:bg-slate-800'>
        <header>
          <Navbar />
          <MyProfilePic />
        </header>
        {children}
      </body>
    </html>
  );
}
