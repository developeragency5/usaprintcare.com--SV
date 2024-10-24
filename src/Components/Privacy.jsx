import React from 'react';
import PreNavBar from './PreNavBar';
import Footer from './Footer';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
    return (
        <>
            <PreNavBar />
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-600 mb-4">Last updated: October 24, 2024</p>
                <p className="mb-4">
                    This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>
                <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
                <p className="mb-4">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
                </p>

                <h3 className="text-xl font-semibold mb-2">Definitions</h3>
                <p className="mb-4">For the purposes of this Privacy Policy:</p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Account:</strong> A unique account created for you to access our Service or parts of our Service.</li>
                    <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
                    <li><strong>Company:</strong> USA PRINT CARE LLC, 1968 S Coast Hwy #3514, Laguna Beach, CA 92651.</li>
                    <li><strong>Cookies:</strong> Small files placed on your device by a website, containing details of your browsing history.</li>
                    <li><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</li>
                    {/* Add other definitions as needed */}
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Collecting and Using Your Personal Data</h2>
                <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>
                <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
                <p className="mb-4">
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                    <li>Usage Data</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
                <p className="mb-4">
                    Usage Data is collected automatically when using the Service.
                </p>

                <h3 className="text-xl font-semibold mb-2">Tracking Technologies and Cookies</h3>
                <p className="mb-4">
                    We use Cookies and similar tracking technologies to track activity on our Service.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, you can contact us:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Email: <a href="mailto:usaprintcare@outlook.com" className="text-blue-600 underline">usaprintcare@outlook.com</a></li>
                    <li>Website: <a href="https://www.usaprintcare.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">usaprintcare.com</a></li>
                    <li>Phone: 949 273 2422</li>
                    <li>Address: 1968 S Coast Hwy #3514, Laguna Beach, CA 92651</li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
