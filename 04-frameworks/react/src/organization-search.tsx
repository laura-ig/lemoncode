import React from "react";
import { MyCompanyContext } from "./app";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    onSearch: (organization: string) => void;
}

export const OrganizationSearch: React.FC<Props> = (props) => {
    const { onSearch } = props;
    const { company, changeCompany } = React.useContext(MyCompanyContext);

    React.useEffect(() => {
        onSearch(company);
    }, []);

    return (<>
        <TextField id="outlined-basic" label="Organization" variant="outlined" size="small"
                    value={company}
                    onChange={(e) =>changeCompany(e.target.value)}/>
        &nbsp;&nbsp;
        <Button variant="outlined" size="large" startIcon={<SearchIcon />} onClick={() => onSearch(company)}>Search</Button>
    </>);
};