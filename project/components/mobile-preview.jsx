/* Mobile preview — shows key blocks in a phone frame */

function MobilePreview() {
  const [screen, setScreen] = React.useState("hero");

  return (
    <section style={{
      padding: "120px 64px",
      background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-soft) 100%)",
    }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="eyebrow">Мобильная версия</div>
            <h2 className="h-display h2" style={{ marginTop: 14, marginBottom: 18 }}>
              60% заявок приходят со смартфона
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.55, marginBottom: 28 }}>
              На мобильном — те же блоки, но переработанная иерархия: меню превращается в гамбургер, калькулятор разворачивается в полноэкранный квиз, таблицы — в карточки, sticky-CTA «Рассчитать» всегда снизу при скролле.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["hero", "1. Hero и рейтинги"],
                ["calc", "2. Полноэкранный квиз-калькулятор"],
                ["projects", "3. Карточки проектов"],
                ["cta", "4. Sticky-CTA в footer"],
              ].map(([k, l]) => (
                <button key={k} onClick={() => setScreen(k)}
                  style={{
                    textAlign: "left", padding: "14px 18px", borderRadius: 14,
                    background: screen === k ? "var(--ink)" : "#fff",
                    color: screen === k ? "#fff" : "var(--ink)",
                    border: screen === k ? "none" : "1px solid var(--line)",
                    fontWeight: 500, fontSize: 15,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    transition: "all .15s ease",
                  }}>
                  {l}
                  {screen === k && <Icon name="arrow-right" size={16}/>}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="phone">
              {/* Notch */}
              <div style={{ height: 28, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: 100, height: 24, background: "#000", borderRadius: 99 }}/>
              </div>
              <div className="phone-screen">
                {screen === "hero" && <PhoneHero/>}
                {screen === "calc" && <PhoneCalc/>}
                {screen === "projects" && <PhoneProjects/>}
                {screen === "cta" && <PhoneCTA/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneTopBar() {
  return (
    <div style={{
      padding: "16px 20px 0", display: "flex",
      justifyContent: "space-between", alignItems: "center"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: "var(--ink)", color: "var(--terra)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16,
        }}>G</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 16 }}>Goldhome</div>
      </div>
      <button style={{ width: 36, height: 36, borderRadius: 10, background: "#fff", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name="menu" size={18}/>
      </button>
    </div>
  );
}

function PhoneHero() {
  return (
    <div style={{ height: "100%", overflow: "auto", paddingBottom: 80 }}>
      <PhoneTopBar/>
      <div style={{ padding: "20px 20px 12px" }}>
        <div style={{ fontSize: 10, color: "var(--terra)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
          Производство · Тюмень + Краснодар
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Дом из СИП с выгодой до <span style={{ color: "var(--terra)" }}>600 000 ₽</span>
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 10, lineHeight: 1.45 }}>
          Производим панели на своём заводе. Коробка за 1–2 недели, под ключ за 2–3 месяца.
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        <Photo src={IMG.hero} alt="СИП-дом" h={180}/>
      </div>

      <div style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <RatingPill logo="Я" name="Яндекс" value="4.8" color="#FC3F1D"/>
        <RatingPill logo="2Г" name="2ГИС" value="4.9" color="#5BB85B"/>
      </div>

      <div style={{ padding: "0 20px" }}>
        <button className="btn btn-primary" style={{ width: "100%" }}>
          Рассчитать стоимость <Icon name="arrow-right" size={16}/>
        </button>
        <div style={{ fontSize: 11, color: "var(--ink-3)", textAlign: "center", marginTop: 10 }}>
          Расчёт за 15 минут на WhatsApp
        </div>
      </div>
    </div>
  );
}

function PhoneCalc() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)" }}>
        <button style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--ink-2)", fontSize: 14 }}>
          <Icon name="chevron-left" size={16}/> Назад
        </button>
        <div className="num" style={{ fontSize: 12, color: "var(--ink-3)" }}>Шаг 2 из 4</div>
      </div>
      <div style={{ padding: "0 20px" }}>
        <div style={{ height: 4, background: "var(--line)", borderRadius: 99, marginTop: 16, overflow: "hidden" }}>
          <div style={{ width: "50%", height: "100%", background: "var(--terra)", borderRadius: 99 }}/>
        </div>
      </div>

      <div style={{ padding: "28px 20px", flex: 1 }}>
        <div className="eyebrow" style={{ fontSize: 11 }}>Калькулятор</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, marginTop: 8, marginBottom: 24, lineHeight: 1.2 }}>
          Какая площадь дома вам нужна?
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
          <button style={{ width: 44, height: 44, borderRadius: 99, border: "1.5px solid var(--line)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="minus" size={16}/>
          </button>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 44 }}>
            85 <span style={{ fontSize: 18, color: "var(--ink-3)" }}>м²</span>
          </div>
          <button style={{ width: 44, height: 44, borderRadius: 99, border: "1.5px solid var(--line)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="plus" size={16}/>
          </button>
        </div>

        <div style={{ height: 4, background: "var(--line)", borderRadius: 99, position: "relative", marginBottom: 8 }}>
          <div style={{ width: "30%", height: "100%", background: "var(--terra)", borderRadius: 99 }}/>
          <div style={{
            position: "absolute", left: "30%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: 24, height: 24, borderRadius: 99,
            background: "#fff", border: "3px solid var(--terra)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}/>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>
          <span>20 м²</span><span>250 м²</span>
        </div>

        <div style={{ background: "var(--bg-soft)", borderRadius: 14, padding: 16, marginTop: 24 }}>
          <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
            Примерно
          </div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, marginTop: 4 }}>
            от <span style={{ color: "var(--terra)" }}>2 850 000 ₽</span>
          </div>
        </div>
      </div>

      <div style={{ padding: 20, borderTop: "1px solid var(--line)" }}>
        <button className="btn btn-primary" style={{ width: "100%" }}>
          Далее <Icon name="arrow-right" size={16}/>
        </button>
      </div>
    </div>
  );
}

