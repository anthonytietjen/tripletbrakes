import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout
      title='Home'
      description='Description'
      keywords='Keywords'
    >
      <section className="intro-section mb-10">
        <h1 className="text-4xl font-bold mb-5">Welcome</h1>
        <p className="text-lg">This is an example of a simple webpage using Tailwind CSS. Explore the sections
          below to learn more.</p>
      </section>

      <section className="faq-section mb-10">
        <h2 className="text-3xl font-bold mb-5">Frequently Asked Questions</h2>
        <div>
          <button className="text-blue-600 py-4 px-6">What is html?</button>
          <p className="faq-content"></p>
        </div>
        <div>
          <button className="text-blue-600 py-4 px-6">What is Tailwind CSS?</button>
          <p className="faq-content"></p>
        </div>
      </section>
    </Layout>
  )
}
