export default function PrivacyPage() {
  return (
    <div className="pt-[100px] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Legal</p>
        <h1 className="font-display text-5xl text-cream italic mb-12">Privacy Policy</h1>

        <div className="space-y-8 text-cream/50 text-sm leading-relaxed">
          {[
            {
              title: "Information We Collect",
              body: "We collect information you provide directly, such as your name, email address, phone number, and delivery address when you place an order. We also collect usage data to improve your experience on our website.",
            },
            {
              title: "How We Use Your Information",
              body: "Your information is used to process orders, send delivery updates via WhatsApp, and occasionally inform you about new products or offers (only with your consent). We never sell your data to third parties.",
            },
            {
              title: "Data Security",
              body: "We take reasonable steps to protect your personal information. All payment transactions are processed securely. However, no internet transmission is 100% secure, so we cannot guarantee absolute security.",
            },
            {
              title: "Cookies",
              body: "Our website uses cookies to improve functionality and your browsing experience. You can control cookie preferences through your browser settings.",
            },
            {
              title: "Contact Us",
              body: "For any privacy-related queries, please contact us at hello@TAYBperfumes.com. We will respond within 5 business days.",
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-gold/10 pb-8">
              <h2 className="font-display text-2xl text-cream mb-3">{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
