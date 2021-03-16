import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './header.module.css'

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header () {
  const [ session, loading ] = useSession()
  
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p className={`nojs-show ${(!session && loading) ? styles.loading : styles.loaded}`}>
          {!session && <>
            <span className={styles.notSignedInText}>You are not signed in</span>
            <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn("cognito")
                }}
              >
                Sign in
              </a>
          </>}
          {session && <>
            {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} className={styles.avatar}/>}
            <span className={styles.signedInText}>
              <small>Signed in as</small><br/>
              <strong>{session.user.email || session.user.name}</strong>
              </span>
            <a
                 href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut({callbackUrl:'https://nextauth-with-cognito.vercel.app/signout'})
                }}
              >
                Sign out
              </a>
              {/* <a
                href={'https://3nextauth.auth.ap-south-1.amazoncognito.com/logout?client_id=6lbt221p33u3ib6r0agl0gpmbf&logout_uri=http://localhost:3000/signout'}
                className={styles.button}
              >
                Sign out
              </a> */}
          </>}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}><Link href="/"><a>Home</a></Link></li>
          <li className={styles.navItem}><Link href="/client"><a>Client</a></Link></li>
          <li className={styles.navItem}><Link href="/server"><a>Server</a></Link></li>
          <li className={styles.navItem}><Link href="/protected"><a>Protected</a></Link></li>
          <li className={styles.navItem}><Link href="/api-example"><a>API</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}
