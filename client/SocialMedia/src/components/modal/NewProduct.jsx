import './newproduct.css'
import { MdClose} from "react-icons/md";
export const NewProduct = ({showAdd, setShowAdd}) => {
  return (
    <div className='newProduct'>
        <div className='newProductContainer'>
        <MdClose  onClick={() => setShowAdd(!showAdd)} className='icon'/>
            <h3 className='title'>Add New Product</h3>
            <div className='productContentWrapper'>
                <div className='productContent'>
                    <label>Name</label>
                    <input type='text' placeholder="enter product name" />
                </div>
                <div className='productContent'>
                    <label>Image</label>
                    <input />
                </div>
                <div className='productContent'>
                    <label>Previous Price</label>
                    <input type='number' placeholder="enter previous price"/>
                </div>            
                <div className='productContent'>
                    <label>Current Price</label>
                    <input type='number' placeholder="enter price" />
                </div> 
                <div className='productContent'>
                    <label>How many in stock</label>
                    <input type='number' placeholder='enter how many in stock' />
                </div>   
            </div>
         </div>
    </div>
  )
}
