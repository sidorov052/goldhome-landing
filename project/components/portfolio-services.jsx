/* Portfolio with tabs + WhomFor + Services */

const PROJECTS = {
  turnkey: [
    { name: "Икос",    m: 142, beds: 3, price: 5055200, days: 96, img: () => IMG.ikos },
    { name: "Ойкиа",   m: 60,  beds: 2, price: 2057920, days: 64, img: () => IMG.oykia },
    { name: "Амальтея",m: 70,  beds: 2, price: 2388330, days: 72, img: () => IMG.amaltea },
    { name: "Хавен",   m: 20,  beds: 1, price: 1240000, days: 42, img: () => IMG.houseSip },
    { name: "Ретрит",  m: 24,  beds: 1, price: 1388972, days: 48, img: () => IMG.houseFrame },
    { name: "Хопс",    m: 159, beds: 3, price: 5565000, days: 104, img: () => IMG.houseWood },
  ],
  kits: [
    { name: "Дом-комплект «Север»",  m: 85,  beds: 2, price: 980000,  days: 12, img: () => IMG.houseSip },
    { name: "Дом-комплект «Юг»",     m: 60,  beds: 2, price: 720000,  days: 10, img: () => IMG.oykia },
    { name: "Дом-комплект «Базовый»",m: 100, beds: 3, price: 1240000, days: 14, img: () => IMG.amaltea },
    { name: "Дом-комплект «Лофт»",   m: 50,  beds: 1, price: 640000,  days: 10, img: () => IMG.houseFrame },
    { name: "Дом-комплект «Семья»",  m: 130, beds: 4, price: 1640000, days: 16, img: () => IMG.ikos },
    { name: "Дом-комплект «Дача»",   m: 36,  beds: 1, price: 480000,  days: 8,  img: () => IMG.houseWood },
  ],
  stone: [
    { name: "Камень «Атлас»",   m: 180, beds: 4, price: 8400000, days: 180, img: () => IMG.houseStone },
    { name: "Камень «Гранит»",  m: 220, beds: 5, price: 10200000, days: 210, img: () => IMG.houseStone },
    { name: "Камень «Эрмитаж»", m: 150, beds: 3, price: 7100000, days: 165, img: () => IMG.houseStone },
    { name: "Камень «Терция»",  m: 130, beds: 3, price: 6300000, days: 150, img: () => IMG.houseStone },
    { name: "Камень «Этюд»",    m: 110, beds: 3, price: 5400000, days: 140, img: () => IMG.houseStone },
    { name: "Камень «Тоскана»", m: 200, beds: 4, price: 9600000, days: 195, img: () => IMG.houseStone },
  ],
};

