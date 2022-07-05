import data from "../data.js";
import Pdf from "../components/Pdf.js";

function Classes(props) {
  const pdfs = data.map((item) => (
    <Pdf
      key={item.id}
      {...item}
      score={props.score}
      handleScoreOnChecked={props.handleScoreOnChecked}
      handleScoreOnUnchecked={props.handleScoreOnUnchecked}
    />
  ));

  return (
    <div className="container-fluid class--page">
      <section className="section--style justify-content-center shadow orange">
        <strong className="center">Μαθήματα</strong>
        <p className="center">
          {" "}
          Πληροφορική Α΄ Γυμνασίου
          <br /> Ενότητα 2 <br /> Κεφάλαια 5 - 8
        </p>
      </section>
      <div className="container"> {pdfs} </div>
    </div>
  );
}

export default Classes;
