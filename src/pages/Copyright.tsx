export default function Copyright() {
  return (
    <div className="container flex flex-wrap items-center justify-center py-4 mx-auto space-x-4 space-y-4 md:justify-between">
      <p className="text-center">
        All Rights Reserved | Copyrighted by ©2023{" "}
        <span className="font-semibold">Abdul Alim</span>
      </p>
      <div className="flex space-x-3">
        <p> We Support</p>
        <img
          src={process.env.PUBLIC_URL + "/img/payment-methods/discover.png"}
          alt="discover"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/payment-methods/mastercard.png"}
          alt="mastercard"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/payment-methods/paypal.png"}
          alt="paypal"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/payment-methods/visa.png"}
          alt="visa"
        />
      </div>
    </div>
  );
}
