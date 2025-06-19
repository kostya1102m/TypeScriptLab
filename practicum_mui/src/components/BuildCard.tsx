import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginTop: theme.spacing(3),
}));


interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string[],
    };
    index: number;
}
function BuildCard({ building, index }: ComponentProps) {

    const isEvenCard = (index: number) => index % 2 === 0;

    return (
        <Card sx={{ 
            display: 'flex',
            flexDirection : {
                xs: "column",
                sm: isEvenCard(index) ? 'row-reverse' : 'row'
            }

         }}>
            <CardMedia
                component="img"
                alt={building.title}
                image={building.img}
            />
            <Box>
                <CardContent>
                    <Typography
                        gutterBottom variant="h5" >
                        {building.title}
                    </Typography>
                    {building.description.map((item, ind) => (
                        <StyledTypography key={ind} variant="body2">
                            {item}
                        </StyledTypography>
                    ))
                    }
                </CardContent>
                <CardActions sx={{ 
                    justifyContent: isEvenCard(index) ? 'flex-start' : 'flex-end',
                }} >
                    <Button size="small">Подробнее</Button>
                </CardActions>
            </Box>
        </Card>
    )
}
export default BuildCard; 
