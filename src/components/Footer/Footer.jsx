import { Link } from "react-router-dom";
import { ButtonMenu } from "../Header/ButtonMenu/ButtonMenu";

      
      export default function Footer() {
        return (
            <>
            <footer className="footer footer-overlay bg-img">
        

        <div className="footer-bottom bg-dark">
          <div className="container">
            <div className="row">

              <div className="col-sm-6 text-sm-center">
                <span className="copyright">
                  &copy; 2017 Chelsy Theme, Made by <a href="https://deothemes.com">DeoThemes</a>
                </span>
              </div>

              <div className="col-sm-6">
                <ul className="footer-bottom-links text-right text-sm-center">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </footer> 
            </>
        )
      }
      