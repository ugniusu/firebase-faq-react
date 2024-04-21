import React from "react";

const TableData = ({ faqData }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th className="table-heading">
            Susidomejęs asmuo{" "}
            <span role="img" aria-label="letter">
              🔠
            </span>
          </th>
          <th className="table-heading">
            El. Paštas{" "}
            <span role="img" aria-label="email">
              📧
            </span>
          </th>
          <th className="table-heading">
            Baisiai susidomejusio asmens klausimas{" "}
            <span role="img" aria-label="question">
              ❓
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {faqData &&
          Object.entries(faqData).map(([id, faq]) => (
            <tr key={id} className="table-row">
              <td className="table-data">{faq.name}</td>
              <td className="table-data">{faq.email}</td>
              <td className="table-data">{faq.question}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableData;
