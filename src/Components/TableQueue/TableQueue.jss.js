import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2%', 
        paddingTop: '1%'
    }, 
    titleText: {
        fontWeight: 600, 
        fontSize: '3vw', 
        paddingBottom: '1.5%',
        fontFamily: 'Andale Mono, monospace', 
        backgroundColor: '#ffffc2'
    }, 
    timeText: {
        fontWeight: 300,
        fontSize: '1.3vw', 
        paddingBottom: '1%',
        fontFamily: 'Andale Mono, monospace'
    }
}));

export default useStyles;