"use client";

import { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";

import classes from "./classes.module.css";

const recentOrdersData = [
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Asasdashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Page 2 Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
];

export const TablePost = () => {
  const [currentPage, setCurrentPage] = useState(1); //untuk halaman aktif dan halaman yg akan dituju
  const [itemsPerPage, setItemsPerPage] = useState(5); //jumlah data yang ditampilkan per halaman

  const totalPages = Math.ceil(recentOrdersData.length / itemsPerPage); //match.ceil utk hitung ada berapa halaman. misal 52 data, 52/5 = 10.2. jadi ada 10 halaman dan sisa 2 data, jadi diambil 11 dan jadi 11 halaman

  const indexOfLastItem = currentPage * itemsPerPage; // nentukan data terakhir diambil
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // nentukan data awal yg diambil

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = recentOrdersData.slice(
    //ambil data sesuai halaman dan jumlahnya, start index misal dari data 1, startindex +perpage misalnya index ke 5 jadi 5 data saja. kalau memilih nampilkan 10 data maka data ke 1 + 10 jadi data ke 1 - 10
    startIndex,
    startIndex + itemsPerPage,
  );
  // untuk showing text
  const totalItems = recentOrdersData.length; //nampilkan total item
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
              <SearchForm />
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
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Created</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((value, i) => (
                    <tr key={i}>
                      <td>{value.orderID}</td>
                      <td>
                        <Link
                          href="/my-profile"
                          className="d-flex align-items-center"
                        >
                          <Image
                            src={value.customer.img}
                            className="wh-40 rounded-3"
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="ms-2 ps-1">
                            <h6 className="fw-medium fs-14">
                              {value.customer.name}
                            </h6>
                          </div>
                        </Link>
                      </td>
                      <td>{value.created}</td>
                      <td>{value.total}</td>
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
