import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import api from '../../service/api';

export default class Main extends Component {
    state = {
        contas: [],
    }

    componentDidMount() {
        this.loadContasPagar();
    }

    loadContasPagar = async() => {
        const response = await api.get('/cpagar');

        this.setState({ contas: response.data });
        console.log(response);
    };



    preventDefault(event) {
        event.preventDefault();
    }


    useStyles = makeStyles((theme) => ({
        seeMore: {
            marginTop: theme.spacing(3),
        },
    }));


    render() {
        return ( <
            React.Fragment >
            <
            Title > Contas a Pagar < /Title> <
            Table size = "small" >
            <
            TableHead >
            <
            TableRow >
            <
            TableCell > Data < /TableCell> <
            TableCell > Fornecedor < /TableCell> <
            TableCell > Documento < /TableCell> <
            TableCell > Especie < /TableCell> <
            TableCell align = "right" > Valor < /TableCell> <
            /TableRow> <
            /TableHead> <
            TableBody > {
                this.state.contas.map((contas) => ( <
                    TableRow key = { contas.id } >
                    <
                    TableCell > { contas.data_vencimento } < /TableCell> <
                    TableCell > { contas.razao_social } < /TableCell> <
                    TableCell > { contas.documento } < /TableCell> <
                    TableCell > { contas.especie } < /TableCell> <
                    TableCell align = "right" > { contas.valor } < /TableCell>  <
                    /TableRow>
                ))
            } <
            /TableBody> <
            /Table> <
            div >
            <
            Link color = "primary"
            href = "#" >
            Mostrar Mais <
            /Link> <
            /div> <
            /React.Fragment>
        );
    }
}