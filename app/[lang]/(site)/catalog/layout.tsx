import "@/app/globals.css";
import BackButton from "@/components/ui/BackButton";

export default async function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackButton>Back</BackButton>
      {children}
    </>
  );
}
