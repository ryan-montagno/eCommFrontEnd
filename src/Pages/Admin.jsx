
import NavBar from "../Components/NavBar.jsx";

function Admin() {
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-3 gap-4">
                    <a href="/addproduct" className="text-white hover:text-gray-300">
                        <button className="w-32 h-32 bg-blue-500 text-white text-xl">Add a Product</button>
                    </a>
                    <a href="/editproductlookup" className="text-white hover:text-gray-300">
                        <button className="w-32 h-32 bg-blue-500 text-white text-xl">Edit a Product</button>
                    </a>
                    <a href="/deleteproduct" className="text-white hover:text-gray-300">
                        <button className="w-32 h-32 bg-blue-500 text-white text-xl">Delete a Product</button>
                    </a>
                </div>
            </div>
        </>
    );
}



export default Admin;

