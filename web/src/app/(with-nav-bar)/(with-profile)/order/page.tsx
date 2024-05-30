"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const Order = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const columns = [
    { key: "order", label: "Order#" },
    { key: "product", label: "Product" },
    { key: "purchasedDate", label: "Dat Purchased" },
    { key: "total", label: "Total" },
    { key: "type", label: "Type" },
  ];

  // Dummy data for rows
  const rows = [
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
    {
      key: "1",
      values: {
        order: "#12344",
        product: "30",
        purchasedDate: "Nov 10, 2023",
        total: "3,432",
        type: "invoice",
      },
    },
  ];

  const pages = Math.ceil(rows.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);

  return (
    <div className="py-[5%] px-[5%] bg-white">
      <div className="text-[#0E2920] font-bold text-[32px]">Order History</div>
      <Table
        aria-label="client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
              className="overflow-hidden"
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn
              className="font-bold text-[24px] py-4 px-4"
              key={column.key}
            >
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.key} className="bg-[#FFF3E3]">
              {columns.map((column) => (
                <TableCell className="py-8 px-4" key={column.key}>
                  {row.values[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Order