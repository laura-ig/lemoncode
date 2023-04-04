import React from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    onSearch: (character: string) => void;
}

export const CharacterSearch: React.FC<Props> = (props) => {
    const { onSearch } = props;
    const [ character, setCharacter ] = React.useState("");

    React.useEffect(() => {
        onSearch(character);
    }, []);

    return (<>
        <TextField id="outlined-basic" label="Character Name" variant="outlined" size="small"
                    value={character}
                    onChange={(e) =>setCharacter(e.target.value)}
                    />
        &nbsp;&nbsp;
        <Button variant="outlined" size="large" startIcon={<SearchIcon />} onClick={() => onSearch(character)}>Search</Button>
    </>);
};