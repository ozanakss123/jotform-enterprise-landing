import { BiChevronDown } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

import google from "../assets/google.png";
import ios from "../assets/ios.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-first">
          <div className="footer-top-first-item">
            <p className="title">Jotform</p>
            <ul>
              <li>Create a Form</li>
              <li>My Forms</li>
              <li>Pricing</li>
              <li>Jotform Enterprise</li>
              <li>
                <div className="list-expand">
                  <p>Examples</p>
                  <BiChevronDown className="down-icon" />
                </div>
              </li>
              <li>
                <div className="list-expand">
                  <p>Features</p>
                  <BiChevronDown className="down-icon" />
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-top-first-item">
            <p className="title">Marketplace</p>
            <ul>
              <li>
                <div className="list-expand">
                  <p>Templates</p>
                  <BiChevronDown className="down-icon" />
                </div>
              </li>
              <li>Form Themes</li>
              <li>Form Widgets</li>
              <li>
                <div className="list-expand">
                  <p>Integrations</p>
                  <BiChevronDown className="down-icon" />
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-top-first-item">
            <p className="title">Support</p>
            <ul>
              <li>Contact Us</li>
              <li>User Guide</li>
              <li>
                <div className="list-expand">
                  <p>Help</p>
                  <BiChevronDown className="down-icon" />
                </div>
              </li>
              <li>Webinars</li>
              <li>Report Abuse</li>
              <li>Report Copyright Issue</li>
            </ul>
          </div>
          <div className="footer-top-first-item">
            <p className="title">Company</p>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Kit</li>
              <li>In the News</li>
              <li>Newsletters</li>
              <li>
                <div className="list-expand">
                  <p>Partnerships</p>
                  <BiChevronDown className="down-icon" />
                </div>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="footer-top-mobile">
          <p className="footer-top-mobile-title">Mobile Apps</p>
          <div className="footer-top-mobile-logo">
            <img src={google} alt="google logo" />
            <img src={ios} alt="ios logo" />
          </div>
        </div>
      </div>
      <div className="footer-mid">
        <div className="footer-mid-color">
          <svg
            className="logo"
            width="53"
            height="59"
            viewBox="0 0 53 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M14.4509 55.1332C15.5462 56.1951 14.7721 58.0143 13.2168 58.0143H3.4831C1.56265 58.0143 0 56.4995 0 54.6377V45.2017C0 43.6939 1.87664 42.9436 2.97195 44.0054L14.4509 55.1332Z"
              fill="#0A1551"
            ></path>
            <path
              d="M29.6655 55.8676C26.7843 53.0052 26.7843 48.3642 29.6655 45.5018L40.0638 35.1713C42.945 32.3089 47.6164 32.3089 50.4976 35.1713C53.3788 38.0338 53.3788 42.6747 50.4976 45.5371L40.0993 55.8676C37.2181 58.73 32.5468 58.73 29.6655 55.8676Z"
              fill="#FFB629"
            ></path>
            <path
              d="M2.1968 29.9101C-0.684414 27.0476 -0.684413 22.4067 2.1968 19.5443L19.696 2.14685C22.5772 -0.71559 27.2486 -0.715594 30.1298 2.14685C33.011 5.00929 33.011 9.65022 30.1298 12.5127L12.6306 29.9101C9.74937 32.7725 5.078 32.7725 2.1968 29.9101Z"
              fill="#09F"
            ></path>
            <path
              d="M16.5015 42.3095C13.6203 39.4471 13.6203 34.8062 16.5015 31.9437L40.1461 8.45322C43.0273 5.59079 47.6986 5.59079 50.5798 8.45322C53.4611 11.3157 53.4611 15.9566 50.5798 18.819L26.9353 42.3095C24.0541 45.1719 19.3827 45.1719 16.5015 42.3095Z"
              fill="#FF6100"
            ></path>
          </svg>
          <div className="footer-mid-item-container">
            <div className="footer-mid-item">
              <MdLocationPin className="footer-mid-item-pin" />
              <p>
                <strong>Ankara </strong>Jotform Yaz??l??m A.??. ??niversiteler Mah.
                Hacettepe Teknokent Yerle??kesi 6. ArGe C Blok No:62, ??ankaya,
                Ankara
              </p>
            </div>
            <div className="footer-mid-item">
              <MdLocationPin className="footer-mid-item-pin" />
              <p>
                <strong>??zmir </strong>Jotform Yaz??l??m A.??. G??lbah??e Mah. ??YTE
                Yerle??kesi Teknopark ??zmir A9 Binas?? No:16, Urla, ??zmir
              </p>
            </div>
            <div className="footer-mid-item">
              <MdLocationPin className="footer-mid-item-pin" />
              <p>
                <strong>??stanbul </strong>Jotform Yaz??l??m A.??. Ayaza??a Mah.
                Kemerburgaz Cad. Vadistanbul, No:7/A Ofis 20 Kat 6, Sar??yer,
                ??stanbul
              </p>
            </div>
            <div className="footer-mid-item">
              <MdLocationPin className="footer-mid-item-pin" />
              <p>
                <strong>San Francisco </strong>Jotform Inc. 4 Embarcadero
                Center, Suite 780, San Francisco CA 94111
              </p>
            </div>
            <div className="footer-mid-brand">
              <p>
                ?? 2023 Jotform Inc. The name "Jotform" and the Jotform logo are
                registered trademarks of Jotform Inc.
              </p>
            </div>
          </div>
          <div className="footer-mid-dropdown">
            <select name="language" id="language">
              <option value="en">English</option>
              <option value="es">Espa??ol</option>
              <option value="fr">Fran??ais</option>
              <option value="it">Italiano</option>
              <option value="por">Portugu??s</option>
              <option value="de">Deutsch</option>
              <option value="tr">T??rk??e</option>
              <option value="ne">Nederlands</option>
              <option value="mag">Magyar</option>
              <option value="suo">Suomi</option>
            </select>
          </div>
        </div>
      </div>
      <div className="footer-bottom-color">
      <div className="footer-bottom">
        <div><a href="" className="footer-bottom-link">
          Terms & Conditions
        </a>
        <a href="" className="footer-bottom-link">
          Privacy Policy
        </a>
        <a href="" className="footer-bottom-link">
          Security
        </a>
        <a href="" className="footer-bottom-link">
          Accessibility Statement
        </a></div>
        <div className="social">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg%22%3E">
            <path
              d="M16 0c8.8366 0 16 7.1634 16 16 0 7.986-5.851 14.6053-13.5 15.8056V20.625h3.7281L22.9375 16H18.5v-3.0013c0-1.2654.6198-2.4987 2.6074-2.4987h2.0176V6.5625S21.294 6.25 19.5434 6.25c-3.6547 0-6.0434 2.215-6.0434 6.225V16H9.4375v4.625H13.5v11.1806C5.851 30.6053 0 23.9861 0 16 0 7.1634 7.1634 0 16 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <svg viewBox="0 0 32 32">
            <path
              fill-rule="nonzero"
              d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8.088 12.86c.244 5.3866667-3.7733333 11.392-10.8853333 11.392-2.1626667 0-4.1746667-.6346667-5.86933337-1.7213333 2.032.24 4.05999997-.3253334 5.66933337-1.5853334-1.6746667-.0306666-3.08933337-1.1386666-3.5786667-2.66.6013333.1146667 1.1933333.0813334 1.7306667-.0653333-1.84133337-.3706667-3.11333337-2.0293333-3.07200003-3.804.51733333.2866667 1.10666666.4586667 1.73466666.4786667-1.70533333-1.14-2.188-3.392-1.18533333-5.11333337 1.888 2.31733337 4.7106667 3.84133337 7.8933333 4.00133337C15.9666667 11.388 17.784 9.08 20.2573333 9.08c1.1 0 2.096.46533333 2.7946667 1.2093333.872-.1706666 1.6933333-.49066663 2.432-.9293333-.2866667.8946667-.8933333 1.644-1.684 2.1186667.7746667-.0933334 1.5133333-.2986667 2.1986667-.604-.512.7706666-1.16 1.4453333-1.9106667 1.9853333z"
            ></path>
          </svg>
          <svg viewBox="0 0 32 32">
            <path
              fill-rule="evenodd"
              d="M16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16S0 24.836556 0 16 7.163444 0 16 0zm-4.2666667 11.7333333H8.53333333v11.7333334h3.19999997V11.7333333zm5.3333334 0h-3.2v11.7333334h3.2v-5.9776c0-3.3205334 4.2666666-3.5925334 4.2666666 0v5.9776h3.2v-7.2096c0-5.6032-5.9776-5.3994667-7.4666666-2.6410667v-1.8826667zM10.1333333 6.6176c-1.03039997 0-1.86666663.84266667-1.86666663 1.8816 0 1.03893333.83626666 1.8816 1.86666663 1.8816C11.1648 10.3808 12 9.53813333 12 8.4992c0-1.03893333-.8362667-1.8816-1.8666667-1.8816z"
            ></path>
          </svg>
          <svg viewBox="0 0 32 32">
            <path
              fill-rule="evenodd"
              d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M11.5,21.7c-3.2,0-5.8-2.6-5.8-5.8c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8C17.3,19.1,14.7,21.7,11.5,21.7z M20.7,21.3c-1.6,0-2.9-2.4-2.9-5.5s1.3-5.5,2.9-5.5c1.6,0,2.9,2.4,2.9,5.5S22.3,21.3,20.7,21.3z M25.2,20.7c-0.6,0-1-2.2-1-4.9s0.5-4.9,1-4.9s1,2.2,1,4.9C26.2,18.6,25.8,20.7,25.2,20.7z"
            ></path>
          </svg>
          <svg viewBox="0 0 32 32">
            <path
              fill-rule="evenodd"
              d="M16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16S0 24.836556 0 16 7.163444 0 16 0zm2.275068 11.2c-1.420273 0-2.196164.8581006-2.196164 2.3597765v4.880447c0 1.5016759.775891 2.3597765 2.196164 2.3597765 1.420274 0 2.196165-.8581006 2.196165-2.3597765v-4.880447c0-1.5016759-.775891-2.3597765-2.196165-2.3597765zm5.16822 0c-1.420274 0-2.156713.8581006-2.156713 2.3597765v4.880447c0 1.5016759.736439 2.3597765 2.156713 2.3597765S25.6 19.9418994 25.6 18.4402235v-2.9765363h-2.025205v1.3407821h.657534v1.7296089c0 .6703911-.289315.9117319-.749589.9117319-.460274 0-.749589-.2413408-.749589-.9117319v-5.0681564c0-.6703911.289315-.9251397.749589-.9251397.460274 0 .749589.2547486.749589.9251397v1.0055866H25.6v-.9117319C25.6 12.0581006 24.863562 11.2 23.443288 11.2zm-14.860274.1072626H6.4v9.3854748h2.275068c1.446576 0 2.196165-.7776536 2.196165-2.2256983v-.7642458c0-.9921788-.302466-1.7027933-1.078356-2.0111732.644383-.3083799.933698-.9251397.933698-1.8905028v-.3351955c0-1.4480447-.644383-2.1586592-2.143561-2.1586592zm4.602739 0h-1.446575v9.3854748h3.826849v-1.3407821h-2.380274v-8.0446927zm5.089315 1.2335195c.460274 0 .74959.2547486.74959.9251397v5.0681564c0 .6703911-.289316.9251397-.74959.9251397-.460273 0-.749589-.2547486-.749589-.9251397v-5.0681564c0-.6703911.289316-.9251397.749589-.9251397zm-9.784109 3.9284916c.657534 0 .933699.2681565.933699 1.1396648v.8178771c0 .6972067-.263014.9251397-.74959.9251397h-.828493v-2.8826816h.644384zm.052603-3.821229c.512876 0 .736438.2949721.736438.9653631v.522905c0 .750838-.328767.9921788-.867945.9921788h-.56548v-2.4804469h.696987z"
            ></path>
          </svg>
          <svg viewBox="0 0 32 32">
            <path
              fill-rule="nonzero"
              d="M16 0C7.164 0 0 7.16266667 0 16c0 6.7786667 4.217333 12.568 10.169333 14.8986667-.14-1.2653334-.266666-3.2066667.056-4.588.290667-1.2493334 1.876-7.9533334 1.876-7.9533334s-.478666-.9586666-.478666-2.376c0-2.224 1.289333-3.8853333 2.894666-3.8853333 1.364 0 2.024 1.0253333 2.024 2.2533333 0 1.372-.873333 3.424-1.325333 5.3266667-.377333 1.592.798667 2.892 2.369333 2.892 2.844 0 5.029334-2.9986667 5.029334-7.3266667 0-3.8306666-2.752-6.5093333-6.682667-6.5093333-4.552 0-7.224 3.4146667-7.224 6.9426667 0 1.3746666.529333 2.8506666 1.190667 3.6506666.130666.1586667.149333.2986667.110666.46l-.444 1.8133334c-.070666.2933333-.232.356-.536.2146666-1.998666-.9306666-3.248-3.852-3.248-6.1986666C5.781333 10.568 9.448 5.932 16.353333 5.932c5.550667 0 9.864 3.956 9.864 9.2413333 0 5.5146667-3.476 9.952-8.302666 9.952-1.621334 0-3.145334-.8413333-3.666667-1.8373333l-.997333 3.804c-.361334 1.3906667-1.336 3.1333333-1.989334 4.1946667C12.76 31.7493333 14.350667 32 16 32c8.836 0 16-7.164 16-16 0-8.83733333-7.164-16-16-16z"
            ></path>
          </svg>
          <svg viewBox="0 0 32 32">
            <path
              fill-rule="evenodd"
              d="M16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16S0 24.836556 0 16 7.163444 0 16 0zM9.908 8.94730015c-3.1176.2128-3.4848 2.09600005-3.508 7.05280005l.003999.5277219c.049319 4.5556016.496685 6.3192453 3.504001 6.5250781l.644063.0377656c3.104739.1574049 8.855578.1454619 11.539937-.0377656 3.1176-.2128 3.4848-2.096 3.508-7.0528l-.003999-.527722c-.049319-4.5556016-.496685-6.31924532-3.504001-6.52507805-2.8832-.1968-9.3048-.196-12.184 0zM13.6 12.8001002l6.4 3.1944-6.4 3.2056v-6.4z"
            ></path>
          </svg>
          <svg viewBox="0 0 32 32">
            <path
              fill-rule="evenodd"
              d="M16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16S0 24.836556 0 16 7.163444 0 16 0zm1.944555 6.40453063h-3.888877c-.954608.00670848-1.327508.02199543-2.013278.05306937-3.410609.15652174-5.339025 2.01113422-5.571047 5.3586246l-.02822.5643676c-.029219.6746348-.039911 1.155255-.042477 2.6911087l.003875 2.8728249c.006708.9548454.021995 1.3281045.053069 2.0138742.16 3.4864 2.0944 5.424 5.584 5.584l1.181227.0424436c.358947.00748.797564.0116257 1.462715.0136204l3.27191-.0030862c.945304-.0067556 1.318281-.0220445 2.000948-.0529778 3.4832-.16 5.4256-2.0944 5.5832-5.584l.040947-1.0848512c.008947-.3771392.013722-.8333056.015911-1.5590144l-.00308-3.2717788c-.006756-.9450667-.022045-1.3176889-.052978-2.0003556-.153391-3.40747826-2.010233-5.33888847-5.357821-5.5710429l-.564402-.02822415c-.497191-.02152966-.889231-.03300072-1.675622-.03860232zM19.88 8.1864c2.6016.1184 3.8168 1.3528 3.9352 3.9352l.039475 1.0644608c.006279.2761056.01021.5953104.012571 1.0377288l-.003144 3.9586808C23.85696 18.920768 23.84256 19.2728 23.8152 19.88c-.1192 2.58-1.3312 3.8168-3.9352 3.9352l-1.158346.0418026c-.350293.0071919-.778271.0110209-1.43048.0128278l-3.472499-.0049792C13.08032 23.857632 12.728 23.84304 12.1208 23.8152c-2.537514-.1159784-3.750437-1.2929917-3.923204-3.7299954l-.035339-.7441998c-.019475-.5010835-.027972-.9589118-.031102-1.986202l.000813-2.9072005c.00509-1.2082103.019501-1.5687368.053632-2.3268023.115978-2.51182703 1.266485-3.74904894 3.727109-3.92314813l.846541-.03870131c.465069-.01657674.927798-.02410141 1.886348-.02700272l3.090871.00155909c1.063588.00559284 1.425364.01999125 2.143531.05289307zM16 11.0704c-2.7224 0-4.9296 2.2072-4.9296 4.9296S13.2776 20.9304 16 20.9304 20.9296 18.7232 20.9296 16c0-2.7224-2.2072-4.9296-4.9296-4.9296zM16 12.8c1.7672 0 3.2 1.4328 3.2 3.2 0 1.768-1.4328 3.2-3.2 3.2s-3.2-1.432-3.2-3.2c0-1.7672 1.4328-3.2 3.2-3.2zm5.1248-3.076c-.6368 0-1.1528.516-1.1528 1.152 0 .636.516 1.152 1.1528 1.152.636 0 1.1512-.516 1.1512-1.152 0-.636-.5152-1.152-1.1512-1.152z"
            ></path>
          </svg>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
