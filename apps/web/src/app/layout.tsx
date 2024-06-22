import Header from './(components)/Header';
import './global.css';

// Metadata e for optimization for SEO -- search engine optimization
export const metadata = {
  title: 'Welcome to E-learning',
  description:
    'This is e-learning platform for kids. Code for kids, Learning for 6-10 years old kids',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // ovaj children ni e react componenta
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl">
        <Header />
        {children}
      </body>
    </html>
  );
}

// kako main.jsx vo react.
