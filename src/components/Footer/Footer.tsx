type Props = TFooterContent

export const Footer = ({ content }: Props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          {content.title}
          <a className="footer__link" href={`tel:${content.phoneNumber}`}>
            {content.phoneNumber}
          </a>
        </h3>
        <div className="footer__linksContainer">
          {content.links.map((column, idx) => (
            <ul key={idx}>
              {column.map((link) => (
                <li key={link}>
                  <a className="footer__link" href="#1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {content.copy && <p>{content.copy}</p>}
      </div>
    </footer>
  )
}
