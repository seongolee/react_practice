import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [userName, setUserName] = useState("");

    // 회원 이름 길이 유효성 검사
    const nameCheck = userName !== "" && userName.length < 2;

    const SignUpDatas = [
        {
            name: userName,
            title: "회원이름",
            validation: nameCheck,
            inputAlert: "두 글자 이상의 이름을 입력해주세요.",
            setName: setUserName,
        }
    ];

    const handleBtn = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/add',{
                params: {
                    a: 1,
                    b: 2
                }
            });
            alert(response.data["result"]);
            console.log(response.data)
        } catch (e){
            console.error(e)
        }
    }

    return (
        <div className="App">
            <button onClick={handleBtn}>테스트</button>
        </div>
    );
};

export default SignUp;