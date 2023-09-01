import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Kantan",
  description: "Task and Time Management App",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
