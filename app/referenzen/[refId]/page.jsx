"use client";
import React from "react";
import successStory from "@data/successStory";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const clickBack = () => {
    router.push("/#referenzen");
  };
  const { refId } = useParams();
  const referenz = successStory.find((ref) => ref.id === refId);

  if (!referenz) {
    return <p>Reference not found</p>;
  }

  return (
    <section className="ref_detail">
      <div className="container">
        <h2>Referenzen</h2>
        <div className="ref_grid">
          <div className="ref_grid_left">
            <img src={referenz.image} alt="" />
          </div>
          <div className="ref_grid_right">
            <h3>{referenz.name}</h3>
            {referenz.story.lang}
            <button onClick={clickBack}>zurück</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
