import "./FooterStyle.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      Made with{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>{" "}
      by{" "}
      <a href="https://github.com/jogendra-Sai" target="_blank">
        Jogendra Sai Babu
      </a>
    </footer>
  );
};

export default Footer;
