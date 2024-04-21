import NavigationMenuTop from "@/components/ui/NavigationMemuTop/NavigationMemuTop";
import { Locale } from "@/i18n-config";
import "@/app/globals.css";

export const revalidate = 0;

export default async function RootLayout({
  children,
  params,
  authModal,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
  authModal: React.ReactNode;
}>) {
  return (
    <>
      <NavigationMenuTop lang={params?.lang} />
      {children}
      <div>{authModal}</div>
    </>
  );
}
