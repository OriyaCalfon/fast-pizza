import '../styles/ui.css'

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="bars-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loader;