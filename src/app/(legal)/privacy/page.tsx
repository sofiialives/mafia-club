import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type Props = {};

const PrivacyPage = (props: Props) => {
  return (
    <main>
      <section>
        <MaxWidthWrapper>
          <div>
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
                Збереження даних
              </h2>
              <p>
                Ми зберігаємо ваші персональні дані лише стільки, скільки це
                необхідно для забезпечення вам наших послуг та відповідно до
                законодавства, яким підлягаємо.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">Куки</h2>
              <p>
                Ми використовуємо куки та аналогічні технології для збору
                інформації та поліпшення нашого обслуговування.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">Ваші права</h2>
              <p>
                Ви маєте право вимагати видалення вашої особистої інформації з
                наших систем.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">
                Зміни до цієї політики конфіденційності
              </h2>
              <p>
                Ми можемо час від часу оновлювати нашу політику
                конфіденційності. Ми повідомимо вас про будь-які зміни,
                розмістивши нову політику конфіденційності на цій сторінці.
              </p>
            </article>
            <article>
              <h2 className="text-[26px] font-normal leading-10">
                {" "}
                Зв'яжіться з нами
              </h2>
              Якщо у вас є питання щодо цієї політики конфіденційності,
              зв'яжіться з нами:
              <br />
              Через{" "}
              <span>
                <a href="https://discord.gg/vC2jtXVm">TeamForce</a>
              </span>
            </article>
            <p></p>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default PrivacyPage;
