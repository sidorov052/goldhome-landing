/* Calculator section */

function Calculator() {
  const [area, setArea] = React.useState(85);
  const [type, setType] = React.useState("sip");
  const [floors, setFloors] = React.useState("1");
  const [extras, setExtras] = React.useState({ foundation: true, eng: false, finish: false, mortgage: false });
  const [channel, setChannel] = React.useState("messenger");
  const [phone, setPhone] = React.useState("");
  const [wa, setWa] = React.useState(true);

  // Price formula (rough)
  const base = { sip: 14000, frame: 18000, combo: 22000 }[type];
  const floorMult = { "1": 1, "2": 1.25, "mansard": 1.12 }[floors];
  const extraSum = (extras.foundation ? 280000 : 0)
                 + (extras.eng ? 420000 : 0)
                 + (extras.finish ? 540000 : 0)
                 + (extras.mortgage ? 0 : 0);
  const price = Math.round((area * base * floorMult + extraSum) / 1000) * 1000;
  const fmt = (n) => n.toLocaleString("ru-RU").replace(/,/g, " ");

  return (
    <section id="calc" className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 40, gap: 32 }}>
          <div>
            <div className="eyebrow">Шаг 1 — расчёт</div>
            <h2 className="h-display h2" style={{ marginTop: 14, maxWidth: 760 }}>
              Рассчитайте стоимость своего дома —{" "}
              <span style={{ color: "var(--terra)" }}>бесплатно</span> и за&nbsp;15&nbsp;минут
            </h2>
          </div>
          <div style={{ maxWidth: 320, color: "var(--ink-2)" }}>
            Двиньте ползунки — увидите примерную цифру справа. После заявки пришлём 3 варианта расчёта: эконом, стандарт, премиум.
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1.4fr 1fr",
          gap: 24, background: "#fff", borderRadius: 28,
          padding: 32, boxShadow: "var(--shadow)", border: "1px solid var(--line)",
        }}>
          {/* LEFT - inputs */}
          <div>
            {/* 1. Area */}
            <Field label="Площадь дома" hint="от 20 до 250 м²">
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
                <button onClick={() => setArea(Math.max(20, area - 5))}
                  style={iconBtn}><Icon name="minus" size={18}/></button>
                <div className="num" style={{
                  fontFamily: "var(--font-display)", fontWeight: 500,
                  fontSize: 36, color: "var(--ink)", minWidth: 120, textAlign: "center"
                }}>
                  {area} <span style={{ fontSize: 18, color: "var(--ink-3)" }}>м²</span>
                </div>
                <button onClick={() => setArea(Math.min(250, area + 5))}
                  style={iconBtn}><Icon name="plus" size={18}/></button>
              </div>
              <div style={{ position: "relative", padding: "4px 0" }}>
                <input
                  type="range" min={20} max={250} step={5} value={area}
                  onChange={(e) => setArea(+e.target.value)}
                  style={slider}
                />
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)",
                  marginTop: 8
                }}>
                  <span>20 м²</span><span>85</span><span>150</span><span>250 м²</span>
                </div>
              </div>
            </Field>

            {/* 2. Type */}
            <Field label="Тип дома">
              <SegControl
                value={type}
                onChange={setType}
                options={[
                  { v: "sip", l: "СИП-панель" },
                  { v: "frame", l: "Каркас" },
                  { v: "combo", l: "Комбинированный" },
                ]}
              />
            </Field>

            {/* 3. Floors */}
            <Field label="Этажность">
              <SegControl
                value={floors}
                onChange={setFloors}
                options={[
                  { v: "1", l: "1 этаж" },
                  { v: "2", l: "2 этажа" },
                  { v: "mansard", l: "С мансардой" },
                ]}
              />
            </Field>

            {/* 4. Extras */}
            <Field label="Что включить в расчёт">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  ["foundation", "Фундамент"],
                  ["eng", "Инженерия — электрика, вода, тепло"],
                  ["finish", "Чистовая отделка"],
                  ["mortgage", "Помощь с ипотекой / маткапиталом"],
                ].map(([k, l]) => (
                  <CheckRow key={k} checked={extras[k]} onChange={(v) => setExtras({...extras, [k]: v})} label={l}/>
                ))}
              </div>
            </Field>

            {/* 5. Channel */}
            <Field label="Куда отправить расчёт?">
              <SegControl
                value={channel}
                onChange={setChannel}
                options={[
                  { v: "messenger", l: "В мессенджер" },
                  { v: "call", l: "По телефону" },
                ]}
              />
            </Field>

            {/* 6. Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "stretch", marginTop: 4 }}>
              <input
                type="tel"
                placeholder="+7 ___ ___ __ __"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  height: 56, borderRadius: 14, padding: "0 20px",
                  border: "1.5px solid var(--line)", background: "var(--bg)",
                  fontSize: 16, fontFamily: "var(--font-mono)", color: "var(--ink)",
                  outline: "none",
                }}
              />
              <CheckRow checked={wa} onChange={setWa} label="WhatsApp / Telegram" tight/>
            </div>
          </div>

          {/* RIGHT - sticky price + CTA */}
          <div style={{
            background: "var(--bg-soft)",
            borderRadius: 22,
            padding: 28,
            display: "flex", flexDirection: "column",
            position: "sticky", top: 110, alignSelf: "start",
          }}>
            <div className="eyebrow">Примерная стоимость</div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 500,
              fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.02em",
              color: "var(--ink)", marginTop: 12, marginBottom: 4,
              fontVariantNumeric: "tabular-nums"
            }}>
              от <span style={{ color: "var(--terra)" }}>{fmt(price)} ₽</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-2)", marginBottom: 18 }}>
              {area} м² · {{sip:"СИП", frame:"каркас", combo:"комбинированный"}[type]} · {{1:"1 этаж", 2:"2 этажа", mansard:"мансарда"}[floors]}
            </div>

            <div className="hr"/>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "18px 0" }}>
              <PriceRow label="Коробка дома" value={fmt(Math.round(area * base * floorMult)) + " ₽"}/>
              {extras.foundation && <PriceRow label="Фундамент УШП" value="+ 280 000 ₽"/>}
              {extras.eng && <PriceRow label="Инженерия" value="+ 420 000 ₽"/>}
              {extras.finish && <PriceRow label="Чистовая отделка" value="+ 540 000 ₽"/>}
              {extras.mortgage && <PriceRow label="Помощь с ипотекой" value="бесплатно"/>}
            </div>

            <div className="hr"/>

            <button className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 20 }}>
              Получить расчёт за 15 минут <Icon name="arrow-right"/>
            </button>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 14, textAlign: "center", lineHeight: 1.5 }}>
              Без обязательств. Менеджер не позвонит<br/>без вашего разрешения.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const iconBtn = {
  width: 44, height: 44, borderRadius: 999,
  border: "1.5px solid var(--line)", background: "var(--bg)",
  display: "flex", alignItems: "center", justifyContent: "center",
};

