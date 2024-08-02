let backendHost; //백엔드 호스트 주소 결정

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost") {
  backendHost = "http://192.168.100.108:8080";
} else {
    backendHost = "http://192.168.100.108:8080";
}

export const API_BASE_URL = `${backendHost}`;