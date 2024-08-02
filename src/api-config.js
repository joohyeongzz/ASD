let backendHost; //백엔드 호스트 주소 결정

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost") {
  backendHost = "http://todo-backend-dev2.ap-northeast-2.elasticbeanstalk.com";
} else {
    backendHost = "http://todo-backend-dev2.ap-northeast-2.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;