import { Logo } from "@/app/ui";
import "./Footer.css";
import { IconSocial } from "@/app/ui";

const products = [
  "Download",
  "Pricing",
  "Locations",
  "Server",
  "Countries",
  "Blog",
];

const engages = [
  "About PersonalCloud?",
  "FAQ",
  "Tutorials",
  "About Us",
  "Privacy Policy",
  "Terms of Service",
];

const moneys = ["Affiliate", "Become Partner"];

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__Box">
        <Logo />
        <p className="Footer__Description">
          Descubre la versatilidad digital con Personal Cloud. Únete a nosotros
          y experimenta la simplicidad y el placer de tener tu espacio digital
          todo en uno.
        </p>
        <div className="Footer__SocialLinks">
          <IconSocial />
        </div>
        <span className="Footer__CopyRight">©2024 PersonalCloud</span>
      </div>
      <div className="Footer__Links">
        <div>
          <ul className="Footer__List">
            <h3 className="Footer__List--Title">Products</h3>
            {products.map((product) => (
              <li key={product}>
                <a href="" className="Footer__List--Item link">
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="Footer__List">
            <h3 className="Footer__List--Title">Engage</h3>
            {engages.map((engage) => (
              <li key={engage}>
                <a href="" className="Footer__List--Item link">
                  {engage}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="Footer__List">
            <h3 className="Footer__List--Title">Ear Money</h3>
            {moneys.map((money) => (
              <li key={money}>
                <a href="" className="Footer__List--Item link">
                  {money}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
