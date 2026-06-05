/* 6 reasons + Comparison + Process */

function Reasons() {
  const items = [
    {
      icon: "factory",
      title: "Собственное производство — Тюмень + Краснодар",
      body: "Не перекупщики. Производим панели на немецкой линии. Север и Юг — две базы для быстрой доставки в ваш регион.",
    },
    {
      icon: "truck",
      title: "Бригада приедет в ваш регион",
      body: "Уже строили в ЯНАО, ХМАО, Сочи, Казани, Уфе. Привозим бытовку, организуем питание. Сдаём в срок.",
    },
    {
      icon: "shield",
      title: "Сейсмостойкость до 9 баллов",
      body: "Конструкция выдерживает землетрясения. Технология сертифицирована для южных регионов и горной местности.",
    },
    {
      icon: "thermo",
      title: "Экономия на отоплении до 50%",
      body: "Зимой газовый котёл работает на минимуме. Летом — не жарко. Реальные отзывы клиентов из ЯНАО подтверждают.",
    },
    {
      icon: "wallet",
      title: "Ипотека, маткапитал, рассрочка",
      body: "Аккредитованы в 8 банках. Семейная, сельская, IT-ипотека. Маткапитал — в первый взнос.",
    },
    {
      icon: "check",
      title: "25 лет гарантии на конструкцию",
      body: "Договор фиксирует обязательства. Если что-то не так — переделываем за свой счёт без вопросов.",
    },
  ];

  return (
    <section className="section">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start", marginBottom: 48 }}>
          <div>
            <div className="eyebrow">Почему Goldhome</div>
            <h2 className="h-display h2" style={{ marginTop: 14 }}>
              6 причин выбрать нас, а не соседа по&nbsp;объявлению
            </h2>
          </div>
          <div style={{ display: "flex", gap: 24, alignSelf: "end", color: "var(--ink-2)", maxWidth: 540 }}>
            <p>Мы 11 лет на рынке и видели всё: от подрядчиков-однодневок до клиентов, которые приезжают за вторым домом для родителей. Вот что нас отличает.</p>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: 1, background: "var(--line)",
          border: "1px solid var(--line)", borderRadius: 24, overflow: "hidden",
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: "#fff", padding: "36px 32px",
              display: "flex", flexDirection: "column", gap: 16,
              minHeight: 240,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "var(--bg-soft)", color: "var(--terra)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={it.icon} size={22}/>
                </div>
                <div className="num" style={{ fontSize: 13, color: "var(--ink-3)" }}>
                  0{i+1}
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                {it.title}
              </div>
              <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>
                {it.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    ["Срок коробки",             "1–2 недели",   "2–4 недели", "2–4 месяца"],
    ["Стоимость м²",             "от 14 000 ₽", "от 18 000 ₽", "от 35 000 ₽"],
    ["Теплопотери",              "минимальные",  "средние",     "высокие"],
    ["Усадка дома",              "нет",          "минимальная", "до 1 года"],
    ["Сейсмостойкость",          "до 9 баллов",  "до 7 баллов", "до 6 баллов"],
    ["Строительство зимой",      "да, при −35°C","да",          "сложно"],
  ];
  // winner = column index (0=sip)
  const winners = [0, 0, 0, 0, 0, 0];

  return (
    <section className="section" style={{ background: "var(--ink)", color: "#fff" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 48, alignItems: "end" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--terra)" }}>Сравнение технологий</div>
            <h2 className="h-display h2" style={{ marginTop: 14, color: "#fff" }}>
              Почему СИП, а не кирпич <br/>или каркас?
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, maxWidth: 480 }}>
            СИП выигрывает по 5 из 6 параметров для частного строительства. Цифры — из открытых тендеров и наших объектов.
          </p>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24, overflow: "hidden",
        }}>
          {/* Head */}
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            padding: "20px 32px",
            background: "rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            fontSize: 13, fontFamily: "var(--font-mono)", textTransform: "uppercase",
            letterSpacing: "0.06em", color: "rgba(255,255,255,0.5)",
          }}>
            <div>Параметр</div>
            <div style={{ color: "var(--terra)" }}>СИП</div>
            <div>Каркас</div>
            <div>Кирпич</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
              padding: "22px 32px",
              borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              alignItems: "center", fontSize: 16,
            }}>
              <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{r[0]}</div>
              {[r[1], r[2], r[3]].map((cell, ci) => (
                <div key={ci} style={{
                  fontWeight: winners[i] === ci ? 600 : 400,
                  color: winners[i] === ci ? "#fff" : "rgba(255,255,255,0.55)",
                  display: "flex", alignItems: "center", gap: 8
                }}>
                  {winners[i] === ci && (
                    <span style={{
                      width: 18, height: 18, borderRadius: 99,
                      background: "var(--terra)", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                      <Icon name="check" size={11} stroke={3}/>
                    </span>
                  )}
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { day: "День 1",        title: "Заявка и расчёт",       body: "Через 15 минут получите 3 варианта цены: эконом / стандарт / премиум." },
    { day: "Дни 3–5",       title: "Выезд на участок",      body: "Геология, замеры, согласование проекта на местности." },
    { day: "Дни 7–14",      title: "Договор и проект",      body: "Фиксируем цену, сроки, штрафы за просрочку 0,1% / день." },
    { day: "Дни 14–28",     title: "Производство панелей",  body: "Пронумерованные панели и сборочный проект под ваш дом." },
    { day: "Дни 28–90",     title: "Стройка",               body: "Фундамент → коробка → инженерия → отделка. Контроль по чек-листам." },
    { day: "День 90+",      title: "Ключи и гарантия",      body: "Приёмка по чек-листу, акт, договор гарантии на 25 лет." },
  ];

  return (
    <section className="section">
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 48, gap: 32 }}>
          <div>
            <div className="eyebrow">Этапы работы</div>
            <h2 className="h-display h2" style={{ marginTop: 14 }}>
              6 шагов от заявки <br/>до ключей в&nbsp;руках
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button style={iconBtnLg}><Icon name="chevron-left" size={18}/></button>
            <button style={iconBtnLg}><Icon name="chevron-right" size={18}/></button>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(6, 1fr)",
          gap: 16, position: "relative",
        }}>
          {/* Line behind */}
          <div style={{
            position: "absolute", top: 30, left: "8%", right: "8%",
            height: 2, background: "var(--line)",
            zIndex: 0,
          }}/>
          {steps.map((s, i) => (
            <div key={i} style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: i === 0 ? "var(--terra)" : "#fff",
                color: i === 0 ? "#fff" : "var(--ink)",
                border: i === 0 ? "none" : "2px solid var(--line)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22,
                marginBottom: 20
              }}>
                {i + 1}
              </div>
              <div className="num" style={{ fontSize: 11, color: "var(--terra)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {s.day}
              </div>
              <div style={{ fontWeight: 600, fontSize: 16, marginTop: 4, marginBottom: 8 }}>
                {s.title}
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.45 }}>
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const iconBtnLg = {
  width: 48, height: 48, borderRadius: 999,
  border: "1.5px solid var(--line)", background: "#fff",
  display: "flex", alignItems: "center", justifyContent: "center",
};

Object.assign(window, { Reasons, Comparison, Process });
