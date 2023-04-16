import Layout from './components/Layout'

export default function Pricing() {
  return (
    <Layout
      title='Contact'
      description='Description'
      keywords='Keywords'
    >
      <section className="intro-section mb-10">
        <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
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

      <section className="contact-us-section">
        <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
        <form action="/contact" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input type="text" id="name" name="name"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" name="email"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message:</label>
            <textarea id="message" name="message" rows={4}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            </textarea>
          </div>
          <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue -700">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  )
}
