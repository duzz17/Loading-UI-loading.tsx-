export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <h1>Root Layout</h1>
        {/* file layout.tsx của "src" sẽ là layout bao phủ toàn bộ trang các Route của trang web
        bất kể truy cập vào routes nào cũng sẽ hiện layout này đầu tiên  */}
        {children}
      </body>
    </html>
  );
}
