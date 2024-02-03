import { FiEdit, FiTrash2, FiPrinter, FiMail } from "react-icons/fi";
import Button from "../../../components/ui/Button";

const OrderDetailsPage: React.FC = () => {
  // Sample order data
  const order = {
    id: 123456,
    total: 245.99,
    status: "Delivered",
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "Anytown",
      country: "USA",
      postalCode: "12345",
    },
    items: [
      { id: 1, name: "Product A", quantity: 2, price: 49.99 },
      { id: 2, name: "Product B", quantity: 1, price: 99.99 },
      { id: 3, name: "Product C", quantity: 3, price: 29.99 },
    ],
  };

  return (
    <div className="container px-3 mx-auto my-8">
      {/* Order Summary */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Order Summary
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p>
              <span className="font-semibold">Order ID:</span> {order.id}
            </p>
            <p>
              <span className="font-semibold">Total:</span> ${order.total}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {order.status}
            </p>
          </div>
          <div className="space-x-2">
            <Button size="sm" variant="ghost">
              <FiEdit /> Edit Order
            </Button>
            <Button size="sm" variant="ghost">
              <FiTrash2 /> Cancel Order
            </Button>
          </div>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Shipping Details
        </h2>
        <div>
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {order.shippingAddress.name}
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {order.shippingAddress.address}
          </p>
          <p>
            <span className="font-semibold">City:</span>{" "}
            {order.shippingAddress.city}
          </p>
          <p>
            <span className="font-semibold">Country:</span>{" "}
            {order.shippingAddress.country}
          </p>
          <p>
            <span className="font-semibold">Postal Code:</span>{" "}
            {order.shippingAddress.postalCode}
          </p>
        </div>
      </div>

      {/* Item List */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Items</h2>
        <div>
          {order.items.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-2"
            >
              <div>
                <p>
                  <span className="font-semibold">{item.name}</span> - Quantity:{" "}
                  {item.quantity}
                </p>
              </div>
              <div>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end">
        <Button size="lg" variant="secondary" className="mr-4">
          <FiPrinter className="mr-2" />
          Print Invoice
        </Button>
        <Button size="lg" variant="secondary">
          <FiMail className="mr-2" />
          Resend Confirmation Email
        </Button>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
