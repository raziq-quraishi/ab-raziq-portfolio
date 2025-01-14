
import Layout from "./components/Layout";
import "./globals.css";
export const metadata = {
  title: "Quraishi",
  description: "Abdul Raziq Quraishi Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}

        </Layout>
      </body>
    </html>
  );
}
