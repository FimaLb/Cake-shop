import NavigationMenuTop from "@/components/ui/NavigationMemuTop/NavigationMemuTop";
import { Locale } from "@/i18n-config";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <>
      <NavigationMenuTop lang={params?.lang} />
      {children}
    </>
  );
}
