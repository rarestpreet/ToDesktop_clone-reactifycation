import { Link } from "react-router";
import BrandContainer from "../elements/BrandContainer";

function Footer() {
    return (
        <footer class="">
            <div class="p-10 flex flex-col gap-7 items-center bg-gray-50 rounded-xl sm:flex-row sm:justify-between">
                <BrandContainer />
                <div id="social-links" class="flex gap-3 items-center">
                    <Link to="/"
                        class="bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-400 transition">
                        <i class="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to="/"
                        class="bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-400 transition">
                        <i class="fa-brands fa-discord"></i>
                    </Link>
                    <Link to="/" class="text-gray-500 border-b-2 hover:text-black transition ">
                        <span class=" text-lg font-medium">
                            Documentation
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer