import React from "react";
import { CgMenuRight } from "react-icons/cg";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandTiktok,
  TbBrandTwitter,
  TbBrandWhatsapp,
  TbMinusVertical,
} from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-white navbar-expand-lg py-3 px-2 shadow">
        <div className="container">
          <a href="/" className="navbar-brand fw-bold uppercase">
            Codewithmorife
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <CgMenuRight size={25} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav d-flex">
              <li className="nav-item me-3">
                <a href="/" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="/#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="/#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item my-3 my-lg-0">
                <span className="nav-link">
                  <i className="me-3 d-none d-lg-inline-block">
                    <TbMinusVertical size={20} />
                  </i>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/Morifeoluwa"
                  >
                    <i className="me-3">
                      <TbBrandFacebook size={20} />
                    </i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.twitter.com/this_ismorife"
                  >
                    <i className="me-3">
                      <TbBrandTwitter size={20} />
                    </i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/this_ismorife"
                  >
                    <i className="me-3">
                      <TbBrandInstagram size={20} />
                    </i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://wa.me/+2347063785030"
                  >
                    <i className="me-3">
                      <TbBrandWhatsapp size={20} />
                    </i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.io/this_ismorife"
                  >
                    <i className="me-3">
                      <TbBrandGithub size={20} />
                    </i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://tiktok.com/this_ismorife"
                  >
                    <i className="">
                      <TbBrandTiktok size={20} />
                    </i>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
