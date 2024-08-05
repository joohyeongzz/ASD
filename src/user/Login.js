import React from "react";
import { signin } from "../service/ApiService";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");
    
        try {
          const success = await signin({ username, password });
          if (success) {
            navigate("/"); // 로그인 성공 후 홈으로 리다이렉트
          } else {
            // 로그인 실패 시 사용자에게 알림
            alert("로그인 실패. 아이디와 비밀번호를 확인해주세요.");
          }
        } catch (error) {
          console.error("로그인 중 오류 발생:", error);
          alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
      };


  return (
    <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {/* submit 버튼을 누르면 handleSubmit이 실행됨...  */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="아이디"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="password"
              label="패스워드"
              type="password"
              name="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
          <Grid item>
            <Link to="/signup" variant="body2">
              계정이 없습니까? 여기서 가입하세요.
            </Link>
          </Grid>
        </Grid>  
      </form>
    </Container>

  );
}

export default Login;