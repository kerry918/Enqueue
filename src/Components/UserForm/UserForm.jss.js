import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardFormTitle: {
        border: "1px green solid",
        textAlign: "center"
    },
    cardFormBody: {
        border: "1px green solid",
    },
    cardFormFields: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        padding: "20px 0 20px 0",
        border: "1px pink solid"
    },
    cardFormButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px pink solid"
    },
    cardFormField: {
        margin: theme.spacing(1)
    }
}));

export default useStyles;
