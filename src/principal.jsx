
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));

function Comienzo() {
  return (
    <>
      <Grid container spacing={2} sx={{ border: '1px solid black' }}>
        <Grid item xs={8}>
          <Item>x</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Comienzo;