import "@/app/globals.css";
export default async function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
