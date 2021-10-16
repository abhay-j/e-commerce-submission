import React, { useRef, useState } from "react";
import { TextField, Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    padding: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "pink",
  },
});
function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  const emailRef = useRef();
  const passRef = useRef();
  const confRef = useRef();

  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passRef.current.value);

    if (passRef.current.value !== confRef.current.value) {
      console.log("we are here");
      return setError("passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passRef.current.value);
      history.push("/login");
    } catch (err) {
      console.log(err);
      console.log(emailRef.current.value, passRef.current.value);
      setError("faild to create an account");
    }
    setLoading(false);
  };
  return (
    <div className={classes.root}>
      <Typography variant="h4">Sign Up</Typography>

      {error ? <Alert severity="warning">{error}</Alert> : null}

      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            inputRef={emailRef}
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="password"
            type="password"
            variant="outlined"
            inputRef={passRef}
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="confirm password"
            type="password"
            variant="outlined"
            inputRef={confRef}
            margin="normal"
          />
          <Button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            variant="outlined"
          >
            Submit
          </Button>
        </Box>
      </form>
      <Typography variant="subtitle1">
        Have an account? <Link to="/login">Login</Link>
      </Typography>
    </div>
  );
}

export default SignUp;
