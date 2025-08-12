import React from 'react'
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import usePageMeta from '../../hooks/usePageMeta';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  usePageMeta({
                title:"Privacy Policy at Tech Zenon",
                description: "Tech Zenon follows a transparent privacy policy. Visit our website for more detail information about our non-disclosure agreement rules."
              });
  return (
    <>
    <InnerBanner/>
    

      <div className='paragraph-section'>
        <section >
          <h6>Last Updated Policy, 12 August 2025</h6>
          <p>This Privacy Policy explains how Tech Zenon handles personal information that we collect online, through our websites, web applications, and other services, as well as through our offline interactions with you.</p>
          <p>This Privacy Policy does not apply to information collected from residents of countries other than India or to third-party websites to which Tech Zenon may link. Your use of Tech Zenon’s services, which link to this Privacy Policy, is subject to this Privacy Policy and our Terms &amp; Conditions of Use.</p>
          <p>This privacy statement applies when you use our products or engage with our website, applications, and related online and offline services (collectively, the "Services"). It also outlines your choices regarding how we use your personal information, such as how to access and update certain information or object to specific uses.</p>
        </section>

        <section>
          <h2>What Information We Collect</h2>
          <p>We collect certain information to operate effectively and provide you with the best experience when using our website and services. This includes information you voluntarily provide (for example, when you sign up, subscribe to our newsletter, or contact us for support) and information we collect automatically when you interact with our Services.</p>
          <ul>
            <li><strong>Personal information:</strong> username, password, email address, name, IP address, and profile picture.</li>
            <li><strong>Non-personal / aggregated data:</strong> anonymized or aggregated information that cannot reasonably identify an individual, used for analytics and to improve the Services.</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Create and manage your account.</li>
            <li>Provide access to paid subscriptions or services you request.</li>
            <li>Identify you on our website and communicate via email.</li>
            <li>Respond to customer support inquiries.</li>
            <li>Conduct research and improve our services, with your consent where required.</li>
          </ul>
          <p>We may also personalize our content and marketing to you. You may update your preferences or opt out at any time.</p>
        </section>

        <section>
          <h2>Advertising Partners</h2>
          <p>We do not share your login credentials or sensitive personal data for third-party advertising. However, we may work with trusted advertising partners to promote Tech Zenon’s own services, including personalized marketing within our services or via third-party platforms.</p>
        </section>

        <section>
          <h2>For Security Purposes</h2>
          <p>If you are part of a Tech Zenon client team or organization, we may share necessary account identifiers, usage data, and device information with authorized team administrators for operational security.</p>
        </section>

        <section>
          <h2>How We Share Information</h2>
          <p><strong>With your consent:</strong> We will always inform you before sharing your information with third parties.</p>
          <p><strong>With service providers:</strong> We may share your information with vetted third-party vendors who provide services such as analytics, payment processing, customer support, or data hosting — bound by confidentiality agreements.</p>
          <p><strong>Social sharing:</strong> Our website may allow you to share certain actions or content via social media integrations, subject to your settings.</p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>We use industry-standard security measures to protect your data, including encryption (TLS/HTTPS), secure hashing for sensitive files, and restricted data access. While we take strong precautions, no method of online transmission is 100% secure, and we cannot guarantee absolute protection.</p>
        </section>

        <section>
          <h2>Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and improve our services. You can manage or disable cookies in your browser settings, but this may limit your access to certain features.</p>
        </section>

        <section>
          <h2>Policy Updates</h2>
          <p>We may update this Privacy Policy from time to time. Any significant changes will be communicated on our website, and where legally required, we will also notify you via email.</p>
        </section>

      
      </div>
    

    </>
  )
}

export default PrivacyPolicy