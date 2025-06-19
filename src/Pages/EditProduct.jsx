import NavBar from "../Components/NavBar.jsx";
import EditProductForm from "../Components/EditProductForm.jsx";
import {useParams} from "react-router-dom";


function EditProduct() {

    const { product_id } = useParams();


    return (
        <>
            <NavBar />
            <EditProductForm  product_id={product_id} />
        </>
    );
}

export default EditProduct;