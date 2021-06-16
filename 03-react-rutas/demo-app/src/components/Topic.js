import React from "react";
import { useParams } from "react-router";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel hic
        quisquam asperiores dolor magni ex voluptatem, quas autem perferendis
        itaque natus nam fugit rerum necessitatibus consequatur ad quod fugiat?
      </p>
    </div>
  );
};

export default Topic;