function PhoneProjects() {
  return (
    <div style={{ height: "100%", overflow: "auto", paddingBottom: 80 }}>
      <PhoneTopBar/>
      <div style={{ padding: "20px 20px 16px" }}>
        <div className="eyebrow" style={{ fontSize: 11 }}>Портфолио</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, marginTop: 6, lineHeight: 1.15 }}>
          412 построенных домов
        </div>
      </div>

      {/* Tab strip horizontal */}
      <div style={{ padding: "0 20px 16px", display: "flex", gap: 6, overflowX: "auto" }}>
        {["Под ключ", "Домокомплекты", "Каменные"].map((t, i) => (
          <span key={t} style={{
            padding: "8px 14px", borderRadius: 99, fontSize: 12,
            background: i === 0 ? "var(--ink)" : "#fff",
            color: i === 0 ? "#fff" : "var(--ink-2)",
            border: i === 0 ? "none" : "1px solid var(--line)",
            whiteSpace: "nowrap", fontWeight: 500,
          }}>{t}</span>
        ))}
      </div>

      <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          { name: "Ойкиа", m: 60, beds: 2, price: "2 057 920 ₽", img: IMG.oykia },
          { name: "Амальтея", m: 70, beds: 2, price: "2 388 330 ₽", img: IMG.amaltea },
        ].map((p, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 16, border: "1px solid var(--line)", overflow: "hidden" }}>
            <Photo src={p.img} alt={p.name} h={140} style={{ borderRadius: 0 }}/>
            <div style={{ padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)" }}><span className="num">{p.m}</span> м² · {p.beds} спальни</div>
              </div>
              <div className="num" style={{ fontSize: 17, fontWeight: 600, color: "var(--terra)", marginTop: 4 }}>от {p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneCTA() {
  return (
    <div style={{ height: "100%", position: "relative", overflow: "hidden" }}>
      <PhoneTopBar/>
      <div style={{ padding: "24px 20px", paddingBottom: 100 }}>
        <Photo src={IMG.amaltea} alt="дом" h={160} style={{ marginBottom: 16 }}/>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          Готовы узнать стоимость вашего дома?
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 10, lineHeight: 1.5 }}>
          3 варианта расчёта на WhatsApp через 15 минут. Без обязательств.
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
          {[
            ["WA", "#25D366"],
            ["TG", "#26A5E4"],
            ["VK", "#0077FF"],
          ].map(([l, c]) => (
            <div key={l} style={{
              width: 40, height: 40, borderRadius: 12,
              background: c, color: "#fff", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 11,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>{l}</div>
          ))}
        </div>
      </div>

      {/* Sticky bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        padding: 16,
        borderTop: "1px solid var(--line)",
        display: "flex", gap: 8,
      }}>
        <button style={{
          width: 48, height: 48, borderRadius: 14,
          background: "var(--bg-soft)", color: "var(--ink)",
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid var(--line)",
        }}>
          <Icon name="phone" size={18}/>
        </button>
        <button className="btn btn-primary" style={{ flex: 1, height: 48 }}>
          Рассчитать <Icon name="arrow-right" size={16}/>
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { MobilePreview });
