import React from 'react'
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import usePageMeta from '../../hooks/usePageMeta';
import "./RefundPolicy.css";

const RefundPolicy = () => {
  usePageMeta({
              title:"Learn about Tech Zenon Refund Policy",
              description: "Explore Tech Zenon's Refund Policy—our promise of customer satisfaction with easy returns within 30 days. Shop confidently with our support."
            });
  return (
    <>
    <InnerBanner/>
   <div className="paragraph-section">
        <section>
          <p>
            Thank you for choosing Tech Zenon’s software products and services.We are proud to offer a wide range of solutions including Web Development, SEO Optimization, Digital Marketing, E-commerce Solutions, Mobile App Development, UI/UX Design, and Cloud Services to help grow your business and achieve your digital goals. Our dedicated team ensures quality, innovation, and customer satisfaction in every project.
            We are committed to delivering the best user experience and customer
            satisfaction. However, we understand there may be circumstances
            where you need to cancel a purchase or request a refund. This Refund
            and Cancellation Policy explains the guidelines and steps for such
            situations.
          </p>
        </section>

        <section>
          <h2>Cancellation Policy</h2>
          <h3>1.1 Subscription-Based Products/Services</h3>
          <p>
            For subscription-based products or services, you can cancel your
            subscription at any time. Upon cancellation, you will continue to
            have access to the product or service until the end of the current
            billing cycle. No further charges will apply. To cancel your
            subscription, please use your account settings or contact Tech
            Zenon’s customer support team.
          </p>

          <h3>1.2 Perpetual License Products</h3>
          <p>
            Perpetual license products are one-time purchases with no expiration
            date. Cancellation is not applicable to perpetual licenses since
            they are not tied to a subscription model. However, you may be
            eligible for a refund under the terms in Section 2.
          </p>
        </section>

        <section>
          <h2>Refund Policy</h2>
          <h3>2.1 Eligibility for Refund</h3>
          <p>
            Tech Zenon offers refunds within a specified period for the
            following cases:
          </p>
          <ul>
            <li>
              <strong>a) Technical Issues:</strong> If you experience significant
              technical issues or compatibility problems with our software that
              prevent proper functioning, and our support team is unable to
              resolve the issue within a reasonable time.
            </li>
            <li>
              <strong>b) Dissatisfaction:</strong> If you are dissatisfied with
              the software’s features or performance and have shared your
              feedback with our support team for review.
            </li>
            <li>
              <strong>c) Unauthorized Charges:</strong> If you notice unauthorized
              charges on your payment method resulting from a purchase made via
              Tech Zenon’s official website.
            </li>
          </ul>

          <h3>2.2 Refund Process</h3>
          <p>To request a refund from Tech Zenon, please follow these steps:</p>
          <ul>
            <li>
              <strong>a) Contact Customer Support:</strong> Submit a refund
              request to Tech Zenon’s support team, including your order number,
              purchase date, and reason for the request.
            </li>
            <li>
              <strong>b) Evaluation:</strong> Our team will assess your request
              based on the eligibility criteria in Section 2.1.
            </li>
            <li>
              <strong>c) Refund Decision:</strong> If eligible, we will process
              your refund within 15 business days via the original payment
              method. Your bank or payment provider may take additional time to
              reflect the amount in your account.
            </li>
            <li>
              <strong>d) Software Deactivation:</strong> Upon refund approval,
              you must uninstall and deactivate the software. Continued use
              after a refund may lead to legal action.
            </li>
          </ul>
        </section>

        <section>
          <h2>Exclusions</h2>
          <p>
            The following situations are not covered under Tech Zenon’s refund
            policy:
          </p>
          <ul>
            <li>
              <strong>a) Change of Mind:</strong> If you decide you no longer
              want to use our products or services, but they are functioning as
              intended.
            </li>
            <li>
              <strong>b) Third-Party Products/Services:</strong> Refunds are not
              available for products or services from third-party vendors, even
              if purchased via Tech Zenon. Please refer to the vendor’s own
              policy.
            </li>
          </ul>
        </section>

        <section>
          <h2>Policy Updates</h2>
          <p>
            Tech Zenon may update this Refund and Cancellation Policy without
            prior notice. The latest version will always be available on our
            website, and changes take effect immediately upon posting.
          </p>
          <p>
            This policy applies only to purchases made directly from Tech Zenon.
            If you purchased through an authorized reseller or distributor,
            please refer to their respective refund and cancellation policies.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions or concerns about this policy, please contact
            Tech Zenon’s customer support team.
          </p>
        </section>
      </div>
    </>
  )
}

export default RefundPolicy