import React from 'react'

export default function FooterBottom() {
  return (
    <div id="footer-bottom">
            <div className="container">
            <div className="row d-flex flex-wrap justify-content-between">
                <div className="col-md-4 col-sm-6">
                <div className="Shipping d-flex">
                    <p>We ship with:</p>
                    <div className="card-wrap ps-2">
                    <img src="images/dhl.png" alt="visa" />
                    <img src="images/shippingcard.png" alt="mastercard" />
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-6">
                <div className="payment-method d-flex">
                    <p>Payment options:</p>
                    <div className="card-wrap ps-2">
                    <img src="images/visa.jpg" alt="visa" />
                    <img src="images/mastercard.jpg" alt="mastercard" />
                    <img src="images/paypal.jpg" alt="paypal" />
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-6">
                <div className="copyright">
                    <p>© Copyright 2023 MiniStore. Design by <a href="https://templatesjungle.com/">TemplatesJungle</a> Distribution by <a href="https://themewagon.com">ThemeWagon</a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}
