import React, { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    const copyrightEl = document.getElementById("copyrightText");

    if (copyrightEl) {
      const currentYear = new Date().getFullYear();
      const copyrightText = `@ ${currentYear} Isaac Del Castillo`;

      copyrightEl.innerHTML = copyrightText;
    }
  }, []);
  return (
    <>
      <section className="container">
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4">
          <div className=" align-items-center" id="copyrightText"></div>
        </footer>
      </section>
    </>
  );
}
export default Footer;
