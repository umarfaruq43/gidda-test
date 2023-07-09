import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Flex,
    useBoolean,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMN } from "./columns";

import { useRouter } from "next/router";
import { cards } from "@/cards";

const BasicTable = () => {
    const router = useRouter();

    const columns = useMemo(() => COLUMN, []);
    const data = useMemo(() => cards, []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <TableContainer maxW="1440px" mt="10px">
            <Table {...getTableProps()} variant="striped">
                <Thead className="">
                    {headerGroups.map((headerGroup, idx) => {
                        return (
                            <Tr
                                {...headerGroup.getHeaderGroupProps()}
                                key={idx}
                            >
                                {headerGroup.headers.map((column, idx) => (
                                    <Th
                                        fontWeight={"700"}
                                        fontSize="15px"
                                        key={idx}
                                        py="23px"
                                        px="20px"
                                        color="black"
                                        {...column.getHeaderProps()}
                                        textAlign="center"
                                    >
                                        {column.render("Header")}
                                    </Th>
                                ))}
                            </Tr>
                        );
                    })}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row, idx) => {
                        prepareRow(row);

                        return (
                            <Tr key={idx} {...row.getRowProps()}>
                                {row.cells.map((cell, idx) => {
                                    return (
                                        <Td
                                            fontSize={"20px"}
                                            fontWeight={400}
                                            key={idx}
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render("Cell")}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;
