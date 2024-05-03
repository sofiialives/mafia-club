import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type Props = {};

const PrivacyPage = (props: Props) => {
  return (
    <main>
      <section>
        <MaxWidthWrapper>
          <div className="pb-10">
            <h1 className="text-[32px]  text-[#FDD901] font-normal leading-10 mb-8">
              Политика кофидициальности
            </h1>
            <article>
              <h2 className="text-[26px] font-normal leading-10">
                Последнее обновление: 2024.04.10
              </h2>
              <p>
                Ваша конфиденциальность очень важна для нас. В этой политике
                конфиденциальности мы объясняем, какую информацию мы собираем,
                как мы используем ее и как вы можете обращаться к нам по поводу
                управление своей информацией.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">
                Сбор и использование информации
              </h2>
              <p>
                Мы можем собирать различные типы информации для обеспечения и
                улучшение наших услуг.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">
                Сохранение данных
              </h2>
              <p>
                Мы сохраняем ваши личные данные столько, сколько это необходимо
                для предоставления вам наших услуг в завиимости от
                законодательства, которому подчиняемся.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">Куки</h2>
              <p>
                Мы используем куки и аналогичные технологии для сбора информации
                и улушения вашего обслуживания.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">Ваши права</h2>
              <p>
                Вы имеете право требовать удалить вваши личные данные с нашей
                системы.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">
                Изменения к этой политике конфидициальности.
              </h2>
              <p>
                Мы можем время от времени обноввлять нашу политику
                конфидициальности. Мы сообщим вам о наших каких либо изменениях,
                разместив новую политику конфидициальности на этой странице.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">
                Зв&apos;яжіться з нами
              </h2>
              <h2>Свяжитесь с нами </h2>
              Еесли у вас возникли вопросы об этой политике конфидициальности,
              свяжитесь с нами :
              <br />
              Через
              <span>
                <a href="https://discord.gg/vC2jtXVm">TeamForce</a>
              </span>
            </article>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default PrivacyPage;
