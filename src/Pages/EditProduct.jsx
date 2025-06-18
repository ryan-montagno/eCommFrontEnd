import NavBar from "../Components/NavBar.jsx";
import EditProductForm from "../Components/EditProductForm.jsx";
import {useLocation} from "react-router-dom";


function EditProduct() {

    const location = useLocation();
    const product = location.state || {};

    return (
        <>
            <NavBar />
            <EditProductForm product={product}/>
        </>
    );
}

export default EditProduct;