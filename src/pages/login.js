import React from "react"
import {
  Avatar,
  Container,
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { makeStyles } from "@material-ui/core/styles"
// import { Link as RouterLink } from "react-router-dom"
import { useForm } from "react-hook-form"
// import { useMutation } from "@apollo/client"
// import Notification from "../components/Notification"
// import Loading from "../components/Loading"
import Link from "../components/Link"
// import UserProvider from "../contexts/UserProvider"
// import { LOGIN_INPUT } from "../graphql/graphql"
import TopLayout from "../components/TopLayout"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Login(props) {
  const classes = useStyles()
  const { handleSubmit, register, errors } = useForm()
  //   const [errMsg, setErrMsg] = useState("")
  //   const userCtx = React.useContext(UserProvider.context)

  //   const [loginUser, { loading }] = useMutation(LOGIN_INPUT, {
  //     update(proxy, result) {
  //       userCtx.login(result.data.login)
  //       // props.history.push("/");
  //       // window.open("/", "_self");
  //       window.close()
  //     },

  //     onError(err) {
  //       console.error(err)
  //       const message = err.graphQLErrors[0].message
  //       setErrMsg(message)
  //       return err
  //     },
  //   })

  const onSubmit = handleSubmit(data => {
    // const { email, password } = data
    //   loginUser({
    //     variables: {
    //       email,
    //       password,
    //     },
    //   })
  })

  //   if (loading) return <Loading />

  return (
    <TopLayout>
      <Container component="main" maxWidth="xs">
        {/* <Notification message={errMsg} /> */}
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Log In
          </Typography>

          {/* <div style={{ marginTop: "1em" }}>
                    <Facebook setLoginRes={setLoginRes} />
                </div> */}

          <form className={classes.form} onSubmit={onSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              inputRef={register({
                required: true,
                pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
              })}
              error={errors.email && true}
              helperText={errors.email && "A valid email is required"}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register({
                required: true,
                minLength: 10,
                maxLength: 40,
              })}
              error={errors.password && true}
              helperText={
                errors.password && "Password must be minimum twelve characters"
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" to="/signup">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </TopLayout>
  )
}