function Portfolio() {
  const [tab, setTab] = React.useState("turnkey");
  const fmt = (n) => n.toLocaleString("ru-RU").replace(/,/g, " ");

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 36, gap: 32, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow">Портфолио</div>
            <h2 className="h-display h2" style={{ marginTop: 14, marginBottom: 14 }}>
              Более 400 построенных домов <br/>
              со средним рейтингом <span style={{ color: "var(--terra)" }}>4.9 / 5</span>
            </h2>
          </div>

          {/* Tabs */}
          <div style={{
            display: "flex", gap: 4, padding: 4,
            background: "var(--bg-soft)", borderRadius: 999,
            border: "1px solid var(--line)",
          }}>
            {[
              ["turnkey", "Под ключ"],
              ["kits", "Домокомплекты"],
              ["stone", "Каменные дома"],
            ].map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)}
                style={{
                  height: 44, padding: "0 22px", borderRadius: 999,
                  background: tab === k ? "var(--ink)" : "transparent",
                  color: tab === k ? "#fff" : "var(--ink-2)",
                  fontWeight: 500, fontSize: 14,
                  transition: "all .15s ease",
                }}>{l}</button>
            ))}
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
        }}>
          {PROJECTS[tab].map((p, i) => (
            <div key={p.name} style={{
              background: "#fff", borderRadius: 22, overflow: "hidden",
              border: "1px solid var(--line)", display: "flex", flexDirection: "column",
            }}>
              <div style={{ position: "relative" }}>
                <Photo
                  src={p.img()}
                  alt={`${p.name}, ${p.m} м²`}
                  h={240}
                  style={{ borderRadius: 0 }}
                  objectPosition="center"
                />
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  display: "flex", gap: 6
                }}>
                  <span className="chip" style={{ background: "rgba(255,255,255,0.94)" }}>
                    <span className="num">{p.m}</span> м²
                  </span>
                  <span className="chip" style={{ background: "rgba(255,255,255,0.94)" }}>
                    {p.beds} спальни
                  </span>
                </div>
              </div>
              <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.01em" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>
                  Цена зависит от ваших параметров: фундамент, отделка, инженерия. Рассчитаем под вас за 15 минут.
                </div>
                <a href="#calc" className="btn btn-ghost btn-sm" style={{ marginTop: "auto", alignSelf: "stretch" }}>
                  Рассчитать по своим параметрам <Icon name="arrow-right" size={14}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhomFor() {
  const items = [
    {
      icon: "home", num: "01",
      title: "Хотите свой дом, но не готовы ждать 2 года",
      body: "Кирпич — это 1,5 года стройки и кредит на 20 лет. СИП — переедете до Нового года, если решите сейчас."
    },
    {
      icon: "wallet", num: "02",
      title: "Используете маткапитал на дом, а не на квартиру",
      body: "484 000 ₽ маткапитала — до 25% стоимости готового домокомплекта. Помогаем с оформлением документов."
    },
    {
      icon: "tree", num: "03",
      title: "Устали от соседей за стеной и шума двора",
      body: "Свой участок, своя тишина, свой воздух. Без панелек, лифтов и протечек сверху от соседей."
    },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 48, alignItems: "end" }}>
          <div>
            <div className="eyebrow">Кому подойдёт</div>
            <h2 className="h-display h2" style={{ marginTop: 14 }}>
              СИП-дом — это про вас, если…
            </h2>
          </div>
          <p className="lead" style={{ maxWidth: 540 }}>
            Мы построили 412 домов и знаем главное: люди приходят к нам по похожим причинам. Узнайте себя в одной из трёх.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {items.map((it) => (
            <div key={it.num} style={{
              background: "#fff", borderRadius: 22, padding: 28,
              border: "1px solid var(--line)",
              display: "flex", flexDirection: "column", gap: 18,
              minHeight: 280,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "var(--bg-soft)", color: "var(--terra)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={it.icon} size={26}/>
                </div>
                <div className="num" style={{ fontSize: 14, color: "var(--ink-3)" }}>{it.num} / 03</div>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                {it.title}
              </div>
              <div style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.5 }}>
                {it.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      tag: "Сделай сам",
      title: "Домокомплект",
      price: "от 14 000 ₽/м²",
      body: "Привезём готовый набор панелей на ваш участок. Соберёте сами или с нашей бригадой. Производство 10–15 дней.",
      cta: "Подобрать комплект",
      accent: false,
    },
    {
      tag: "Главное предложение",
      title: "Дом под ключ",
      price: "от 31 000 ₽/м²",
      body: "Всё включено: проект, фундамент, коробка, отделка, инженерия. Вы получаете ключи. От 2 до 4 месяцев.",
      cta: "Рассчитать под ключ",
      accent: true,
    },
    {
      tag: "Оптом",
      title: "СИП-панели оптом",
      price: "от 4 532 ₽/шт",
      body: "Для дилеров, бригад, частной стройки. Производство Тюмень + Краснодар. Доставка от 10 м³ по России.",
      cta: "Запросить прайс",
      accent: false,
    },
  ];

  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="eyebrow">Услуги</div>
        <h2 className="h-display h2" style={{ marginTop: 14, marginBottom: 48, maxWidth: 780 }}>
          Три способа получить дом мечты — от готового комплекта до ключей в руках
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: 20 }}>
          {items.map((s) => (
            <div key={s.title} style={{
              background: s.accent ? "var(--ink)" : "#fff",
              color: s.accent ? "#fff" : "var(--ink)",
              border: s.accent ? "1px solid var(--ink)" : "1px solid var(--line)",
              borderRadius: 24, padding: 32,
              display: "flex", flexDirection: "column", gap: 20,
              minHeight: 440,
              position: "relative", overflow: "hidden",
            }}>
              {s.accent && (
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: 180, height: 180, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(201,123,74,0.5), transparent 70%)",
                  transform: "translate(40%, -40%)",
                  pointerEvents: "none"
                }}/>
              )}

              <div className="chip" style={s.accent
                ? { background: "rgba(201,123,74,0.18)", color: "#FBC79B", border: "1px solid rgba(201,123,74,0.35)", alignSelf: "start" }
                : { alignSelf: "start" }}>
                {s.tag}
              </div>

              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                {s.title}
              </div>

              <div className="num" style={{
                fontSize: 22, fontWeight: 600,
                color: s.accent ? "#FBC79B" : "var(--terra)",
              }}>
                {s.price}
              </div>

              <div style={{ fontSize: 15, lineHeight: 1.5, color: s.accent ? "rgba(255,255,255,0.75)" : "var(--ink-2)", flex: 1 }}>
                {s.body}
              </div>

              <a href="#calc" className={s.accent ? "btn btn-primary" : "btn btn-ghost"} style={{ alignSelf: "start" }}>
                {s.cta} <Icon name="arrow-right" size={16}/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Portfolio, WhomFor, Services });
