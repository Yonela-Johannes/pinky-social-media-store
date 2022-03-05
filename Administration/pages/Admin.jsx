import Sidebar from '../Components/Sidebar'
import AddProducts from '../Components/AddProducts'
import Users from '../Components/Users'

export default function Admin() {
  return (
    <div className='admin'>
        <Sidebar />
        <div className='adminContainer'>
          <AddProducts />
          {/* <Users /> */}
        </div>
    </div>
  )
}
