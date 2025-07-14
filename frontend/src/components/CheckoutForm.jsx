import React, { useState } from "react";

const CheckoutOverlay = ({ onClose }) => {
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed for:", customer);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white/50 backdrop-blur-[10px] flex justify-center items-center z-50">
      <div className="w-[700px] h-[454px] p-8 bg-gray-100 rounded-3xl flex flex-col justify-center items-center gap-7">
        <div className="text-center text-4xl font-extrabold">
          <span className="text-orange-500">Customer</span>
          <span className="text-black"> </span>
          <span className="text-amber-300">Info</span>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex gap-5">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-black text-sm font-normal">
                First Name
              </label>
              <input
                type="text"
                required
                className="h-10 p-3 bg-white rounded-xl outline-1 outline-zinc-400"
                placeholder="Your first name"
                value={customer.firstname}
                onChange={(e) =>
                  setCustomer({ ...customer, firstname: e.target.value })
                }
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-black text-sm font-normal">
                Last Name
              </label>
              <input
                type="text"
                required
                className="h-10 p-3 bg-white rounded-xl outline-1 outline-zinc-400"
                placeholder="Your last name"
                value={customer.lastname}
                onChange={(e) =>
                  setCustomer({ ...customer, lastname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-normal">Email</label>
            <input
              type="email"
              required
              className="h-10 p-3 bg-white rounded-xl outline-1 outline-zinc-400"
              placeholder="Your email"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-normal">
              Phone Number
            </label>
            <input
              type="text"
              required
              className="h-10 p-3 bg-white rounded-xl outline-1 outline-zinc-400"
              placeholder="Your phone number"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-56 px-6 py-3 bg-orange-500 rounded-xl text-white text-sm font-medium mt-4 self-center"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutOverlay;
