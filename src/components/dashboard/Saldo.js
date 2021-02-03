import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../dashboard/Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits() {
    const classes = useStyles();
    return ( <
        React.Fragment >
        <
        Title > Caixa Atual < /Title> <
        Typography component = "p"
        variant = "h4" >
        R$3024 <
        /Typography> <
        Typography color = "textSecondary"
        className = { classes.depositContext } >
        02 Fevereiro, 2021 <
        /Typography> <
        div >
        <
        Link color = "primary"
        href = "#"
        onClick = { preventDefault } >
        Ver Movimentação <
        /Link> <
        /div> <
        /React.Fragment>
    );
}