import { useEffect, useState } from "react";

function TimeServices() {
  const [pull, setPull] = useState({});

  const getTime = () => {
    const date = new Date();
    const start = `${date.getHours()} : ${date.getMinutes()}`;
    const newPull = {
      START_APP: start,
    };
    setPull(newPull);
  };

  useEffect(() => {
    !pull.START_APP && getTime();
  }, [pull]);

  return (
    <div>
      Время первого захода на страницу
      <br />В {pull?.START_APP} часов
    </div>
  );
}

export default TimeServices;
