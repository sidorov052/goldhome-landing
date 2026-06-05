/* Style guide */

function StyleGuide() {
  return (
    <section style={{ padding: "100px 64px", background: "#fff", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="eyebrow">Stylesheet</div>
        <h2 className="h-display h2" style={{ marginTop: 14, marginBottom: 8 }}>
          Дизайн-система <span style={{ color: "var(--terra)" }}>Goldhome</span>
        </h2>
        <p className="lead" style={{ marginBottom: 56, maxWidth: 560 }}>
          Тёплый, природный, не казённо-строительный. Похоже на лайфстайл-журнал о загородной жизни.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32 }}>
          {/* Palette */}
          <div className="card">
            <div className="eyebrow" style={{ marginBottom: 18 }}>01 — Палитра</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <Swatch hex="#F5F1EA" name="Фон" desc="тёплый кремовый"/>
              <Swatch hex="#EEE7DA" name="Подложка" desc="разделители"/>
              <Swatch hex="#FFFFFF" name="Surface" desc="карточки"/>
              <Swatch hex="#C97B4A" name="Терракот" desc="CTA, акценты" big/>
              <Swatch hex="#A85F32" name="Терра-dark" desc="hover" inverse/>
              <Swatch hex="#F2DCC8" name="Терра-soft" desc="иконки"/>
              <Swatch hex="#2A2622" name="Графит" desc="текст" inverse/>
              <Swatch hex="#8B6F47" name="Орех" desc="вторичный" inverse/>
              <Swatch hex="#E2D8C5" name="Линия" desc="бордеры"/>
            </div>
          </div>

          {/* Type */}
          <div className="card">
            <div className="eyebrow" style={{ marginBottom: 18 }}>02 — Типографика</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>
                  UNBOUNDED · MEDIUM · ЗАГОЛОВКИ
                </div>
                <div className="h-display" style={{ fontSize: 38 }}>Дом мечты</div>
              </div>
              <div className="hr"/>
              <div>
                <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>
                  MANROPE · BODY
                </div>
                <div style={{ fontSize: 18, lineHeight: 1.5 }}>
                  Производим панели на своих заводах и строим дома под ключ от Заполярья до субтропиков.
                </div>
              </div>
              <div className="hr"/>
              <div>
                <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>
                  JETBRAINS MONO · ЦИФРЫ
                </div>
                <div className="num" style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em" }}>
                  2 850 000 ₽
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="card" style={{ gridColumn: "span 2" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>03 — Кнопки и состояния</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              <BtnRow label="Primary">
                <button className="btn btn-primary btn-sm">Рассчитать</button>
                <button className="btn btn-primary">Рассчитать стоимость <Icon name="arrow-right" size={14}/></button>
                <button className="btn btn-primary btn-lg">Получить расчёт <Icon name="arrow-right" size={16}/></button>
              </BtnRow>
              <BtnRow label="Ghost">
                <button className="btn btn-ghost btn-sm">Подробнее</button>
                <button className="btn btn-ghost">Все объекты</button>
                <button className="btn btn-ghost btn-lg">Задать вопрос</button>
              </BtnRow>
              <BtnRow label="Dark">
                <button className="btn btn-dark btn-sm">Смотреть</button>
                <button className="btn btn-dark">Все 30 проектов</button>
                <button className="btn btn-dark btn-lg">Заказать звонок</button>
              </BtnRow>
              <BtnRow label="Иконки">
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ width: 44, height: 44, borderRadius: 99, border: "1.5px solid var(--line)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="phone" size={18}/>
                  </button>
                  <button style={{ width: 44, height: 44, borderRadius: 99, background: "var(--terra)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="arrow-right" size={18}/>
                  </button>
                  <button style={{ width: 44, height: 44, borderRadius: 99, background: "var(--ink)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="play" size={16}/>
                  </button>
                </div>
              </BtnRow>
            </div>
          </div>

          {/* Components */}
          <div className="card" style={{ gridColumn: "span 2" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>04 — Компоненты</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}>
              <div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 10 }}>Чипы</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span className="chip">85 м²</span>
                  <span className="chip">2 спальни</span>
                  <span className="chip chip-terra">Главное</span>
                  <span className="chip chip-dark">Заполярье</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 10 }}>Рейтинговая плашка</div>
                <RatingPill logo="Я" name="Яндекс" value="4.8" color="#FC3F1D"/>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 10 }}>Чекбокс</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ width: 20, height: 20, borderRadius: 6, background: "var(--terra)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <Icon name="check" size={13} stroke={2.5}/>
                  </span>
                  <span style={{ width: 20, height: 20, borderRadius: 6, background: "#fff", border: "1.5px solid var(--line)" }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Swatch({ hex, name, desc, big, inverse }) {
  return (
    <div style={{
      background: hex, border: "1px solid var(--line)",
      borderRadius: 12, padding: 14,
      gridColumn: big ? "span 1" : "span 1",
      minHeight: 96,
      color: inverse ? "#fff" : "var(--ink)",
      display: "flex", flexDirection: "column", justifyContent: "space-between"
    }}>
      <div className="num" style={{ fontSize: 11, opacity: 0.7 }}>{hex}</div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 13 }}>{name}</div>
        <div style={{ fontSize: 11, opacity: 0.7 }}>{desc}</div>
      </div>
    </div>
  );
}

function BtnRow({ label, children }) {
  return (
    <div>
      <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "start" }}>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { StyleGuide });
