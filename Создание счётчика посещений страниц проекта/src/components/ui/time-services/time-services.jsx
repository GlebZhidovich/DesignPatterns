import { useState } from "react";

function TimeServices() {
  const [pull, setPull] = useState({});

  const getTime = () => {
    // Создаём новый объект (пул)
    const newPull = {
      // Заполняет пул актуальным временем захода на страницу
      FIRST_TIME: new Date().getHours(),
    };
    // Устанавливаем новый пул как состояние компонента
    setPull(newPull);
  };

  useEffect(() => {
    //Смотрим, заполнено ли свойство. Если его нет, то заполняем
    !pull.FIRST_TIME && getTime();

    //Добавляем pull в параметр useEffect, чтобы хук следил за состоянием этого атрибута и реагировал на его изменения, обновляя компонент
  }, [pull]);

  return (
    <div>
      Время первого захода на страницу
      <br />В {pull?.FIRST_TIME} часов
      <br />
      Время первого ухода со страницы
      <br />В {pull?.LAST_TIME} часов
    </div>
  );
}

export default TimeServices;
