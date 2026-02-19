"use client";

import { useState, useEffect } from "react";
import { Card, Form, Table } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";

import classes from "./classes.module.css";

export const TablePost = ({ data }) => {
  //search
  console.log(data);
  const [searchTerm, setSearchTerm] = useState(""); //search
  const filteredData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const [currentPage, setCurrentPage] = useState(1); //untuk halaman aktif dan halaman yg akan dituju
  const [itemsPerPage, setItemsPerPage] = useState(5); //jumlah data yang ditampilkan per halaman

  //pagination ke 1 lagi kalau search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage); //match.ceil utk hitung ada berapa halaman. misal 52 data, 52/5 = 10.2. jadi ada 10 halaman dan sisa 2 data, jadi diambil 11 dan jadi 11 halaman

  const indexOfLastItem = currentPage * itemsPerPage; // nentukan data terakhir diambil
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // nentukan data awal yg diambil

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    //ambil data sesuai halaman dan jumlahnya, start index misal dari data 1, startindex +perpage misalnya index ke 5 jadi 5 data saja. kalau memilih nampilkan 10 data maka data ke 1 + 10 jadi data ke 1 - 10
    startIndex,
    startIndex + itemsPerPage,
  );
  // untuk showing text
  const totalItems = filteredData.length; //nampilkan total item
  const firstItemNumber = totalItems === 0 ? 0 : indexOfFirstItem + 1; //item pertama. dia +1 karena array dari 0
  const lastItemNumber =
    indexOfLastItem > totalItems ? totalItems : indexOfLastItem; //nomor item terakhir. total item 52 misal, kalau indexlast item lebih dari 52, amil jumlah total saaja
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h3 className="mb-0">Recent Orders</h3>

            <div className="d-flex">
              <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <span className={classes.textTampilkan}>Tampilkan</span>
              <Form.Select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1); // reset ke page 1
                }}
                className="month-select form-control"
                aria-label="Default select example"
              >
                <option defaultValue="5">5</option>
                <option defaultValue="10">10</option>
                <option defaultValue="15">15</option>
                <option defaultValue="25">25</option>
                <option defaultValue="50">30</option>
              </Form.Select>
              <span className={classes.textTampilkan}>Data</span>
            </div>
          </div>

          <div className="default-table-area recent-orders">
            <div className="table-responsive">
              <Table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">Nomor</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Isi</th>
                    <th scope="col">Di Update Tanggal</th>
                    <th scope="col">Dibuat Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((value, i) => (
                    <tr key={i}>
                      <td>{value.id}</td>
                      <td>{value.title}</td>
                      <td>{value.content}</td>
                      <td>
                        {value.updated_at
                          ? new Date(value.updated_at).toLocaleString("id-ID", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "-"}
                      </td>
                      <td>
                        {value.created_at
                          ? new Date(value.created_at).toLocaleString("id-ID", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "-"}
                      </td>
                      <td>
                        <span
                          className={`badge p-2 fs-12 fw-normal text-capitalize ${value.status}`}
                        >
                          {value.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            {/* Pagination */}
            {/* disini mangggil komponen dari pagination.jsx dan data seperti item, atau data yg dibutuhkan di komponen tersebut kita serahkan dari table sini.*/}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
