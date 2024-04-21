import comments from "@/actions/comments/comments";
import CommentForm from "@/components/ui/CommentForm/CommentForm";

export default function CommentsPage() {
  return (
    <>
      <CommentForm action={comments} />
    </>
  );
}
