/* Header + Hero */

function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(245,241,234,0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--line)",
    }}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 88, padding: "0 64px",
        maxWidth: 1320, margin: "0 auto",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: "var(--ink)", color: "var(--terra)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22,
          }}>G</div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20, letterSpacing: "-0.02em" }}>
              Goldhome
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 2 }}>
              Дома из СИП-панелей · Тюмень + Краснодар
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 28, fontSize: 14, fontWeight: 500, color: "var(--ink-2)" }}>
          <a href="#projects">Проекты</a>
          <a href="#calc">Калькулятор</a>
          <a href="#services">Услуги</a>
          <a href="#faq">FAQ</a>
          <a href="#contacts">Контакты</a>
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ textAlign: "right" }}>
            <div className="num" style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)" }}>
              +7 927 328 95 37
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end", marginTop: 2 }}>
              <Icon name="clock" size={11}/> Ежедневно 9:00–21:00 ·
              <a href="#callback" style={{ color: "var(--terra)" }}>Заказать звонок</a>
            </div>
          </div>
          <button className="btn btn-primary btn-sm">
            Рассчитать стоимость
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ padding: "56px 64px 80px" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "start" }}>

        {/* LEFT */}
        <div>
          <div className="eyebrow">Собственное производство · Тюмень + Краснодар</div>

          <h1 className="h-display h1" style={{ marginTop: 18, marginBottom: 24 }}>
            Дом из СИП-панелей под ключ с выгодой&nbsp;до{" "}
            <span style={{ color: "var(--terra)", whiteSpace: "nowrap" }}>600 000 ₽</span>{" "}
            за счёт собственного производства
          </h1>

          <p className="lead" style={{ maxWidth: 560, marginBottom: 28 }}>
            Производим панели на своих заводах в Тюмени и Краснодаре. Коробку собираем за 1–2 недели, под ключ — за 2–3 месяца. Подключаем ипотеку и маткапитал.
          </p>

          {/* Mini stats inline */}
          <div style={{
            display: "flex", gap: 32, marginBottom: 36, paddingTop: 24,
            borderTop: "1px solid var(--line)"
          }}>
            <MiniStat value="412" label="построено домов"/>
            <MiniStat value="30+" label="регионов от ЯНАО до Сочи"/>
            <MiniStat value="25" label="лет гарантии"/>
          </div>

          {/* USP cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            <UspCard
              icon="shield"
              title="Гарантия 25 лет"
              body="Стоимость, сроки и штраф 0,1% за день просрочки — прямо в договоре."
            />
            <UspCard
              icon="factory"
              title="Цены от производителя"
              body="Не перекупщики. Своё производство — экономия до 30% против посредников."
              accent
            />
            <UspCard
              icon="ruler"
              title="Эскизный проект за 5 000 ₽"
              body="Вместо 25 000 ₽. До конца месяца. При заказе строительства — раздел КР бесплатно."
            />
          </div>
        </div>

        {/* RIGHT — Calculator */}
        <div style={{ position: "sticky", top: 110 }}>
          <HeroCalculator/>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ value, label }) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 500,
        fontSize: 28, lineHeight: 1, letterSpacing: "-0.02em",
        color: "var(--ink)", marginBottom: 6
      }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--ink-3)", lineHeight: 1.4, maxWidth: 130 }}>
        {label}
      </div>
    </div>
  );
}

function UspCard({ icon, title, body, accent }) {
  return (
    <div style={{
      background: accent ? "var(--ink)" : "#fff",
      color: accent ? "#fff" : "var(--ink)",
      border: accent ? "1px solid var(--ink)" : "1px solid var(--line)",
      borderRadius: 18,
      padding: "20px 18px",
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: accent ? "rgba(201,123,74,0.18)" : "var(--bg-soft)",
        color: "var(--terra)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 14
      }}>
        <Icon name={icon} size={20}/>
      </div>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: accent ? "rgba(255,255,255,0.7)" : "var(--ink-2)", lineHeight: 1.45 }}>
        {body}
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div style={{ paddingRight: 24, borderRight: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 500,
        fontSize: 44, lineHeight: 1, letterSpacing: "-0.02em",
        color: "#fff", marginBottom: 8
      }}>{value}</div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.4, maxWidth: 180 }}>
        {label}
      </div>
    </div>
  );
}

Object.assign(window, { Header, Hero });
