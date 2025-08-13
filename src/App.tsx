import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import hero from "./assets/hero.png";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { ThxLayout } from "./thx/ThxLayout.tsx";

export const App = () => {
  const [thxShow, setThxShow] = useState(LS.getItem(LSKeys.ShowThx, false));

  const count = () => {
    window.gtag("event", "5472_get_sub", {
      variant_name: "5472_3",
    });
  };

  const submit = () => {
    count();
    LS.setItem(LSKeys.ShowThx, true);
    setThxShow(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img src={hero} alt="" style={{ borderRadius: "1rem" }} />
        <Gap size={16} />
        <Typography.TitleResponsive tag="h1" view="medium" font="system">
          Калькулятор выплат
        </Typography.TitleResponsive>
        <Gap size={8} />
        <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
          Узнайте, сколько вы можете получать от государства за детей
        </Typography.Text>

        <Gap size={24} />

        <Typography.Text
          view="primary-large"
          weight="medium"
          tag="p"
          defaultMargins={false}
          style={{ fontSize: "20px" }}
        >
          Как работает?
        </Typography.Text>

        <Gap size={16} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <img src={img1} alt="" width={48} height={48} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <Typography.Text
                view="primary-medium"
                weight="medium"
                tag="p"
                defaultMargins={false}
              >
                Вы заполняете анкету
              </Typography.Text>
              <Typography.Text
                view="primary-small"
                tag="p"
                color="secondary"
                defaultMargins={false}
              >
                В ней будет несколько вопросов о вас и ваших детях
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={16} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <img src={img2} alt="" width={48} height={48} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <Typography.Text
                view="primary-medium"
                weight="medium"
                tag="p"
                defaultMargins={false}
              >
                Мы считаем сумму выплат
              </Typography.Text>
              <Typography.Text
                view="primary-small"
                tag="p"
                color="secondary"
                defaultMargins={false}
              >
                Всё будет поделено на категории
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={16} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <img src={img3} alt="" width={48} height={48} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <Typography.Text
                view="primary-medium"
                weight="medium"
                tag="p"
                defaultMargins={false}
              >
                Вы подаёте заявку на выплаты
              </Typography.Text>
              <Typography.Text
                view="primary-small"
                tag="p"
                color="secondary"
                defaultMargins={false}
              >
                Онлайн через Госуслуги или офлайн через ведомство
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={24} />
        <div
          style={{
            padding: "1rem",
            borderRadius: "1rem",
            gap: "1rem",
            display: "flex",
            alignItems: "center",
            border: "1px solid #F2F3F5",
          }}
        >
          <img src={img4} alt="" width={40} height={40} />
          <Typography.Text view="primary-small" tag="p" defaultMargins={false}>
            Понадобится подтверждённый профиль на Госуслугах
          </Typography.Text>
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={submit}>
          Посчитать
        </ButtonMobile>
      </div>
    </>
  );
};
