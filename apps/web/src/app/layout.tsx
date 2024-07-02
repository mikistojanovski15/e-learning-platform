import Footer from './(components)/Footer';
import Header from './(components)/Header';
import UseScrollToTop from './(hooks)/useScrollToTop';
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
      <body>
        <div className="mx-auto max-w-screen-2xl">
          <Header />
          {children}
        </div>
        <Footer />
        <UseScrollToTop />
      </body>
    </html>
  );
}

// kako main.jsx vo react.
