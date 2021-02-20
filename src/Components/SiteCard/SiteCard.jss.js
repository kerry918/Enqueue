import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        padding: "1%",
        width: "29%",
        minWidth: "600px",
        height: "800px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"
    },
    cardHeader: {
        marginBottom: "20px"
    },
    cardBody: {
        marginTop: "20px",
        padding: "20px"
    }
}));

export default useStyles;
