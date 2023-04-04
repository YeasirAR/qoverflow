import {useRouter} from 'next/router'
import Login from '@/components/auth/login'
import Signup from '@/components/auth/signup'

const Auth = () => {
    const router = useRouter()
    const {auth} = router.query

    return (
        <div>
            {auth==='login' && <Login />}
            {auth==='signup' && <Signup />}
        </div>
    )
}
export default Auth