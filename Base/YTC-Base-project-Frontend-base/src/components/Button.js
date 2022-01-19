import Button from "@material-ui/core/Button";

const ButtonComponent = (props) => {
  const { title } = props;
  return (
    <Button variant="contained" color="primary" {...props}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