const slider = {
  width: "100%",
  WebkitAppearance: "none",
  appearance: "none",
  height: 4,
  background: "var(--line)",
  borderRadius: 99,
  outline: "none",
};

function Field({ label, hint, children }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>{label}</div>
        {hint && <div style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>{hint}</div>}
      </div>
      {children}
    </div>
  );
}

function SegControl({ value, onChange, options }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${options.length}, 1fr)`,
      gap: 4,
      background: "var(--bg)",
      borderRadius: 14,
      padding: 4,
      border: "1.5px solid var(--line)",
    }}>
      {options.map(o => (
        <button key={o.v} onClick={() => onChange(o.v)}
          style={{
            height: 46, borderRadius: 10,
            background: value === o.v ? "var(--ink)" : "transparent",
            color: value === o.v ? "#fff" : "var(--ink-2)",
            fontWeight: 500, fontSize: 14,
            transition: "all .15s ease",
          }}>
          {o.l}
        </button>
      ))}
    </div>
  );
}

function CheckRow({ checked, onChange, label, tight }) {
  return (
    <button onClick={() => onChange(!checked)} style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: tight ? "0 16px" : "12px 14px",
      height: tight ? 56 : "auto",
      borderRadius: 12,
      background: checked ? "rgba(201,123,74,0.08)" : "var(--bg)",
      border: checked ? "1.5px solid var(--terra)" : "1.5px solid var(--line)",
      textAlign: "left", lineHeight: 1.3, fontSize: 13, color: "var(--ink)",
      transition: "all .15s ease"
    }}>
      <span style={{
        width: 20, height: 20, borderRadius: 6, flexShrink: 0,
        background: checked ? "var(--terra)" : "#fff",
        border: checked ? "none" : "1.5px solid var(--line)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff",
      }}>
        {checked && <Icon name="check" size={13} stroke={2.5}/>}
      </span>
      <span style={{ fontWeight: 500 }}>{label}</span>
    </button>
  );
}

function PriceRow({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
      <span style={{ color: "var(--ink-2)" }}>{label}</span>
      <span className="num" style={{ fontWeight: 600, color: "var(--ink)" }}>{value}</span>
    </div>
  );
}

/* ---------- Compact (Hero) ---------- */

function HeroCalculator() {
  const [area, setArea] = React.useState(85);
  const [type, setType] = React.useState("sip");
  const [floors, setFloors] = React.useState("1");
  const [extras, setExtras] = React.useState({ foundation: true, eng: false, finish: false, mortgage: false });
  const [phone, setPhone] = React.useState("");

  const base = { sip: 14000, frame: 18000, combo: 22000 }[type];
  const floorMult = { "1": 1, "2": 1.25, "mansard": 1.12 }[floors];
  const extraSum = (extras.foundation ? 280000 : 0)
                 + (extras.eng ? 420000 : 0)
                 + (extras.finish ? 540000 : 0);
  const price = Math.round((area * base * floorMult + extraSum) / 1000) * 1000;
  const fmt = (n) => n.toLocaleString("ru-RU").replace(/,/g, " ");

  return (
    <div id="calc" style={{
      background: "#fff",
      borderRadius: 28,
      padding: 28,
      boxShadow: "var(--shadow)",
      border: "1px solid var(--line)",
      display: "flex", flexDirection: "column",
    }}>
      {/* Header: title + price */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 20, gap: 16 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 4 }}>Калькулятор · бесплатно</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.01em", lineHeight: 1.15 }}>
            Узнайте стоимость <br/>дома за 15 минут
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            примерно
          </div>
          <div className="num" style={{
            fontFamily: "var(--font-display)", fontWeight: 500,
            fontSize: 26, color: "var(--terra)", marginTop: 2,
            fontVariantNumeric: "tabular-nums", letterSpacing: "-0.01em"
          }}>
            от {fmt(price)} ₽
          </div>
        </div>
      </div>

      {/* Area */}
      <CompactField label="Площадь дома" hint={`${area} м²`}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setArea(Math.max(20, area - 5))} style={miniBtn}>
            <Icon name="minus" size={14}/>
          </button>
          <input
            type="range" min={20} max={250} step={5} value={area}
            onChange={(e) => setArea(+e.target.value)}
            style={{ ...sliderCompact, flex: 1 }}
          />
          <button onClick={() => setArea(Math.min(250, area + 5))} style={miniBtn}>
            <Icon name="plus" size={14}/>
          </button>
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          fontSize: 10, color: "var(--ink-3)", fontFamily: "var(--font-mono)",
          marginTop: 6, padding: "0 30px"
        }}>
          <span>20</span><span>250 м²</span>
        </div>
      </CompactField>

      {/* Type */}
      <CompactField label="Технология">
        <SegControl
          value={type} onChange={setType}
          options={[
            { v: "sip", l: "СИП" },
            { v: "frame", l: "Каркас" },
            { v: "combo", l: "Комбо" },
          ]}
        />
      </CompactField>

      {/* Floors */}
      <CompactField label="Этажность">
        <SegControl
          value={floors} onChange={setFloors}
          options={[
            { v: "1", l: "1 этаж" },
            { v: "2", l: "2 этажа" },
            { v: "mansard", l: "Мансарда" },
          ]}
        />
      </CompactField>

      {/* Extras as chip toggles */}
      <CompactField label="Включить в расчёт">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {[
            ["foundation", "Фундамент"],
            ["eng", "Инженерия"],
            ["finish", "Отделка"],
            ["mortgage", "Ипотека"],
          ].map(([k, l]) => (
            <ChipToggle key={k}
              active={extras[k]}
              onClick={() => setExtras({...extras, [k]: !extras[k]})}>
              {l}
            </ChipToggle>
          ))}
        </div>
      </CompactField>

      {/* Phone */}
      <input
        type="tel"
        placeholder="+7 ___ ___ __ __"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          height: 52, borderRadius: 12, padding: "0 18px",
          border: "1.5px solid var(--line)", background: "var(--bg)",
          fontSize: 15, fontFamily: "var(--font-mono)", color: "var(--ink)",
          outline: "none", marginTop: 4,
        }}
      />

      <button className="btn btn-primary" style={{ width: "100%", marginTop: 12, height: 56 }}>
        Получить расчёт <Icon name="arrow-right" size={16}/>
      </button>
      <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 10, textAlign: "center", lineHeight: 1.4 }}>
        Без обязательств. Расчёт на WhatsApp за 15 минут.
      </div>
    </div>
  );
}

function CompactField({ label, hint, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: "var(--ink)" }}>{label}</div>
        {hint && <div className="num" style={{ fontSize: 12, color: "var(--terra)", fontWeight: 600 }}>{hint}</div>}
      </div>
      {children}
    </div>
  );
}

function ChipToggle({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500,
      background: active ? "var(--ink)" : "#fff",
      color: active ? "#fff" : "var(--ink-2)",
      border: active ? "1.5px solid var(--ink)" : "1.5px solid var(--line)",
      transition: "all .15s ease",
      display: "inline-flex", alignItems: "center", gap: 6
    }}>
      {active && <Icon name="check" size={12} stroke={3}/>}
      {children}
    </button>
  );
}

const miniBtn = {
  width: 32, height: 32, borderRadius: 999,
  border: "1.5px solid var(--line)", background: "var(--bg)",
  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
};

const sliderCompact = {
  WebkitAppearance: "none", appearance: "none",
  height: 4, background: "var(--line)", borderRadius: 99, outline: "none",
};

Object.assign(window, { Calculator, HeroCalculator });
