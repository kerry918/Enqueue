import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 5%'
    }, 
    img1: {
        position: 'absolute', 
        width: '40%', 
        right: 0, 
        bottom: 0
    }, 
    img2: {
        position: 'absolute', 
        width: '30%', 
        right: 100, 
        top: 30
    }, 
}));

export default useStyles;