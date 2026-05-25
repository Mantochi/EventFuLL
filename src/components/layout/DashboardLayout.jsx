export default function DashboardLayout() {
  return (
    <div className="flex-1 p-8">
      <h1 className="text-4xl text-gray-500 font-bold mb-8">
        Hi-hello, Tochi 👋
      </h1>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">
            Start from scratch
          </h3>
          <p className="text-gray-500 mb-4">
            Add all your event details and create new tickets.
          </p>
          <button className="btn-primary">
            Create event
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">
            Create my event faster with AI
          </h3>
          <p className="text-gray-500 mb-4">
            Answer a few questions to auto-generate your event.
          </p>
          <button className="btn-outline">
            Create with AI
          </button>
        </div>
      </div>

      {/* Organizer profile card */}
      <div className="bg-white rounded-xl p-6 shadow max-w-md">
        <h4 className="font-semibold mb-2">
          Set up your organizer profile
        </h4>
        <p className="text-sm text-gray-500 mb-3">
          A complete profile increases discovery and trust.
        </p>
        <button className="text-purple-600 font-medium">
          Set up your profile →
        </button>
      </div>
    </div>
  );
}
