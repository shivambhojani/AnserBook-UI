import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  menus: {
    marginRight: "10px",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  margin: {
    margin: "15px",
  },
  cancel: {
    backgroundColor: "gray !important",
    marginLeft: "15px !important",
  },
});

export default useStyles;
