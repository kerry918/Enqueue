import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Andale Mono, monospace', 
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
        backgroundColor: "#a3ddcb",
        borderWidth: "4px 8px",
        borderColor: "#0a043c",
        borderStyle: "solid",
    }
}));

export default useStyles;
