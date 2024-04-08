import axios from 'axios';

// axios 인스턴스
const instance = axios.create({
    baseURL: 'https://localhost:3000',
    timeout: 1000
});

// 요청
instance.interceptors.request.use(
    function (config) {
        // 요청 성공 직전 호출됩니다.
        // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
        config.headers["Content-Type"] = "application/json; charset=utf-8";
        config.headers["Authorization"] = " 토큰 값";
        return config;
    }, 
    function (error) {
        // 요청 에러 직전 호출됩니다.
        console.log(error)
        return Promise.reject(error);
    }
);


// 응답
instance.interceptors.response.use(
    function (response) {
        console.log(response)
        return response;
    },

    function (error) {
        console.log(error)
        return Promise.reject(error);
    }
);
