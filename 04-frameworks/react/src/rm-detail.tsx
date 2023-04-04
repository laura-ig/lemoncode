import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";

interface MemberDetailEntity {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
};
  
const createDefaultCharacterDetail = () => ({
     id: '',
     name: '',
     status: '',
     species: '',
     type: '',
     gender: '',
     image: '',
     url: '',
})

export const RMDetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(createDefaultCharacterDetail());
  const {id} = useParams();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <>
      <Card sx={{ maxWidth:"500px" }} >
        <CardMedia
          component="img"
          height="250"
          image={member.image}
          alt="Paella dish"
        />
        <CardContent>
            <Typography variant="h4">
              {member.name}
            </Typography>
            <Typography variant="body1">
              <p> id: {member.id}</p>
              <p> Name: {member.name}</p>
              <p> Species: {member.species}</p>
              <p> Status: {member.status}</p>
              <p> Gender: {member.gender}</p>
              <br/>
              <Link to="/rm-list">Back to list page</Link>
            </Typography>
        </CardContent>
      </Card>
    </>
  );
};
