import React from 'react';

function Prices() {
  return (
    <section className='bg-gray-100 py-16'>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center mb-12">
        <h2 className="text-6xl font-bold md:text-7xl text-black text-center mb-6">Our <span className="text-[#73C2F4] italic">Affordable </span>Prices</h2>
          <p className="text-2xl text-black text-center"> We have the best hair braiding prices in Providence!</p>
        </div>

        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center gap-8">
          {/* Hair Styles Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-2xl">
            <div className="bg-[#2C1755] py-4 text-center text-white font-semibold text-2xl">Hair Braiding</div>
            <table className="w-full table-auto text-lg">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Box Braids</td>
                  <td className="py-4 px-6 text-right text-gray-700">$130-$195</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Boho Braids</td>
                  <td className="py-4 px-6 text-right text-gray-700">$75-$250</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Cornrows</td>
                  <td className="py-4 px-6 text-right text-gray-700">$35-$50</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Mens Braids</td>
                  <td className="py-4 px-6 text-right text-gray-700">$35-$85</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Kids Braids</td>
                  <td className="py-4 px-6 text-right text-gray-700">$35-$65</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Add-On Services Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-2xl">
            <div className="bg-[#2C1755] py-4 text-center text-white font-semibold text-2xl">Other Hair Styles</div>
            <table className="w-full table-auto text-lg">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Sew-In Weave</td>
                  <td className="py-4 px-6 text-right text-gray-700">$100-$250</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Passion Twist</td>
                  <td className="py-4 px-6 text-right text-gray-700">$145-$185</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Mini Twist</td>
                  <td className="py-4 px-6 text-right text-gray-700">$85-$145</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Kids Twist</td>
                  <td className="py-4 px-6 text-right text-gray-700">$65-$100</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-left font-medium text-gray-700">Women Touch And Leave</td>
                  <td className="py-4 px-6 text-right text-gray-700">$475</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;