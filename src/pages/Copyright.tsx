export default function Copyright() {
  return (
    <div className="bg-green-900 text-green-50">
      <div className="container flex flex-wrap items-center justify-center py-4 mx-auto space-x-4 space-y-4 md:justify-between">
        <p className="text-center text-sm md:text-base">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">GreenMart</span>. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-sm md:text-base">We Accept</p>
          <div className="flex space-x-3">
            <img
              src={process.env.PUBLIC_URL + "/img/payment-methods/discover.png"}
              alt="discover"
              className="h-6 md:h-8"
            />
            <img
              src={
                process.env.PUBLIC_URL + "/img/payment-methods/mastercard.png"
              }
              alt="mastercard"
              className="h-6 md:h-8"
            />
            <img
              src={process.env.PUBLIC_URL + "/img/payment-methods/paypal.png"}
              alt="paypal"
              className="h-6 md:h-8"
            />
            <img
              src={process.env.PUBLIC_URL + "/img/payment-methods/visa.png"}
              alt="visa"
              className="h-6 md:h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
