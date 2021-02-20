import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5%', 
    }, 
    titleText: {
        padding: '0 3%', 
        fontFamily: 'Andale Mono, monospace', 
        fontSize: '5vw',
        color: '#E7CC83' 
    }, 
    descText: {
        margin: '0 15%', 
        fontFamily: 'Andale Mono, monospace', 
        fontSize: '2vw', 
        color: '#8C6A0E'
    }, 
    button: {
        fontSize: '2vw', 
        fontFamily: 'Andale Mono, monospace', 
        marginTop: '8%', 
        alignContent: 'center',
        color: '#785700', 
    },
    img1: {
        position: 'absolute', 
        width: '30%', 
        right: 0, 
        bottom: 0
    },
    img2: {
        position: 'absolute', 
        top: 0,
        width: '30%'
    }
}));

export default useStyles;