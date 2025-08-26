// app/layout.tsx

import React from 'react';
import Header from './Header/Header';
import './globals.css'; // Assuming you have global styles

export const metadata = {
  title: 'Pose Detection System',
  description: 'A system to detect poses using machine learning',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        {/* Add Footer component here if you have one */}
      </body>
    </html>
  );
};

export default RootLayout;
