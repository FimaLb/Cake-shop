import "@/app/globals.css";
import { i18n, type Locale } from "@/i18n-config";

export default async function Root({
  children,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return <>{children}</>;
}
