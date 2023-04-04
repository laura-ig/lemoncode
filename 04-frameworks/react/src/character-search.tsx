import React from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "use-debounce";

interface Props {
    onSearch: (character: string) => void;
}

export const CharacterSearch: React.FC<Props> = (props) => {
    const { onSearch } = props;
    const [ character, setCharacter ] = React.useState("");
    const [debounceCharacter] = useDebounce(character,1000);

    React.useEffect(() => {
        onSearch(character);
    }, [debounceCharacter]);

    return (<>
        <TextField id="outlined-basic" label="Search by Character Name" variant="outlined" size="small"
                    value={character}
                    onChange={(e) =>setCharacter(e.target.value)}
                    />
    </>);
};