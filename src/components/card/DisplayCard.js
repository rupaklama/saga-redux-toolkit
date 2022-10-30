import { Button, Card, CardActions, CardHeader, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DisplayCard = ({ id, title, image }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ backgroundColor: "lightblue", height: 350 }}>
      <Grid container direction="column" alignItems="center">
        <CardHeader title={title} />

        <CardMedia
          sx={{
            width: 200,
            height: 200,
            backgroundSize: "contain",
          }}
          image={image}
          alt={title}
        />

        <CardActions>
          <Button size="small" onClick={() => navigate(`/movie/${id}`)}>
            View
          </Button>
        </CardActions>
      </Grid>
    </Card>
  );
};
export default DisplayCard;
