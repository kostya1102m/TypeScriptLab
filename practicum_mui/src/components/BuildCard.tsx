import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: "justify",
  marginTop: theme.spacing(1),
}));

interface ComponentProps {
  building: {
    img: string;
    title: string;
    description: string[];
  };
  index: number;
}
function BuildCard({ building, index }: ComponentProps) {
  const isEvenCard = (index: number) => index % 2 === 0;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: isEvenCard(index) ? "row-reverse" : "row",
        },
      }}
    >
      <Box>
        <CardContent
          sx={{
            display: {
                xs: 'flex',
                sm: 'grid'
            },
            flexDirection: "column",
            justifyContent: "center"
            
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              order: {
                xs: 1,
                sm: 1,
              },
            }}
          >
            {building.title}
          </Typography>
          <CardMedia
            component="img"
            alt={building.title}
            image={building.img}
            sx={{
              width: { xs: "100%", sm: "70%" },
              order: { xs: 2, sm: 0 },

            }}
          />
          {building.description.map((item, ind) => (
            <StyledTypography
              key={ind}
              variant="body2"
              sx={{
                order: { xs: 3, sm: 2 },
              }}
            >
              {item}
            </StyledTypography>
          ))}
        </CardContent>
        <CardActions
          sx={{
            justifyContent: {
              xs: "center",
              sm: isEvenCard(index) ? "flex-start" : "flex-end",
            },
          }}
        >
          <Button size="small">Подробнее</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
export default BuildCard;
