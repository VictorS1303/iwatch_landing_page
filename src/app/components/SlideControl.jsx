import { FaArrowLeftLong } from "react-icons/fa6"
import { FaArrowRightLong } from "react-icons/fa6"

const SlideControl = () =>
{
    return (
        <div className="slide-controller-container flex items-center gap-4 mt-24">
            <button className="btn slide-control-btn prev-btn cursor-pointer">
                <FaArrowLeftLong size={30}/>
            </button>
            <span className="slide-number text-2xl">1</span>

            <button className="btn slide-control-btn prev-btn cursor-pointer">
                <FaArrowRightLong size={30}/>
            </button>
        </div>
    )
}
 
export default SlideControl