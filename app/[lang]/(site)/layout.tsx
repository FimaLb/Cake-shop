import NavigationMenuTop from "@/components/ui/NavigationMemuTop/NavigationMemuTop";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationMenuTop />
      {children}
    </>
  );
}
