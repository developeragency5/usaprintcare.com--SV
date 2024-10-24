import React from 'react';
import PreNavBar from './PreNavBar';
import Footer from './Footer';
import Navbar from './Navbar';

const ReturnRefundPolicy = () => {
    return (
       <>
        <PreNavBar/>
        <Navbar/>
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Return and Refund Policy</h1>
            <p className="text-sm text-gray-600 mb-4">Last updated: October 24, 2024</p>
            <p className="mb-4">Thank you for shopping at USA PRINT CARE.</p>
           
            <p className="mb-6">The following terms are applicable for any products that you purchased with us.</p>

            <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>
            <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
            <p className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold mb-2">Definitions</h3>
            <p className="mb-4">For the purposes of this Return and Refund Policy:</p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to USA PRINT CARE LLC, 1968 S Coast Hwy #3514 Laguna Beach, CA 92651.</li>
                <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
                <li><strong>Orders</strong> mean a request by you to purchase Goods from us.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Website</strong> refers to USA PRINT CARE, accessible from <a href="https://www.usaprintcare.com/" rel="external nofollow noopener" target="_blank" className="text-blue-600 underline">https://www.usaprintcare.com/</a>.</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Your Order Cancellation Rights</h2>
            <p className="mb-4">You are entitled to cancel your Order within 7 days without giving any reason for doing so.</p>
            <p className="mb-4">The deadline for cancelling an Order is 7 days from the date on which you received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
            <p className="mb-4">
                In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement. You can inform us of your decision by:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>By email: usaprintrepair.com</li>
                <li>By visiting this page on our website: <a href="https://www.usaprintcare.com/" rel="external nofollow noopener" target="_blank" className="text-blue-600 underline">https://www.usaprintcare.com/</a></li>
                <li>By phone number: 949 273 2422</li>
            </ul>
            <p className="mb-4">We will reimburse you no later than 14 days from the day on which we receive the returned Goods. We will use the same means of payment as you used for the Order, and you will not incur any fees for such reimbursement.</p>

            <h2 className="text-2xl font-semibold mb-4">Conditions for Returns</h2>
            <p className="mb-4">In order for the Goods to be eligible for a return, please make sure that:</p>
            <ul className="list-disc list-inside mb-4">
                <li>The Goods were purchased in the last 7 days</li>
                <li>The Goods are in the original packaging</li>
            </ul>
            <p className="mb-4">The following Goods cannot be returned:</p>
            <ul className="list-disc list-inside mb-4">
                <li>The supply of Goods made to your specifications or clearly personalized.</li>
                <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
            </ul>
            <p className="mb-4">We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
            <p className="mb-4">Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to you if it is not permitted by applicable law.</p>

            <h2 className="text-2xl font-semibold mb-4">Returning Goods</h2>
            <p className="mb-4">You are responsible for the cost and risk of returning the Goods to us. You should send the Goods to the following address:</p>
            <p className="mb-4">
                1968 S Coast Hwy #3514<br />
                Laguna Beach, CA 92651
            </p>
            <p className="mb-4">We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, we recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>

            <h2 className="text-2xl font-semibold mb-4">Gifts</h2>
            <p className="mb-4">If the Goods were marked as a gift when purchased and then shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to you.</p>
            <p className="mb-4">If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to you later, we will send the refund to the gift giver.</p>

            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-4">If you have any questions about our Returns and Refunds Policy, please contact us:</p>
            <ul className="list-disc list-inside mb-4">
                <li>By email: usaprintrepair.com</li>
                <li>By visiting this page on our website: <a href="https://www.usaprintcare.com/" rel="external nofollow noopener" target="_blank" className="text-blue-600 underline">https://www.usaprintcare.com/</a></li>
                <li>By phone number: 949 273 2422</li>
            </ul>
        </div>
        <Footer/>
       </>
    );
};

export default ReturnRefundPolicy;
