import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      label='search'
      variant='filled'
      fullWidth
      type='search'
      value={value}
      onChange={onChange}
      sx={{mb:'2rem'}}
    />
  );
};

export default Search;
