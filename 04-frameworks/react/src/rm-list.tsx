import React from "react";
import { Link, generatePath } from "react-router-dom";
import { CharacterSearch } from "./character-search";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface CharacterEntity {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}

export const RMListPage: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const navigate = useNavigate();

  const handleSearch  = (character: string) => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
    .then((response) => {
      if(response.ok)
        return response.json();
      else 
        throw new Error("Error fetching characters");
    })
    .then((json) => setCharacters(json.results))
    .catch(() => {});
  };

  return (
    <>
      <Card sx={{ padding: "20px" }} >
        <CardContent>
          <Typography variant="h2" component="h2">
            Rick and Morty Characters
          </Typography>
          <br/>
          <Typography variant="body1" >
            <Link to="/list">Navigate to Github List Page</Link>
          </Typography>
          <br/>
          <CharacterSearch onSearch={handleSearch} />
          <br/><br/>
            <List>
              {characters.map((ch) => (
                <>
                  <ListItem key={ch.id} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={() => navigate(`/rm-detail/${ch.id}`)}
                    >
                      <ListItemAvatar>
                        <Avatar alt={ch.name} src={ch.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={ch.name}
                        secondary={<Typography>{ch.species}</Typography>}
                      />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
        </CardContent>
      </Card>
    </>
  );
};
