import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Andale Mono, monospace', 
        color: '#1F8C9D', 
        fontWeigh: '600'
    },
    tableContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 0 10px 0", 
    },
    timeBlock: {
        width: "360px",
        height: "60px",
        "&:nth-child(3)": {
            backgroundColor: "#a3ddcb",
        },
        "&:nth-child(7)": {
            backgroundColor: "#a3ddcb",
        },
        backgroundColor: "#ff8080",
        borderWidth: "1px",
        borderColor: "#0a043c",
        borderStyle: "solid",
        color: '#005360',
    }
}));

export default useStyles;
