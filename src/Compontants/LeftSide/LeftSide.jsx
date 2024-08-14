import './LeftSide.css'
import product from  '../../assets/product.jpg'
function LeftSide()
{
    return(
        <div id="LeftSideDiv">
        <img src={product}/>
        </div>
    )
}
export default LeftSide