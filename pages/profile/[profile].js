import {useRouter} from 'next/router'


const Profile = () => {
    const router = useRouter()
    const {profile} = router.query

    return (
        <div>
           <h1>Profile of {profile}</h1>
        </div>
    )
}
export default Profile