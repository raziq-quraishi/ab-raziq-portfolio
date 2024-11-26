
import "./globals.css";
import Nav from "./components/Nav";


export const metadata = {
  title: "Quraishi",
  description: "Abdul Raziq Quraishi Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
