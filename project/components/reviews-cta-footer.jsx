/* Reviews + Final CTA + Footer */

const REVIEWS = [
  {
    name: "Алексей Кравцов",
    city: "Тюмень → Ноябрьск, ЯНАО",
    project: "Дом 110 м², бригадой Goldhome",
    text: "Решил уехать из города, дом нужен был быстро — не на 2 года стройки. Заехали в декабре, при -38° бригада работала. Сделали как обещали, в срок. По теплу — газа уходит вдвое меньше, чем ожидал.",
    initials: "АК",
  },
  {
    name: "Марина Селиванова",
    city: "Краснодар",
    project: "Домокомплект 85 м², собирали с мужем",
    text: "Купили домокомплект, муж с другом собрали за 3 недели. Помощь Goldhome была на этапе фундамента и сборки коробки. Сэкономили ~700 тысяч на бригаде. Качество панелей — без нареканий.",
    initials: "МС",
  },
  {
    name: "Иван Дроздов",
    city: "Москва → Сочи",
    project: "Дом 130 м² под ключ",
    text: "Долго выбирали между каркасом и СИП. Решили СИП из-за сейсмики 9 баллов — для Сочи актуально. Сдали за 92 дня. Теперь дом частично сдаём через сервисы — окупаемся быстро.",
    initials: "ИД",
  },
  {
    name: "Ольга Тимченко",
    city: "Уфа",
    project: "Дом 60 м² по маткапиталу",
    text: "Маткапитал у нас был, но в банке отказывали — мол, не дотягиваем до квартиры. Goldhome помогли оформить ипотеку на дом, маткапитал ушёл в первый взнос. Переехали с детьми в свой двор.",
    initials: "ОТ",
  },
  {
    name: "Сергей Голубев",
    city: "Сургут",
    project: "Дом 142 м², 3 спальни",
    text: "С Goldhome работали через подрядчика — они привозили домокомплект. Сборка чёткая, панели пронумерованы, ничего не лишнее. Понравилось, что не пытались впарить лишних услуг.",
    initials: "СГ",
  },
];

