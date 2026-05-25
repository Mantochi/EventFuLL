 
export default function LocationSelector() {
 return (
 
      
      <section className="relative z-10 mt-10">
         
        <div className="grid lg:grid-cols-4 gap-2 px-6 lg:px-10">

          {/* Left Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 h-[450px] w-full lg:col-span-2 ">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0" />

            <div className="absolute top-0 left-0 p-6 z-10 text-black">
              <h4 className="text-2xl font-semibold">
                Explore events near you
              </h4>
              </div>

              <div className="absolute top-0 right-0 p-6 z-10 text-black">

              <button className="text-purple-500 text-base font-bold">
                View map
              </button>
            </div>

            </div>

          
          
           {/* Organizers */}

          <div className="relative bg-white/5 border border-black/30 rounded-3xl p-5 lg:col-span-2">
            
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-semibold text-black">
                Top Organizers
              </h4>

              <button className="text-purple-400 text-lg">
                View all
              </button>
            </div>

            <div className="mt-4 space-y-1">
              {[
                "Live Nation",
                "Tech Events NYC",
                "Creative Mornings",
                "Run Collective",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500" />

                    <div className='text-left'>
                      <h5 className=" text-xl text-black">{item}</h5>

                      <p className="text-black/50 text-sm">
                        12.4K followers
                      </p>
                    </div>
                  </div>

                  <button className="h-10 px-5 rounded-full border border-purple-500/40 text-purple-300 text-sm">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 ) };