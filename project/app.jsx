/* App root */

function App() {
  return (
    <div className="page">
      <Header/>
      <Hero/>
      <Portfolio/>
      <WhomFor/>
      <Services/>
      <Reasons/>
      <Comparison/>
      <FAQ/>
      <FinalCTA/>
      <Footer/>
      <MobilePreview/>
      <StyleGuide/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
