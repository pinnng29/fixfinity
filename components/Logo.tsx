import Link from "next/link";


export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold">
        Fix
        <span className="ml-1 rounded-md bg-gradient-to-br from-violet-400 to-cyan-500 p-1 text-foreground" >
          Finity
        </span>
      </h1>
    </Link>
  )
}