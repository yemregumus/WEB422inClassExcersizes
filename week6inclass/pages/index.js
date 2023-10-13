import Link from "next/link"
export default function Home() {
  return (
    <>
      <div>
        <h1>Week 6</h1>
        <br/>
        <h2>WEB422 </h2>
        <h3>API Routes & Middleware</h3>
        <h1>Home Page</h1>    
        <Link href="/">HOME</Link>| <Link href="/about">About</Link> | <Link href="/profile">Profile</Link>

      </div>
    </>
  )
}
