"use client";

import { Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export const Content = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4 text-center">
          <Image
            src="/images/starter.png"
            className="mb-4"
            alt="starter"
            width={980}
            height={600}
          />

          <h3 className="fs-4 mb-4 m-auto" style={{ maxWidth: "500px" }}>
            Create something beautiful, like a masterpiece or a really good
            sandwich.
          </h3>

          <Link
            href="/"
            className="btn btn-primary text-decoration-none py-2 px-3 fs-16 fw-medium"
          >
            <span className="d-inline-block py-1">Getting Started</span>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
