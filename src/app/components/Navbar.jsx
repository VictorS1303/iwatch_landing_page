import { IoLogoApple } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { CiShoppingBasket } from "react-icons/ci"

const Navbar = () =>
{
    return (
        <nav class="flex justify-between items-center w-400 text-md bg-dark">
            <IoLogoApple size={60} />

            <ul class="flex justify-around gap-x-24">
                <li class="py-2 px-5">
                    <a href="#">Mac</a>
                </li>
                <li class="py-2 px-5">
                    <a href="#">iPhone</a>
                </li>
                <li class="py-2 px-5">
                    <a href="#">iPad</a>
                </li>
                <li class="bg-white py-2 px-8 text-blue-200 rounded-full shadow-md">
                    <a href="#">iWatch</a>
                </li>
                <li class="py-2 px-5">
                    <a href="#">Support</a>
                </li>
            </ul>

            <div class="flex gap-4">
                <CiSearch size={30} class="cursor-pointer" />
                <span className="h-.5 w-0.5 bg-white"></span>
                <CiShoppingBasket size={30} class="cursor-pointer" />
            </div>
        </nav>
    )
}

export default Navbar