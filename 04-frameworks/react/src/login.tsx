import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <Card sx={{ padding: "20px",maxWidth: 500,margin: "0 auto" }} >
        <CardHeader title="Login Page" />
          <CardContent>
            <form onSubmit={handleNavigation}>
              <div>
                <div>
                <TextField id="outlined-basic" label="Username" variant="outlined" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <br/>
                <div>
                  <TextField id="outlined-basic" label="Password" type="password" variant="outlined"  
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>
              <br />
              <Button variant="contained" type="submit">Login</Button>
            </form>
          </CardContent>
      </Card>
    </>
  );
};
