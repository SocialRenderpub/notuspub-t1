 import {useEffect} from 'react'
// import {signOut} from 'next-auth/client'

// export default function signout() {
//     useEffect(() => {
//         signOut({callbackUrl:"/"})
//     })
//     return (
//         <>
//         </>
//     )
// }

// export default redirect('https://mydomain.auth.ap-south-1.amazoncognito.com/logout?client_id=<CLIENT_ID>&logout_uri=http://localhost:3000')

export default function signout() {
    useEffect(() => {
        window.location.assign('https://3nextauth.auth.ap-south-1.amazoncognito.com/logout?client_id=6lbt221p33u3ib6r0agl0gpmbf&logout_uri=https://nextauth-with-cognito.vercel.app')
    })
    return(
        <>
        </>
    )
}