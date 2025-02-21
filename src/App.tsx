import { Container, createTheme, CssBaseline, Grid2, ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";
import ChatList from "./components/chat-list/ChatList";
import { usePath } from "./hooks/usePath";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  const { path } = usePath();

  const showChatList = path === '/' || path.includes('/chats');
  
  return <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Header/>
      <Guard>
        { showChatList ? (
          <Grid2 container>
            <Grid2 size={3}>
              <ChatList/>
            </Grid2>
            <Grid2 size={9}>
              <Routes/>
            </Grid2>
          </Grid2>
        ) : (
          <Routes/>
        )}
      </Guard>
      <Snackbar/>
    </ThemeProvider>
  </ApolloProvider>
}

const Routes = () => {
  return <Container sx={{ height: '100%'}}>
    <RouterProvider router={router}/>
  </Container>
}

export default App;
