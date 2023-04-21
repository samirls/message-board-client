import MessageBox from "./MessageBox";
import SendMessage from "./SendMessage";
import "./body.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

function Body() {
  const [data, setData] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        try {
          const res = await axios.get("http://localhost:5000");
          setData(res.data);
          console.log("data taken from server");
          setRemoveLoading(true);
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        {data.map((item, index) => {
          return (
            <MessageBox key={index} author={item.user} message={item.message} />
          );
        })}
        {!removeLoading && <Loading />}
      </div>
      <SendMessage setData={setData} />
    </>
  );
}

export default Body;
