import "@/app/globals.css";
import BackButton from "@/components/ui/BackButton";
import PageWrapper from "@/components/ui/PageWrapper";

export default async function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackButton>Back</BackButton>
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}