function Reviews() {
  const [idx, setIdx] = React.useState(0);
  const visible = 3;
  const max = REVIEWS.length - visible;

  return (
    <section className="section">
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 40, gap: 32 }}>
          <div>
            <div className="eyebrow">Отзывы клиентов</div>
            <h2 className="h-display h2" style={{ marginTop: 14 }}>
              Что говорят те, <br/>кто уже живёт в нашем доме
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setIdx(Math.max(0, idx - 1))} style={iconBtnL} disabled={idx === 0}>
              <Icon name="chevron-left" size={18}/>
            </button>
            <button onClick={() => setIdx(Math.min(max, idx + 1))} style={iconBtnL} disabled={idx === max}>
              <Icon name="chevron-right" size={18}/>
            </button>
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${REVIEWS.length}, calc((100% - ${(visible - 1) * 20}px) / ${visible}))`,
            gap: 20,
            transform: `translateX(calc(${-idx} * (100% / ${REVIEWS.length}) - ${idx * 20 / REVIEWS.length}px))`,
            transition: "transform .35s ease",
          }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 22, padding: 28,
                border: "1px solid var(--line)",
                display: "flex", flexDirection: "column", gap: 18,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 99,
                    background: "var(--bg-soft)", color: "var(--terra)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18,
                  }}>{r.initials}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 16 }}>{r.name}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{r.city}</div>
                  </div>
                  <Stars size={14}/>
                </div>
                <div style={{ fontSize: 12, color: "var(--terra)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {r.project}
                </div>
                <div style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55, flex: 1 }}>
                  «{r.text}»
                </div>
                <a href="#" style={{ fontWeight: 500, fontSize: 14, color: "var(--ink)", display: "flex", alignItems: "center", gap: 6 }}>
                  Смотреть фото дома <Icon name="arrow-right" size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28, textAlign: "center", fontSize: 13, color: "var(--ink-3)" }}>
          Все отзывы реальные. По запросу дадим контакты клиентов для проверки.
        </div>
      </div>
    </section>
  );
}

const iconBtnL = {
  width: 48, height: 48, borderRadius: 999,
  border: "1.5px solid var(--line)", background: "#fff",
  display: "flex", alignItems: "center", justifyContent: "center",
};

function FinalCTA() {
  return (
    <section id="callback" className="section" style={{ background: "var(--ink)", color: "#fff", padding: "120px 64px" }}>
      <div className="wrap" style={{ textAlign: "center", maxWidth: 920 }}>
        <div className="eyebrow" style={{ color: "var(--terra)" }}>Следующий шаг</div>
        <h2 className="h-display" style={{
          fontSize: "clamp(40px, 5vw, 76px)",
          letterSpacing: "-0.025em",
          color: "#fff",
          margin: "20px 0 24px",
          lineHeight: 1.02,
        }}>
          Готовы узнать стоимость <br/>
          <span style={{ color: "var(--terra)" }}>именно вашего дома?</span>
        </h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.55, marginBottom: 36, maxWidth: 680, margin: "0 auto 36px" }}>
          Заполните калькулятор — через 15 минут пришлём 3 варианта расчёта (эконом / стандарт / премиум) на WhatsApp. Без обязательств и звонков без вашего разрешения.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 56, flexWrap: "wrap" }}>
          <button className="btn btn-primary btn-lg">
            Рассчитать стоимость <Icon name="arrow-right" size={18}/>
          </button>
          <button className="btn btn-lg" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
            <Icon name="phone" size={16}/> Заказать звонок
          </button>
        </div>

        {/* Contacts row */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
          paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          <ContactBlock icon="phone" title="Тюмень" value="+7 927 328 95 37"/>
          <ContactBlock icon="phone" title="Краснодар" value="+7 988 303 85 33"/>
          <ContactBlock icon="mail" title="Почта" value="GH-Tmn@ya.ru"/>
        </div>

        {/* Messengers */}
        <div style={{
          marginTop: 32, display: "flex", justifyContent: "center", gap: 12, alignItems: "center"
        }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            пишите в мессенджер →
          </span>
          {[
            ["WA", "#25D366"],
            ["TG", "#26A5E4"],
            ["VK", "#0077FF"],
            ["MAX", "#FF6B35"],
          ].map(([l, c]) => (
            <button key={l} style={{
              width: 48, height: 48, borderRadius: 14,
              background: c, color: "#fff",
              fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{l}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ icon, title, value }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: "rgba(201,123,74,0.18)", color: "var(--terra)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon name={icon} size={20}/>
      </div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {title}
      </div>
      <div className="num" style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}>{value}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contacts" style={{
      background: "#1A1614", color: "rgba(255,255,255,0.7)",
      padding: "72px 64px 32px"
    }}>
      <div className="wrap" style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
        gap: 48, paddingBottom: 56,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: "#fff", color: "var(--terra)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22,
            }}>G</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, color: "#fff", letterSpacing: "-0.02em" }}>
              Goldhome
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20, maxWidth: 320 }}>
            Производство СИП-панелей и строительство домов под ключ. Тюмень + Краснодар, доставка по всей России с 2014 года.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {["VK", "TG", "WA", "YT"].map(s => (
              <button key={s} style={{
                width: 40, height: 40, borderRadius: 10,
                background: "rgba(255,255,255,0.05)",
                color: "#fff", border: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 12,
              }}>{s}</button>
            ))}
          </div>
        </div>

        <FooterCol title="Навигация" links={["Проекты", "Калькулятор", "Услуги", "Производство", "Кейсы", "FAQ", "Контакты"]}/>
        <FooterCol title="Услуги" links={["Дом под ключ", "Домокомплект", "СИП-панели оптом", "Ипотека и маткапитал", "Дизайн-проект", "Гарантия"]}/>

        {/* Offices */}
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 18 }}>
            Два производства
          </div>
          <Office city="Тюмень" addr="ул. Велижанская, 66" phone="+7 927 328 95 37"/>
          <Office city="Краснодар" addr="ул. Дзержинского, 100" phone="+7 988 303 85 33"/>
        </div>
      </div>

      <div className="wrap" style={{
        paddingTop: 28, display: "flex", justifyContent: "space-between",
        alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.4)", flexWrap: "wrap", gap: 16
      }}>
        <div>© 2026 ООО «Голдхоум» · ИНН 7203111111</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Договор оферты</a>
          <a href="#">Согласие на обработку ПДн</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 18 }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map(l => (
          <a key={l} href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{l}</a>
        ))}
      </div>
    </div>
  );
}

function Office({ city, addr, phone }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <Icon name="map" size={14}/>
        <span style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{city}</span>
      </div>
      <div style={{ fontSize: 13, marginLeft: 22 }}>{addr}</div>
      <div className="num" style={{ fontSize: 13, marginLeft: 22, color: "#fff" }}>{phone}</div>
    </div>
  );
}

Object.assign(window, { Reviews, FinalCTA, Footer });
