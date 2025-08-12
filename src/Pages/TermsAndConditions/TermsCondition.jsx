import React from 'react'
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import usePageMeta from '../../hooks/usePageMeta';
import './TermsCondition.css';

const TermsCondition = () => {
    usePageMeta({
            title:"Terms And Conditions at Tech Zenon",
            description: "Review our terms and conditions to understand and agree to the guidelines that apply when you hire our digital marketing services. Your consent is required."
          });
  return (
    <>
    <InnerBanner/>
    <div className="terms-container">
        <p>
          These Terms and Conditions (“Terms”) govern your access to and use of the services, 
          websites, and applications (“Services”) provided by Tech Zenon. By accessing or using our 
          Services, you agree to be bound by these Terms. If you do not agree, you must stop using 
          our Services immediately.
        </p>

        <h2>User Accounts</h2>
        <p>
          To access certain features, you may be required to create an account with accurate and 
          up-to-date information. You are responsible for maintaining the confidentiality of your 
          account credentials and for all activities that occur under your account.
        </p>

        <h2>Use of Our Services</h2>
        <p>
          You agree to use our Services only for lawful purposes and in accordance with these Terms. 
          You must not:
        </p>
        <ul>
          <li>Use the Services in a way that violates applicable laws or regulations.</li>
          <li>Attempt to gain unauthorized access to our systems or other users’ accounts.</li>
          <li>Upload malicious software, viruses, or harmful code.</li>
          <li>Misrepresent your identity or affiliation with any person or entity.</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content, designs, logos, graphics, and other materials available through our Services 
          are the property of Tech Zenon or its licensors. You may not reproduce, distribute, or 
          create derivative works from our content without prior written permission.
        </p>

        <h2>Payments & Refunds</h2>
        <p>
          Payments for our Services must be made in accordance with the agreed terms. Refund requests 
          will be evaluated on a case-by-case basis and must comply with our Refund Policy, which 
          allows refunds only for eligible claims made within 30 days of purchase.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website or Services may contain links to third-party websites. These links are provided 
          for convenience only, and Tech Zenon does not endorse or take responsibility for the content, 
          privacy practices, or policies of these external sites.
        </p>

        <h2>Prohibited Activities</h2>
        <p>
          You may not use our Services to:
        </p>
        <ul>
          <li>Engage in fraudulent, deceptive, or harmful activities.</li>
          <li>Send spam, unsolicited messages, or chain letters.</li>
          <li>Harvest or collect personal information without consent.</li>
          <li>Violate the rights of others, including intellectual property rights.</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          Tech Zenon shall not be liable for any indirect, incidental, special, or consequential 
          damages arising from your use of our Services. Our total liability for any claim shall not 
          exceed the amount you paid to us for the Service in question.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Tech Zenon, its employees, directors, and 
          affiliates from any claims, liabilities, damages, losses, and expenses arising out of your 
          violation of these Terms or misuse of our Services.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India. Any 
          disputes arising under these Terms shall be subject to the exclusive jurisdiction of the 
          courts located in Rajasthan, India.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Updated versions will be posted on 
          our website, and continued use of our Services after changes indicates your acceptance.
        </p>

        
      </div>
    </>
  )
}

export default TermsCondition