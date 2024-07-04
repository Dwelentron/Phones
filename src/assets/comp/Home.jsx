import { FaCopyright } from "react-icons/fa";
import Best from "./Best";
import Deal from "./Deal";
import User from "./Slider";
import Footer from "./Footer";

export default function Home(){
    
    return(
        <div className="home">
            <div className="py-[5%]">
                <section className="text-gray-100 max-w-[770px] bg-black p-11 rounded-lg bg-opacity-55 mx-auto my-auto">
                    <p className="intro">Welcome to ShopSmart, your ultimate guide to the world of smartphones! Whether you're a tech enthusiast or just looking for the perfect phone to suit your needs, we've got you covered. Dive into our expert reviews, latest news, and helpful tips to make informed decisions and find the best deals. Stay smart, stay connected, and make your next phone purchase a breeze with ShopSmart!</p>
                    <section className="text-center mt-10"> 
                        <button className="butt border-white border-2 p-4 rounded-xl ring-green-800 ring-4 hover:ring-green-500 hover:border-gray-800 hover:text-slate-800">Shop with Us</button>
                    </section>
                </section>
            </div>
            <section>
                <Best />
            </section>
            <section>
                <Deal />
            </section>
            <section>
                <User />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}