import { useEffect, useState } from "react";
import { qrAPI } from "../api/service/qr";
import { useForm } from "react-hook-form";

const QRCode = () => {
    const { register, handleSubmit } = useForm();
    const [imageData, setImageData] = useState(null);

    const onSubmit = async (data) => {        
        try {
            const res = await qrAPI.getQR(data.link);
            const imageUrl = URL.createObjectURL(res.data);
            setImageData(imageUrl);
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="url" placeholder="주소 입력" {...register("link")} />
                <button>입력</button>
            </form>
            {imageData ?
                <img src={imageData} alt="QR Code" /> : ""
            }
        </>
    );
}
 
export default QRCode;