import { useRouter } from "next/router";
import ViewQSN from "@/components/question/viewquestion";
export default function ViewQuestion() {
  const router = useRouter();
  const { question_id } = router.query;

  return (
    <div>
      <header>
        <title>qOverflow</title>
      </header>
      <ViewQSN question_id = {question_id}/>
    </div>
  );
}
