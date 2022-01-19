import { MenuItem, OutlinedInput, Paper, Select } from "@material-ui/core";
import Title from "./Title";

const FilterItemSelect = (props) => {
  const { title, children, style, handleChangeSelect, valueSelect, idSelect } =
    props;
  return (
    <Paper elevation={0} className={style}>
      <Title title={title} />
      <Select
        value={valueSelect}
        onChange={handleChangeSelect}
        id={idSelect}
        input={<OutlinedInput />}
        fullWidth
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="one">Ten</MenuItem>
        {children}
      </Select>
    </Paper>
  );
};

export default FilterItemSelect;
