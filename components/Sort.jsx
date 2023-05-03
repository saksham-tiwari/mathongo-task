import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Sort(props) {
  const {sort,setSort} = props
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={1}>Default</MenuItem>
          <MenuItem value={2}>Name (Ascending)</MenuItem>
          <MenuItem value={3}>Name (Descending)</MenuItem>
          <MenuItem value={4}>Difficulty (Easy-Hard)</MenuItem>
          <MenuItem value={5}>Difficulty (Hard-Easy)</MenuItem>
          <MenuItem value={6}>Duration (Ascending)</MenuItem>
          <MenuItem value={7}>Duration (Descending)</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}