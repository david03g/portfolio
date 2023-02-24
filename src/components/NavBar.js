import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Icon from './Icon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    toolbar:{
      height:70,
      flexDirection:'row', 
      justifyContent:'space-between',
      backgroundColor:'#081424',
      alignItems:'center'
    }
}));



export default function NavBar() {

    const classes = useStyles();

    return (
       
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                {/* < <ChessLogoLoading size={59}/> */}
                {/* <Icon size={50} /> */}

                {/* <div></div> */}

                <p style={{fontSize:20, textAlign:'right'}}><b>David</b> Goldstein</p>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'right', alignItems:'center'}}>
                    <IconButton href='https://www.linkedin.com/in/david-goldstein-b65b381b5/'>
                        <LinkedInIcon style={{fontSize:25, color:'white'}}/>
                    </IconButton>
                    <IconButton href='https://github.com/david03g'>
                        <GitHubIcon style={{fontSize:25, color:'white'}}/>
                    </IconButton>
                </div>
                {/* <p style={{fontSize:20, textAlign:'right'}}><b>David</b> Goldstein</p> */}
                {/* <div style={{display:'flex', flexDirection:'row'}}>
              


                </div> */}
            </Toolbar>
        </AppBar>
      
    );
}
