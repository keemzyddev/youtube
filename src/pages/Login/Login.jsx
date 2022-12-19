import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import {
  Button,
  Container,
  Error,
  Form,
  Input,
  LINK,
  Title,
  Wrapper,
} from "./style";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  // const { currentUser, isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    // setTimeout(navigate("/"), 10000);
    setTimeout(() => {
      window.location.reload();
    }, 7000);
    // navigate("/");
    // if (currentUser !== null) return navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button>LOGIN</Button>

          {/* <Button disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>} */}
          <LINK>FORGOT PASSWORD?</LINK>
          <LINK>CREATE A NEW ACCOUNT</LINK>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
