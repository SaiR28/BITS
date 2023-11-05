import { SVGProps } from "react"
import Image from "next/image"
import Link from "next/link"
function Menu(){
  return <button className="pr-2">
<IcRoundMenu className="w-auto h-7 aspect-square"/>
  </button>
}



export function IcRoundMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg>
  )
}


export function IcBaselineSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path></svg>
  )
}

function SearchBar(){
    return <div className="flex items-center ">
      <Menu/>
        <input className="h-8 w-80 indent-2" />
        <button className="bg-blue-300 h-8 w-auto aspect-square flex items-center justify-center">
        <IcBaselineSearch/>
        </button>
    </div>
}
function Profile(props:any){
    return <div className='bg-blue-200 rounded p-2 flex gap-4 items-center '>
        <h1>{props.user}</h1>
        <Image className="rounded" height={28} width={28} unoptimized={true} src={'/profile.png'} alt=""/>
    </div>
}
export function NavBar(props:any){
    return<div className={`bg-blue-100  flex p-2 gap-2 h-full  items-center justify-between`}>
    <SearchBar/>
    <Profile user={props.user}/>
    <Link href={'/'} className="fixed right-0 bg-red-300 h-12 rounded-l-2xl flex items-center p-3 top-24 hover:bg-red-500">Temporary Logout</Link>
    </div>
}