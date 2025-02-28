export default function Footer(){
    const hour = new Date().getHours();
    const openHour=8;
    const closeHour=20;
    const isOpen = hour => openHour && hour <= closeHour;
  
  return(
    <footer>{
  isOpen ? (
    <p>Aksam {closeHour} saatine kadar acigiz. </p>
  ):
  (
    <p>Acilis saatimiz {openHour} .</p>
  )
  }
    </footer>
  );
  }