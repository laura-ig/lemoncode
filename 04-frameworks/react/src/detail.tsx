import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";

interface MemberDetailEntity {
    id : string;
    login: string;
    name: string;
    company: string;
    bio: string;
};
  
const createDefaultMemberDetail = () => ({
     id: '',
     login: '',
     name: '',
     company: '',
     bio: '',
})

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(createDefaultMemberDetail());
  const {id} = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <>
      <Card sx={{ padding: "20px" }} >
        <CardContent>
            <Typography variant="h2" component="h2" mb={5}>
              Detail Page
            </Typography>
            <Typography variant="h4">
              User Id: {id}
            </Typography>
            <Typography variant="body1">
              <p> id: {member.id}</p>
              <p> login: {member.login}</p>
              <p> name: {member.name}</p>
              <p> company: {member.company}</p>
              <p> bio: {member.bio}</p>
              <Link to="/list">Back to list page</Link>
            </Typography>
        </CardContent>
      </Card>
    </>
  );
};
