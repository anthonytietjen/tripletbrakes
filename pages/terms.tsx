import Layout from './components/Layout'

export default function Pricing() {
  return (
    <Layout
      title='Terms of Use'
      description='Description'
      keywords='Keywords'
    >
      <section className="main-section mb-10">
        <h1 className="text-4xl font-bold mb-5">Terms of Use</h1>
        <p className="text-lg mb-5">
          These Terms of Use (the “Terms”) govern your access to and use of this website (the “Site”) and all
          content, services, and products available at or through the Site. The Site is owned and operated by
          [Your Company] (“[Your Company]”, “we”, “us”, or “our”). By accessing or using the Site, you agree to be
          bound by these Terms. If you do not agree to these Terms, you may not access or use the Site.
        </p>
        <p className="text-lg mb-5">
          We reserve the right to modify these Terms at any time in accordance with this provision. If we make
          changes to these Terms, we will post the revised Terms on the Site and update the “Last Updated” date at
          the top of these Terms. If you disagree with the revised Terms, you may terminate this agreement with
          immediate effect. We will notify you of any material revisions, for example via a notification on the
          Site home page. By continuing to access or use the Site after those revisions become effective, you
          agree to be bound by the revised Terms.
        </p>
        <p className="text-lg">
          You must be at least 18 years of age to access and use the Site. By accessing or using the Site, you
          represent and warrant that you are 18 or older.
        </p>
      </section>
    </Layout>
  )
}
