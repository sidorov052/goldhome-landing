/* Production + Cases + FAQ */

function Production() {
  const facts = [
    {
      icon: "factory",
      title: "Немецкое оборудование",
      body: "Автоматическая линия склейки под прессом. Точная геометрия каждой панели — не более 1 мм отклонения.",
    },
    {
      icon: "warehouse",
      title: "OSB-3 толщиной 12 мм",
      body: "Влагостойкая плита, класс эмиссии E0. Прошита огнебиозащитой по всей плоскости.",
    },
    {
      icon: "flame",
      title: "Самозатухающий ППС",
      body: "Пенополистирол ПСБ-С 25Ф. Не горит, не плавится, не выделяет вредных газов.",
    },
  ];

  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Производство</div>
        <h2 className="h-display h2" style={{ marginTop: 14, marginBottom: 48, maxWidth: 740 }}>
          Завод, который можно посетить —{" "}
          <span style={{ color: "var(--terra)" }}>и мы это рекомендуем</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32, alignItems: "stretch" }}>
          {/* Left - video */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "relative",
              height: 520,
              borderRadius: 24,
              overflow: "hidden",
              background: "#1A1614",
            }}>
              <img src={IMG.svcProduction} alt="Производство" style={{
                width: "100%", height: "100%", objectFit: "cover",
                opacity: 0.55, display: "block"
              }}/>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)"
              }}/>
            </div>
            <button style={{
              position: "absolute", left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              width: 96, height: 96, borderRadius: "50%",
              background: "var(--terra)", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
            }}>
              <Icon name="play" size={32}/>
            </button>
            <div style={{
              position: "absolute", bottom: 24, left: 24, right: 24,
              display: "flex", justifyContent: "space-between", alignItems: "end"
            }}>
              <div>
                <div className="chip chip-dark" style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  4:38 · экскурсия
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, color: "#fff", marginTop: 14, maxWidth: 360, lineHeight: 1.15 }}>
                  Как мы делаем СИП-панель от плиты до пресса
                </div>
              </div>
            </div>
          </div>

          {/* Right - facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {facts.map((f, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 18, padding: 24,
                border: "1px solid var(--line)",
                display: "flex", gap: 16,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "var(--bg-soft)", color: "var(--terra)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon name={f.icon} size={22}/>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates strip */}
        <div style={{ marginTop: 36 }}>
          <div style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 14, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Сертификаты и допуски
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {["ГОСТ Р 56309", "Пожарный СТ-Г1", "Эмиссия E0", "СРО НП 0289", "Сейсмо 9 баллов"].map((c, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid var(--line)", borderRadius: 14,
                padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                aspectRatio: "1 / 1.1",
                justifyContent: "center",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 99,
                  background: "var(--bg-soft)", color: "var(--terra)",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Icon name="check" size={18} stroke={2.5}/>
                </div>
                <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", textAlign: "center", color: "var(--ink-2)" }}>{c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    {
      title: "Дом 72 м² в Казани",
      img: IMG.oykia,
      meta: ["2 спальни", "87 дней", "2 800 000 ₽"],
      body: "Построен для сдачи в аренду. Семья окупит вложения за 6 лет — ставка по аренде в Казани растёт.",
      tag: "Поволжье"
    },
    {
      title: "Дом 150 м² в ЯНАО",
      img: IMG.ikos,
      meta: ["3 спальни", "Индивид. проект", "5 200 000 ₽"],
      body: "Отгрузка домокомплекта за полярный круг. Собрали при −35°C. Зимой стены не промерзают.",
      tag: "Заполярье"
    },
    {
      title: "Дом 130 м² в Сочи",
      img: IMG.amaltea,
      meta: ["4 спальни", "Под аренду", "4 650 000 ₽"],
      body: "Сейсмостойкость 9 баллов. Семья переехала из Москвы, дом сдаётся посуточно через сервисы.",
      tag: "Юг"
    },
  ];

  return (
    <section id="cases" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 48, gap: 32 }}>
          <div>
            <div className="eyebrow">Кейсы</div>
            <h2 className="h-display h2" style={{ marginTop: 14 }}>
              Дома, которые мы построили <br/>от Заполярья до субтропиков
            </h2>
          </div>
          <button className="btn btn-ghost">
            Все объекты <Icon name="arrow-right" size={16}/>
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {cases.map((c, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: 22, overflow: "hidden",
              border: "1px solid var(--line)", display: "flex", flexDirection: "column",
            }}>
              <div style={{ position: "relative" }}>
                <Photo src={c.img} alt={c.title} h={280} style={{ borderRadius: 0 }}/>
                <div style={{ position: "absolute", top: 14, left: 14 }}>
                  <span className="chip chip-terra">{c.tag}</span>
                </div>
              </div>
              <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                  {c.title}
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {c.meta.map((m, j) => (
                    <span key={j} className="chip num">{m}</span>
                  ))}
                </div>
                <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{c.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "СИП-дом горит как спичка?",
      a: "Нет. Пенополистирол ПСБ-С 25Ф самозатухающий, класс Г1. OSB-3 пропитан огнебиозащитой. Огонь не распространяется по конструкции, что подтверждено пожарными испытаниями."
    },
    {
      q: "Мыши прогрызут стены?",
      a: "Не доберутся при правильном фундаменте. Поднимаем дом на 40 см над землёй, делаем металлические отсечки. Мыши не строят гнёзда в пенополистироле — для них он бесполезен."
    },
    {
      q: "Дом простоит 20–30 лет и развалится?",
      a: "В Канаде такие дома стоят с 1950-х годов. Средний срок службы — 70–80 лет. Мы даём гарантию 25 лет на конструкцию по договору."
    },
    {
      q: "Пенопласт токсичен, формальдегид?",
      a: "Класс эмиссии E0 — самый низкий. Тот же ППС используется в холодильниках и упаковке для еды. Все материалы сертифицированы по ГОСТ."
    },
    {
      q: "Будет слышно между этажами?",
      a: "Да, это особенность лёгкой технологии. Мы решаем шумоизоляцией перекрытий: акустическая мембрана + минвата 200 мм. Входит в комплектацию «Стандарт»."
    },
    {
      q: "А вдруг подрядчик кинет — недострой?",
      a: "В договоре прописаны штрафы за просрочку 0,1% в день. Поэтапная оплата только по факту выполненных работ. На каждом этапе подписываем акт приёмки."
    },
    {
      q: "Вы из Тюмени, а я в Краснодаре. Как строить будете?",
      a: "У нас 2 собственных производства — в Тюмени и Краснодаре. Бригада штатная, не подряд. Уже строили в 30+ регионах. Привозим бытовку для бригады, организуем питание."
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="section">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 110 }}>
            <div className="eyebrow">Часто спрашивают</div>
            <h2 className="h-display h2" style={{ marginTop: 14, marginBottom: 18 }}>
              Снимаем главные страхи о&nbsp;СИП-домах
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 16, marginBottom: 24, lineHeight: 1.5 }}>
              7 главных вопросов, которые задают перед заказом. Если вашего нет — напишите нам.
            </p>
            <button className="btn btn-ghost">
              Задать свой вопрос <Icon name="arrow-right" size={16}/>
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  background: "#fff", borderRadius: 18,
                  border: isOpen ? "1.5px solid var(--terra)" : "1px solid var(--line)",
                  overflow: "hidden",
                  transition: "border .15s ease"
                }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: "100%", textAlign: "left",
                      padding: "22px 26px",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: 16
                    }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                      <span className="num" style={{ fontSize: 13, color: "var(--ink-3)", minWidth: 28 }}>
                        0{i + 1}
                      </span>
                      <span style={{ fontWeight: 600, fontSize: 17, color: "var(--ink)" }}>
                        {it.q}
                      </span>
                    </div>
                    <span style={{
                      width: 36, height: 36, borderRadius: 99,
                      background: isOpen ? "var(--terra)" : "var(--bg-soft)",
                      color: isOpen ? "#fff" : "var(--ink-2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, transition: "all .15s ease",
                    }}>
                      <Icon name={isOpen ? "minus" : "plus"} size={16} stroke={2}/>
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: "0 26px 22px 72px",
                      fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6
                    }}>
                      {it.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Production, Cases, FAQ });
