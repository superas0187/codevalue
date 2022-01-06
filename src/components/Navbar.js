import React from 'react'
import { Typography,Grid } from '@material-ui/core'

const Navbar =() => {
    return (
        <Grid className="navbar" xs={12} container justifyContent="left" align="stretch" >
            <Grid item xs className='logo' >
                <Typography variant='h5' style={{ fontWeight: 'bold' }}  href="#">My Store</Typography>
            </Grid>
        </Grid>
    )
}

export default Navbar
