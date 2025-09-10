export default function ContactPage() {
  return (
    <main className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white font-vera-bold text-center">Contact Me</h1>
        
        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm mx-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-gray-600 dark:text-gray-400 font-vcr-mono">📧</span>
              <a 
                href="mailto:acj4308@gmail.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-vcr-mono"
              >
                acj4308@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-gray-600 dark:text-gray-400 font-vcr-mono">📱</span>
              <a 
                href="tel:+91 771885634" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-vcr-mono"
              >
                +91-7718815634
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
