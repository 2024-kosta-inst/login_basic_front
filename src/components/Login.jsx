import { useForm } from "react-hook-form";
import { userAPI } from "../api/service/user";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {        
        try {
            const res = await userAPI.login(data);
            if (res.status === 200) {
                alert("로그인");
            }
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
        }
    }

    const handleGoogleLogin = () => {
        // 구글 로그인 버튼 클릭 시 이동하는 경로 지정
        const params = new URLSearchParams({
            scope: "email profile",
            response_type: "code",
            redirect_uri: "http://localhost:3000/oauth/google",
            client_id: "888863716402-4aaogtdc2ipv2nfndcp7a0ee3bd5hd4t.apps.googleusercontent.com",
        });
        const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

        // 지정한 경로로 이동
        window.location.href = GOOGLE_URL;
    }

    const handleKakaoLogin = () => {
        // 카카오 로그인 버튼 클릭 시 이동하는 경로 지정
        const params = new URLSearchParams({
            response_type: "code",
            redirect_uri: "http://localhost:3000/oauth/kakao",
            client_id: "f240f525b7efb9f1b64e9f0ee8023742",
        });
        const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?${params.toString()}`;

        // 지정한 경로로 이동
        window.location.href = KAKAO_URL;
    }

    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")}></input>
                <input {...register("password")}></input>
                <button>로그인</button>
            </form>
            
            <button onClick={() => handleKakaoLogin()}>카카오</button>
            <button onClick={() => handleGoogleLogin()}>구글</button>
        </div>
    );
}
 
export default Login;