import React from "react";
import dataPage from "../../DataWeb/dataPage";
import "./Pages.css";

function Page() {
  const data = dataPage.map((data) => {
    return (
      <div
        key={data.page}
        id={data.id}
        style={{
          backgroundImage: `url(${data.url})`,
        }}
        className="wrapper overlay "
      >
        {data.content}
      </div>
    );
  });
  return <div className="fade-in">{data}</div>;
}

export default Page;
