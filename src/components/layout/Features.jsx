import {
  ShieldCheck,
  Ticket,
  Headphones,
  RotateCcw,
} from "lucide-react";


export default function Features() {

    return (
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Secure Payments",
              desc: "Your data is safe with our secure checkout",
            },
            {
              icon: Ticket,
              title: "Instant Tickets",
              desc: "Get your tickets instantly on your mobile device",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "We’re here to help anytime you need us",
            },
            {
              icon: RotateCcw,
              title: "Easy Refunds",
              desc: "Hassle-free refunds up to 7 days before event",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center">
                  <Icon size={28} className="text-purple-400" />
                </div>

                <h4 className="text-2xl font-semibold mt-6 text-black">
                  {item.title}
                </h4>

                <p className="text-black/60 leading-8 mt-4">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );}