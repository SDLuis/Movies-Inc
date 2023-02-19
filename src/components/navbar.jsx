import { Link } from "react-router-dom"
import { FavoriteList } from "./icons/favorite"
export default function Navbar() {
  return (
    <div className='w-full h-16 flex items-center justify-between p-4 mb-5 bg-gray-800'>
      <Link to='/'><p className='text-2xl font-medium'>Movies Inc</p></Link>
      <Link to='/favorites'><FavoriteList /></Link>
    </div>
  )
}
