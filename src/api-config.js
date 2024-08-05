let backendHost;

// 현재 호스트에 따라 백엔드 호스트 주소를 설정합니다.
const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:8080"; // 로컬 개발 서버 주소
} else {
  backendHost = "http://backendtest-env.eba-3tevwkbf.ap-northeast-2.elasticbeanstalk.com"; // 배포된 서버 주소
}

export const API_BASE_URL = backendHost;
