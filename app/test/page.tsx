export default function TestPage() {
    return (
        <div
            className="min-h-screen bg-white text-[#1d1d1f] p-10 max-w-[980px] mx-auto"
        >
            <div className="mb-12 border-b pb-4">
                <p className="text-sm text-gray-400 mb-2">Class: .text-h1-apple</p>
                <h1 className="text-h1-apple my-4">
                    The Quick Brown Fox Jumps Over The Lazy Dog.
                </h1>
            </div>

            <div className="mb-12 border-b pb-4">
                <p className="text-sm text-gray-400 mb-2">Class: .text-h2-apple</p>
                <h2 className="text-h2-apple my-4">
                    A Modern & Clean Sans-Serif Typeface.
                </h2>
            </div>

            <div className="mb-12 border-b pb-4">
                <p className="text-sm text-gray-400 mb-2">Class: .text-p1-apple (Intro/Lead)</p>
                <p className="text-p1-apple my-4 text-[#1d1d1f]">
                    This is a standard paragraph of intro text (p1). It's designed to flow well and be highly readable at various sizes. The SF Pro font family is known for its neutral and versatile character.
                </p>
            </div>

            <div className="mb-12 border-b pb-4">
                <p className="text-sm text-gray-400 mb-2">Class: .text-p2-apple / .text-body-apple</p>
                <p className="text-body-apple my-4">
                    This is body text (p2/body). <strong>Bold text for emphasis</strong> and <em>italic text for subtle stress</em>.
                    Typical body copy for reading long form content, user interfaces, and description lists.
                </p>
                <ul className="text-body-apple list-disc pl-10 my-4 space-y-2">
                    <li><strong>UI Element 1:</strong> Dashboard</li>
                    <li><strong>UI Element 2:</strong> Settings</li>
                    <li><strong>UI Element 3:</strong> User Profile</li>
                </ul>
            </div>

            <div className="mb-12">
                <p className="text-sm text-gray-400 mb-2">Components</p>
                <button className="text-body-apple bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors">
                    Action Button
                </button>
                <a href="#" className="text-body-apple ml-6 text-[#06c] hover:underline">
                    Learn more &gt;
                </a>
            </div>
        </div>
    );
}
