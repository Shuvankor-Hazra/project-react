import React from "react";
import Col from "react-bootstrap/esm/Col";
import Button from "../Button/Button";
import "./SinglePricing.css";

const SinglePricing = () => {
  return (
    <>
      <Col md={4}>
        <div className="single-pricing regular">
          <h3>Basic</h3>
          <div className="price-area">$750/month</div>
          <div className="plan-area">
            <ul>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Full Website Audit
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Weekly Blogs
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i> Directory
                Listings
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i> Pagespeed Boost
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Structured Data
              </li>
              <li>
                <i className="fa-solid fa-square-xmark"></i>
                Content Audit
              </li>
              <li>
                <i className="fa-solid fa-square-xmark"></i>
                Website Maintenance
              </li>
              <li>
                <i className="fa-solid fa-square-xmark"></i>
                Marketing Dashboard
              </li>
            </ul>
          </div>
          <div className="btn-area d-flex justify-content-center align-items-center">
            <Button btnName="Get Started" />
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="single-pricing popular">
          <h3>Premium</h3>
          <div className="ribbon">Popular</div>
          <div className="price-area">$1750/month</div>
          <div className="plan-area">
            <ul>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Full Website Audit
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Weekly Blogs
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i> Directory
                Listings
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i> Pagespeed Boost
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i> Structured Data
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Content Audit
              </li>
              <li>
                <i className="fa-solid fa-square-xmark"></i>
                Website Maintenance
              </li>
              <li>
                <i className="fa-solid fa-square-xmark"></i>
                Marketing Dashboard
              </li>
            </ul>
          </div>
          <div className="btn-area d-flex justify-content-center align-items-center">
            <Button btnName="Get Started" />
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="single-pricing regular">
          <h3>Ultimate</h3>
          <div className="price-area">$3,300/month</div>
          <div className="plan-area">
            <ul>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Full Website Audit
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Weekly Blogs
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i> Directory
                Listings
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i> Pagespeed Boost
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i> Structured Data
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Content Audit
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Website Maintenance
              </li>
              <li>
                <i className="fa-regular fa-square-check"></i>
                Marketing Dashboard
              </li>
            </ul>
          </div>
          <div className="btn-area d-flex justify-content-center align-items-center">
            <Button btnName="Get Started" />
          </div>
        </div>
      </Col>
    </>
  );
};

export default SinglePricing;
