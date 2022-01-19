import { Typography } from "@material-ui/core";

const Title = (props) => {
  const { title } = props;
  return (
    <Typography variant="body2" {...props}>
      {title}
    </Typography>
  );
};

export default Title;
