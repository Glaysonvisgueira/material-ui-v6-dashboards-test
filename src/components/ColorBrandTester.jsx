import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
  gridStyles: {
    height: 140,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#030e4f",
    padding: 2,
    borderRadius: 1,
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  box: {
    width: 110,
    height: "100%",
    ml: 2,
    borderRadius: 1,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#b6b6b6",
  },
  disabledText: {
    color: "#5a5a5a",
  },
  brand: {
    backgroundColor: "#f08616",
  },
};

export default function ColorBrandTester() {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      size={{ xs: 12 }}
      sx={styles.gridStyles}
    >
      <Box sx={styles.content}>
        <Box>
          <Typography sx={styles.primaryText}>Primary</Typography>
          <Typography sx={styles.secondaryText}>Secondary</Typography>
          <Typography sx={styles.disabledText}>Disabled</Typography>
        </Box>

        <Box sx={[styles.box, styles.brand]}></Box>
        <Box sx={styles.box}></Box>
        <Box sx={styles.box}></Box>
      </Box>
    </Grid>
  );
}
