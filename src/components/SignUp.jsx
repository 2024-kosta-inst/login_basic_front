import { useForm } from "react-hook-form";
import { userAPI } from "../api/service/user";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, setValue, getValues, setError, clearErrors } = useForm();

    const onSubmit = async (data) => {        
        try {
            const res = await userAPI.addUser(data);
            if (res.status === 201) {
                alert("회원가입 완료");
            }
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
        }
    }

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")}></input>
                <input {...register("name")}></input>
                <input {...register("password")}></input>
                <button>회원가입</button>
            </form>
        </div>
    );
}
 
export default SignUp;