import * as React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import david from '../art/david.jpg';
import icon from '../art/icon.png';
import olem from '../art/olem.png';
import EmailIcon from '@mui/icons-material/Email';
import ampedchess from '../art/ampedchess.gif';
import ordermedia from '../art/ordermedia.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ucb from '../art/ucb.jpg';

import { makeStyles } from "@material-ui/core";

import SimpleAccordion from './SimpleAccordion';
import Icon from './Icon';



const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      alignItems: "center"
    },
    border: {
      borderBottom: ".5px solid lightgray",
      width: "100%"
    },
    content: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      fontWeight: 500,
      fontSize: 22,
      color: "lightgray"
    }
  }));



export default function Landing() {

    const classes = useStyles();

    return (
       
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>


            <div style={{marginBottom:0, marginTop:20, maxWidth:900, width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            
                <Avatar   sx={{ width: 150, height: 150 }} src={david} />

                <div style={{marginTop:20, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    {/* <EmailIcon style={{color:'white', marginRight:10}}/> */}
                    <p style={{padding:0, margin:0, color:'white',fontSize:14, fontWeight:'bold'}}>davidg3@protonmail.com</p>
                </div>

                <div style={{display:'flex', marginTop:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    {/* <LocalPhoneIcon style={{color:'white', marginRight:10}}/> */}
                    <p style={{padding:0, margin:0, color:'white', fontSize:14, fontWeight:'bold'}}>+1 (305) 775-2267</p>
                </div>

            </div>


            <div style={{marginTop:20, maxWidth:900, width:'100%'}}>


                <div className={classes.container}>
                    <div className={classes.border} />
                    <span className={classes.content}>{<p style={{color:'white', paddingLeft:10, paddingRight:10, fontSize:22, fontWeight:'bold', }}>Ventures</p>
                        }</span>
                    <div className={classes.border} />
                </div>
         

                <div class='profile-card' style={{display:'flex', flexDirection:'column', backgroundColor:'#081424', borderRadius:10, padding:20}}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center',  borderRadius:10}} >
                        <Avatar   sx={{ width: 80, height: 80 }} src={ampedchess} />
                        <div style={{display:'flex', marginLeft:15, flexDirection:'column', justifyContent:'flexStart'}}>
                            <p style={{fontWeight:'normal', color:'white', fontSize:16, }} ><b>Amped Chess</b> <br/> Win money playing chess <br/> Esports</p>
                        </div>
                    </div>
                        <p style={{color:'white', fontSize:14}}>
                        Both professional sports and esports encounter a common phenomenon known as the "tournament effect," where only a small number of exceptionally skilled or entertaining players can monetize their participation in the sport. Unfortunately, this leaves millions of everyday players with few or no options to compete for prizes. Amped Chess seeks to address this issue by creating a more lucrative environment for the game of chess, primarily through prize pool tournaments and wagers. Currently, Amped Chess is in the process of building a network of clubs and teams to host regular events and has plans to expand the online platform to include other video and board games.
                    </p>
                    <a href='https://ampedchess.com'><p  style={{fontWeight:'bold', color:'white',fontSize:14, padding:0, margin:0}}>ampedchess.com</p></a>
                </div>

                <div class='profile-card' style={{marginTop:20, display:'flex', flexDirection:'column', backgroundColor:'#081424', borderRadius:10, padding:20}}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center',  borderRadius:10}} >
                        <Icon size={80}/>

                        <div style={{display:'flex', marginLeft:15, flexDirection:'column', justifyContent:'flexStart'}}>
                            <p style={{fontWeight:'normal', color:'white', fontSize:16, }} ><b>Amped Trading</b> <br/> Quantatative trading firm</p>
                        </div>
                    </div>
                        <p style={{color:'white', fontSize:14}}>
                        Amped Trading is comprised of two skilled programmers who specialize in trading crypto assets. We have built a robust infrastructure for blockchain data ingestion, which allows us to calculate 24 real-time metrics of network activity for the Ethereum and Polygon chains. By integrating these metrics with prices across multiple exchanges, we have developed an automated statistical strategy that consistently generates daily to weekly profits.                   
                    </p>
                    <a href='https://ampedtrading.com'><p  style={{fontWeight:'bold', color:'white',fontSize:14, padding:0, margin:0}}>ampedtrading.com</p></a>

                </div>

            

                <div style={{height:50}}/>

                <p style={{color:'white', textAlign:'left',  margin:0, padding:0, marginBottom:10,  fontWeight:'bold', fontSize:20}}>Professional Experience</p>
                
                <div className={classes.border} />

                <div style={{display:'flex', alignItems:'center', flexDirection:'row', marginTop:10}}>
                    <Avatar  sx={{ width: 70, height: 70 }} src={ordermedia} />
                    <div style={{display:'flex', marginLeft:15, flexDirection:'column', justifyContent:'flexStart'}}>
                        <p style={{color:'white', fontWeight:'normal', fontSize:14, }} ><b>Order Media</b> <br/> Software Engineer <br/> September 2019 - January 2020</p>
                    </div>
                </div>

                <div style={{display:'flex', alignItems:'center', flexDirection:'row', marginTop:10}}>
                    <Avatar  sx={{ width: 70, height: 70 }} src={olem} />
                    <div style={{display:'flex', marginLeft:15, flexDirection:'column', justifyContent:'flexStart'}}>
                        <p style={{color:'white', fontWeight:'normal', fontSize:14, }} ><b>Olem Shoe Corp.</b> <br/> Software Engineer <br/>  May 2019 - August 2019</p>
                    </div>
                </div>

                <div style={{height:50}}/>

                <p style={{textAlign:'left',  margin:0, padding:0, marginBottom:10, color:'white',  fontWeight:'bold', fontSize:20}}>Education</p>
                
                <div className={classes.border} />

                <div style={{marginBottom:40, display:'flex', alignItems:'center', flexDirection:'row', marginTop:10}}>
                    <Avatar  sx={{ width: 70, height: 70 }} src={ucb} />
                    <div style={{display:'flex', marginLeft:15, flexDirection:'column', justifyContent:'flexStart'}}>
                        <p style={{fontWeight:'normal', fontSize:14, color:'white' }} ><b>University of California, Berkeley</b> <br/> B.S. - Electrical Engineering & Computer Science - Class of '23 <br/>Organizations - Engineers without Borders, Poker / Chess clubs</p>
                    </div>
                </div>

            
                

            </div>


        </div>
      
    );
}
