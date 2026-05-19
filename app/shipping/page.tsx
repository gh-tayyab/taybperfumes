export default function ShippingPage() {
  return (
    <div className="pt-[100px] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Policies</p>
        <h1 className="font-display text-5xl text-cream italic mb-12">Shipping & Delivery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { label: "Standard Delivery", value: "2–4 Working Days", note: "All major cities in Pakistan" },
            { label: "Shipping Fee", value: "Rs.200", note: "Free on orders above Rs.3,000" },
            { label: "Cash on Delivery", value: "Available", note: "All cities across Pakistan" },
            { label: "Dispatch Time", value: "1–2 Days", note: "Orders placed before 3pm" },
          ].map((item) => (
            <div key={item.label} className="border border-gold/10 p-6 hover:border-gold/30 transition-colors">
              <p className="text-xs tracking-widest uppercase text-gold mb-1">{item.label}</p>
              <p className="font-display text-2xl text-cream mb-1">{item.value}</p>
              <p className="text-cream/30 text-xs">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-cream/50 text-sm leading-relaxed">
          <div className="border-b border-gold/10 pb-6">
            <h2 className="font-display text-2xl text-cream mb-3">Delivery Process</h2>
            <p>Once you place your order, you&apos;ll receive a WhatsApp confirmation. Your order is then dispatched within 1–2 business days via our trusted courier partners. You&apos;ll receive a tracking number once your order is shipped.</p>
          </div>
          <div className="border-b border-gold/10 pb-6">
            <h2 className="font-display text-2xl text-cream mb-3">Delivery Areas</h2>
            <p>We deliver to all major cities and towns across Pakistan including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Hyderabad, and many more. If you&apos;re unsure about delivery to your area, contact us.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-cream mb-3">Failed Delivery</h2>
            <p>If delivery fails due to an incorrect address or unavailability, our courier will attempt redelivery. After 2 failed attempts, the order may be returned. Please ensure your contact details and address are accurate when placing your order.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
