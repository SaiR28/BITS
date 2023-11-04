import Link from "next/link"

export function SideBar(){
    return <div className="h-screen bg-blue-100 w-52 p-2">
        <h1 className="font-black text-2xl">Connected</h1>
        <Link href={'/'}>Dashboard</Link>
    </div>
}