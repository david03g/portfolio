import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { FaDiscord, FaTwitter} from 'react-icons/fa'
// import { Divider, IconButton } from '@mui/material';
// import PaypalLogo from './PaypalLogo';
// import { openInNewTab } from '../utils';
// import { useFooterStyles } from './MuiStyles';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    footer:{
      minHeight:100,
      backgroundColor:'#081424', 
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'space-between',  
      paddingRight:15, 
      paddingLeft:15
    },
    topRow:{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'space-between'
    },
    topRowLeft:{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'space-between'
    },
    secureText:{
      fontSize:14, 
      fontWeight:'bold', 
      fontColor:'gray'
    },
    body:{
      display:'flex',
      marginTop:5, 
      alignItems:'center', 
      flexDirection:'column', 
      justifyContent:'space-between'
    },
    socialRow:{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'center'
    },
    pagesRow:{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'center'
    },
    pageText:{
      margin:0, 
      padding:0, 
      fontSize:12, 
      fontWeight:'normal'
    },
    companyText:{
      margin: 0,  
      padding: 0, 
      marginTop:10, 
      fontSize: 10,
      marginBottom:15,
    },
    versionText:{
      margin: 0,  
      padding: 0,  
      fontSize:10, 
      marginTop:7, 
      marginBottom:10
    }
  }));



export default function Footer() {

    const classes = useStyles();

    let twitterLink = 'https://twitter.com/amped_chess';
    let discordInvite = 'https://discord.gg/trcb7DGXGS';

    return (


        <footer className={classes.footer}>
       
            {/* <div  className={classes.topRow} >

                <div className={classes.topRowLeft} >
                    <LockOutlinedIcon  style={{width:18, height:18, marginRight:5}}/>
                    <p className={classes.secureText}>SSL Secured</p>
                </div>

                <PaypalLogo width={75}/>

            </div>

            <Divider/> */}

            <div className={classes.body}>

                <div className={classes.socialRow}>
                    {/* <IconButton onClick={()=>openInNewTab(discordInvite)} style={{marginRight:5}}>
                        <FaDiscord/>
                    </IconButton>
                    <IconButton onClick={()=>openInNewTab(twitterLink)}>
                        <FaTwitter/>
                    </IconButton> */}
                </div>

                {/* <div className={classes.pagesRow} >
                    <Link to='/support#support'>
                        <p className={classes.pageText}>Support</p>
                    </Link>
                    <p className={classes.pageText} style={{marginLeft:10, marginRight:10}}> | </p>
                    <Link to="/support#contact">
                    <p className={classes.pageText}>Contact</p>
                    </Link>
                </div> */}

                {/* <p className={classes.companyText}>© 2023 Amped Trading LLC</p> */}
                {/* <p className={classes.versionText}>v1.1.1</p> */}
        
            </div>

        </footer>

    );
}
