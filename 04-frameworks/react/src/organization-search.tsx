import React from "react";
import { MyCompanyContext } from "./app";

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
        <span>Organization</span>&nbsp;&nbsp;
        <input 
            type="text" 
            value={company} 
            onChange={ (e) => {
                changeCompany(e.target.value);
            }}/>&nbsp;&nbsp;
        <button onClick={() => onSearch(company)}>Search</button>
    </>);
};