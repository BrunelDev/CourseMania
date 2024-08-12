import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(rank, name, courses, hours, points, evolution) {
  return { rank, name, courses, hours, points, evolution };
}

const rows = [
  createData(1, "Charlie Rawal", "53", "250", "13450", false),
  createData(2, "Charlie Rawal", "53", "250", "13450", true),
  createData(3, "Charlie Rawal", "53", "250", "13450", true),
  createData(4, "Charlie Rawal", "53", "250", "13450", true),
  createData(5, "Charlie Rawal", "53", "250", "13450", false),
  createData(6, "Charlie Rawal", "53", "250", "13450", true),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Leader Board</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Rang</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Cours</TableCell>
            <TableCell>Heures</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex space-x-3">
                  <div className="bg-[#F5F7F9] rounded-md h-6 w-6 flex justify-center items-center">
                    {row.rank}
                  </div>
                  {row.evolution ? (
                    <img src="greenTriangle.svg" alt="" />
                  ) : (
                    <img src="redTriangle.svg" alt="" />
                  )}
                </div>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.courses}</TableCell>
              <TableCell>{row.hours}</TableCell>
              <TableCell
                align="right"
                className="text-[#3BAFA8]"
              >{`${row.points}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Voir plus
      </Link>
    </React.Fragment>
  );
}
