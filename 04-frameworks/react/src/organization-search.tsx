import React from "react";

interface Props {
    onSearch: (organization: string) => void;
}

export const OrganizationSearch: React.FC<Props> = (props) => {
    const { onSearch } = props;
    const [organization, setOrganization] = React.useState("lemoncode");

    React.useEffect(() => {
        onSearch(organization);
    }, []);

    return (<>
        <span>Organization</span>&nbsp;&nbsp;
        <input 
            type="text" 
            value={organization} 
            onChange={ (e) => {
                setOrganization(e.target.value);
            }}/>&nbsp;&nbsp;
        <button onClick={() => onSearch(organization)}>Search</button>
    </>);
};