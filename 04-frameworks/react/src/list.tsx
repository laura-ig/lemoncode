import React from "react";
import { Link } from "react-router-dom";
import { OrganizationSearch } from "./organization-search";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

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
      <h2>List page</h2>
      <OrganizationSearch onSearch={handleSearch}/>
      <br/><br/>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
