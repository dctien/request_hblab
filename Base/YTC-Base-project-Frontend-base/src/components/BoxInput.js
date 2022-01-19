import { Paper, TextField } from "@material-ui/core";
import Title from "./Title";

const FilterItemInput = (props) => {
  const { title, valueInput, handleChangeInput, idInput, style, typeInput } =
    props;
  return (
    <Paper elevation={0} className={style}>
      <Title title={title} />
      <TextField
        value={valueInput}
        onChange={handleChangeInput}
        id={idInput}
        type={typeInput}
        variant="outlined"
        fullWidth
      />
    </Paper>
  );
};

export default FilterItemInput;
