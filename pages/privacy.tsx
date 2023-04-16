import Layout from './components/Layout'

export default function Pricing() {
  return (
    <Layout
      title='Privacy Policy'
      description='Description'
      keywords='Keywords'
    >
      <section className="main-section mb-10">
        <h1 className="text-4xl font-bold mb-5">Privacy Policy</h1>
        <p className="text-lg">
          This Privacy Policy describes the information we collect, how that information may be used, with whom it
          may be shared, and your choices about such uses and disclosures. We encourage you to read this Privacy
          Policy carefully when using our website or services or transacting business with us. By using our
          website, you are accepting the practices described in this Privacy Policy.
        </p>
        <p className="text-lg">
          If you have any questions about our privacy practices, please refer to the end of this Privacy Policy
          for information on how to contact us.
        </p>
        <h2 className="text-3xl font-bold mb-5">Information We Collect</h2>
        <p className="text-lg">
          We collect information from you in a variety of ways when you use our website.
        </p>
        <h2 className="text-3xl font-bold mb-5">How We Use Your Information</h2>
        <p className="text-lg">
          We use information that we collect about you or that you provide to us, including any personal
          information:
        </p>
        <ul>
          <li>To present our website and its contents to you.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To fulfill any other purpose for which you provide it.</li>
          <li>To provide you with notices about your account/subscription, including expiration and renewal
            notices.</li>
          <li>To carry out our obligations and enforce our rights arising from any contracts entered into between
            you and us, including for billing and collection.</li>
          <li>To notify you about changes to our website or any products or services we offer or provide though
            it.</li>
          <li>To allow you to participate in interactive features on our website.</li>
          <li>In any other way we may describe when you provide the information.</li>
          <li>For any other purpose with your consent.</li>
        </ul>
        <h2 className="text-3xl font-bold mb-5">Disclosure of Your Information</h2>
        <p className="text-lg">
          We may disclose aggregated information about our users, and information that does not identify any
          individual, without restriction.
        </p>
        <p className="text-lg">
          We may disclose personal information that we collect or you provide as described in this privacy policy:
        </p>
        <ul>
          <li>To our subsidiaries and affiliates.</li>
          <li>To contractors, service providers, and other third parties we use to support our business.</li>
          <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
            dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or
            as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us
            about our website users is among the assets transferred.</li>
          <li>To fulfill the purpose for which you provide it.</li>
          <li>For any other purpose disclosed by us when you provide the information.</li>
          <li>With your consent.</li>
        </ul>
        <h2 className="text-3xl font-bold mb-5">Data Retention</h2>
        <p className="text-lg">
          We will retain your information for as long as your account is active or as needed to provide you
          services. We will retain and use your information as necessary to comply with our legal obligations,
          resolve disputes, and enforce our agreements.
        </p>
        <h2 className="text-3xl font-bold mb-5">Changes to Our Privacy Policy</h2>
        <p className="text-lg">
          It is our policy to post any changes we make to our privacy policy on this page. If we make material
          changes to how we treat our users' personal information, we will notify you by email to the email
          address specified in your account and/or through a notice on the website home page. The date the privacy
          policy was last revised is identified at the top of the page. You are responsible for ensuring we have
          an up-to-date active and deliverable email address for you, and for periodically visiting our website
          and this privacy policy to check for any changes.
        </p>
        <h2 className="text-3xl font-bold mb-5">Contact Information</h2>
        <p className="text-lg">
          To ask questions or comment about this privacy policy and our privacy practices, contact us at:
        </p>
        <p className="text-lg">
          Your Company<br />
          Address Line 1<br />
          Address Line 2<br />
          info@example.com
        </p>
      </section>
    </Layout>
  )
}
