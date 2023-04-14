import { useRouter } from "next/router";
const ViewQuestion = () => {
    const router = useRouter()
    const {question_id} = router.query
    return (
        <div>
            <h1>View Question {question_id}</h1>
        </div>
    )
}

export default ViewQuestion