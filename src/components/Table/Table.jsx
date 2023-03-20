import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";


const makeStyle = (status) => {
    if (status === 'Joiner') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Get in touch') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://mavenfleet.herokuapp.com/api/v1/all-users', { headers: { Authorization: `Bearer ${token}` } });
                setUser(response.data.data.data)
                console.log(users)
            } catch (error) {
                console.log('this is error')
            }
        };
        fetchData();
    }, []);

    return (
        <div className="Table">
            <h3>Visitors</h3>
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {users.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                                </TableCell>
                                {/* <TableCell align="left" className="Details">Details</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
