import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

const styles = {
  content: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: 2,
    borderRadius: 1,
    flexGrow: 1,
  },
};

export default function ContentWrapper() {
  return (
    <Paper sx={styles.content} elevation={24}>
      <Typography>Title</Typography>
      <Divider sx={{ width: "100%" }} />
    </Paper>
  );
}
