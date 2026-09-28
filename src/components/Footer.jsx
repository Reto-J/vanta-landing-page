function Footer() {
  const footerLinks = {
    Product: ["Features", "Solutions", "Pricing"],
    Company: ["About", "Careers", "Contact"],
    Resources: ["FAQ", "Documentation", "Help Center"],
  };

  return (
    <>
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            VANTA
          </a>

          <p>
            Turn ideas into momentum.
            <br />
            One intelligent workspace for
            <br />
            teams that want to move forward.
          </p>
        </div>

        <div className="footer__links">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div className="footer__column" key={category}>
              <h3>{category}</h3>

              {links.map((link) => (
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 VANTA. All rights reserved.</span>

        <div className="footer__socials">
          <a href="#footer">X</a>
          <a href="#footer">in</a>
          <a href="#footer">ig</a>
        </div>

        <a href="#home" className="footer__back">
          Back to top ↑
        </a>
      </div>
    </footer>
    </>
  );
}

export default Footer;