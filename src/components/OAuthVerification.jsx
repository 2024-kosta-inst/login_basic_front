import { useParams } from "react-router-dom";
import { oauthAPI } from "../api/service/oauth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const OAuthVerification = () => {
    const { provider } = useParams();
    const code = new URLSearchParams(window.location.search).get("code");

    const [authData, setAuthData] = useState();
    const signUp = async() => {
        try {
            const res = await oauthAPI.signUp(provider, code);
            if (res.data.accessToken) {
                alert("이메일 인증없이 로그인 성공" + res.data.accessToken);
                return;
            }
            setAuthData(res.data); // {key: '3721111753', email: null, name: '최인규', provider: 'KAKAO', ableToLogin: false}
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        signUp();
    }, [code]);
    
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {        
        try {
            const res = await oauthAPI.login({
                ...authData,
                email: data.email
            });
            if (res.status == 200) {
                alert("이메일 인증 후 로그인 성공" + res.data.accessToken);
            }
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
        }
    }

    if(authData && !authData.ableToLogin) {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")}></input>
                <button>인증</button>
            </form>
        );
    }
    return (
        <h1>로그인 진행 중...</h1> 
    );
}
 
export default OAuthVerification;
