// index.jsx

import addMessage from "../public/images/add-message.gif";
import delMessage from "../public/images/delete-message.gif";
import Image from "next/image";
import { Constants } from "../src/CONSTANTS";
import stylesHome from "../styles/Home.module.scss";
import Accordion from "../src/components/Auxiliary/Accordion";
import CityList from "../src/components/Auxiliary/CityList";

export default function Home() {
  return (
    <div className={stylesHome.container}>
      <div className={stylesHome.title}>О чем этот сервис?</div>
      <p className={stylesHome.text}>
        "Купим вместе" — это сервис, созданный для помощи людям в объединении
        для совместных покупок, поиска попутных машин. Делитесь данным сервисом
        с друзьями, соседями и знакомыми в общих чатах и группах, ведь от его
        использования выигрывают все.
      </p>
      <div className={stylesHome.sectionTitle}>
        Примеры использования сервиса.
      </div>
      <ol className={stylesHome.numberedList}>
        <li>
          Вы стали собственником квартиры в новом комплексе или дачи в садовом
          товариществе. Вы можете закинуть ссылку на этот сервис в общий чат, и
          найти соседей, легче спланировав с помощью данного сервиса совместную
          покупку строительных материалов, экономя на доставке крупногабаритных
          товаров.
        </li>
        <li>
          После ремонта у вас остались стройматериалы, которые вы хотите
          продать. Оставьте объявление на вкладке "Чат на карте"
        </li>
        <li>
          Вы регулярно следуете определённому маршруту на работу или перевозите
          груз. Добавьте информацию о маршруте на вкладке "Поиск попутных машин"
          и получите возможность заработать.
        </li>
      </ol>
      <div className={stylesHome.sectionTitle}>Как пользоваться сервисом?</div>
      <p className={stylesHome.text}>
        Сервис "Купим вместе" разработан без необходимости регистрации для
        удобства использования. Сообщения пользователей на вкладке " Чат на
        карте" становятся видимыми для всех сразу после их добавления. Однако
        каждый может удалить ваше сообщение, поскольку все они находятся в общем
        доступе. Аналогично на вкладке "Поиск попутных машин" любой пользователь
        может удалить ваш маршрут.
      </p>
      <div className={stylesHome.subsectionTitle}>Функционал сервиса</div>
      <p className={stylesHome.text}>
        Функционал сервиса включает три ключевые вкладки: "Чат на карте", "Поиск
        попутных машин" и "Где купить.
      </p>
      <Accordion
        id="accordion-1"
        title={
          <div className={stylesHome.subsectionTitle}>
            Вкладка "Чат на карте"
          </div>
        }
      >
        <div className={stylesHome.text}>
          Вкладка "Чат на карте" позволяет обмениваться сообщениями, размещая их
          на карте. Основные функции включают:
        </div>
        <ul className={stylesHome.bulletList}>
          <li>
            Добавление тем: Пользователи могут создавать темы для обсуждения и
            добавлять маркеры с сообщениями.
          </li>
          <li>
            Удаление тем: Можно удалить тему, но только после удаления всех
            связанных с ней маркеров.
          </li>
          <li>
            Выбор тем: Пользователи могут выбрать из существующих тем. Если тема
            не выбрана, система предупреждает об этом.
          </li>
          <li>
            Просмотр маркеров по темам: Предоставляет возможность просмотреть
            все маркеры, связанные с выбранной темой.
          </li>
          <li>
            Добавление сообщений: Для этого нужно выбрать тему и ввести текст
            сообщения, который затем отображается на карте.
          </li>
        </ul>
        <div className={stylesHome.imageContainer}>
          <Image
            src={addMessage}
            alt="Чат на карте: добавление сообщения"
            width={Constants.widthInstMessChat}
            height="auto"
            priority
          />
          <div className={stylesHome.imageCaption}>
            Добавление сообщения на карту
          </div>
        </div>
        <div className={stylesHome.imageContainer}>
          <Image
            src={delMessage}
            alt="Чат на карте: просмотр и удаление сообщения с карты "
            width={Constants.widthInstMessChat}
            height="auto"
            priority
          />
          <div className={stylesHome.imageCaption}>
            Удаление сообщений с карты
          </div>
        </div>
      </Accordion>

      <Accordion
        id="accordion-2"
        title={
          <div className={stylesHome.subsectionTitle}>
            Вкладка "Поиск попутных машин"
          </div>
        }
      >
        <div className={stylesHome.text}>
          На вкладке "Поиск попутных машин" Вы можете посмотреть или добавить
          информацию о попутных машинах. На вкладке используются два поля для
          ввода начальной и конечной точки маршрута. В процессе ввода адреса
          появляются подсказки для уточнения местоположения, которые можно
          выбрать. После того как пользователь ввел оба адреса и нажал кнопку
          "Добавить маршрут", маршрут появляется на карте. Каждый маршрут на
          карте можно удалять по отдельности, нажав на соответствующую кнопку в
          информационном окне маршрута. В случае, если введенный адрес не найден
          или при других ошибках, пользователь получает соответствующее
          сообщение об ошибке.
        </div>
      </Accordion>
      <Accordion
        id="accordion-3"
        title={
          <div className={stylesHome.subsectionTitle}>Вкладка "Где купить"</div>
        }
      >
        <div className={stylesHome.text}>
          Вкладка "Где купить" помогает найти ближайшие магазины, рынки и другие
          точки продаж, которые были проверены и одобрены пользователями
          сервиса."
        </div>
      </Accordion>
      <CityList
        phrases={[
          "Чат на карте в CITY",
          "Гид по CITY",
          "Туристический маршрут по CITY",
        ]}
      />
    </div>
  );
}
