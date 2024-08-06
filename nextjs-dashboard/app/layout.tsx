import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

/*
This is called a root layout and is required. Any UI you add to the root layout will be shared across all pages in your application.
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
