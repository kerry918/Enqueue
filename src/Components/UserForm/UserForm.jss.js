import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardFormTitle: {
        textAlign: "center"
    },
    cardFormBody: {
        
    },
    cardFormFields: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        padding: "20px 0 20px 0"
    },
    cardFormButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "10px 0 10px 0"
    },
    cardFormField: {
        margin: theme.spacing(1)
    }
}));

export default useStyles;
