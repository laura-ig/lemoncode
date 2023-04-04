import React from "react";
import { Link, generatePath } from "react-router-dom";
import { OrganizationSearch } from "./organization-search";
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

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const navigate = useNavigate();

  const handleSearch  = (organization: string) => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => {
      if(response.ok)
        return response.json();
      else 
        throw new Error("Error fetching members");
    })
    .then((json) => setMembers(json))
    .catch(() => {});
  };

  return (
    <>
      <Card sx={{ padding: "20px" }} >
        <CardContent>
          <Typography variant="h2" component="h2">
            List Page
          </Typography>
          <br/>
          <OrganizationSearch onSearch={handleSearch} />
          <br/><br/>
          <div className="">
            <List>
              {members.map((member) => (
                <>
                  <ListItem key={member.id} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={() => navigate(`/detail/${member.login}`)}
                    >
                      <ListItemAvatar>
                        <Avatar alt={member.login} src={member.avatar_url} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={member.login}
                        secondary={<Typography>ID: {member.id}</Typography>}
                      />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </div>
          <Typography variant="body1" >
            <Link to="/detail">Navigate to detail page</Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
