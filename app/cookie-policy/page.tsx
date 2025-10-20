export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-[700] mb-4 text-gray-900 dark:text-gray-100">
          Cookie Notice
        </h1>
        
        <div className="space-y-8 text-foreground">
          <p className="text-lg leading-relaxed">
            This section is about what cookies are, how we use them and how you can manage them. Similar tracking technologies such as Pixels and Software Development Kits (SDKs) are also included under cookies.
          </p>

          <section>
            <h2 className="text-[20px] font-bold mb-4">1. What are cookies?</h2>
            <p className="leading-relaxed">
              A cookie is a small text file that is downloaded onto a computer or a smartphone when the user accesses a app or an app. It allows the app/app to recognise that user's device and store some information about the user's preferences or past actions.
            </p>
            <p className="leading-relaxed mt-4">
              Software Development Kits (SDKs) are embedded in mobile or other applications and devices for the purpose of extracting analytics, typically through Application Programming Interfaces (APIs) for example to improve the app or service, or for marketing or advertising purposes. We refer to SDKs as cookies in this notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How we use cookies</h2>
            <p className="leading-relaxed mb-4">
              We use cookies to store and manage information in respect of our app and push notifications. We use both first-party cookies and third-party cookies. First-party cookies are set and used by us to help us to improve your experience on our app. For example, we use information from these cookies to remember your preferences and settings such as log-in details, and to monitor how our app is being used. Third-party cookies are set by third parties when you visit a part of our app that makes use of third-party analytics, marketing automation or management tools, or includes content displayed from a third-party app (such as social media). The information from these cookies helps us with our analytics and marketing, and helps to make advertising more relevant to you, for example.
            </p>
            <p className="leading-relaxed mb-4">
              As described below, some cookies are essential for the app to work, and others are optional and require your consent. You can choose which optional cookies to enable or reject at any time by clicking by selecting 'manage cookies' in the privacy section of this app.
            </p>

            <div className="space-y-3 mt-6">
              <div>
                <strong className="font-semibold">Strictly necessary cookies:</strong> these are used to help make our app work efficiently.
              </div>
              <div>
                <strong className="font-semibold">Performance cookies:</strong> these are used to analyse the way our app works and how we can improve it.
              </div>
              <div>
                <strong className="font-semibold">Functional cookies:</strong> these help to enhance your experience by doing things like remembering products in your basket.
              </div>
              <div>
                <strong className="font-semibold">Targeting cookies:</strong> we use these to help us to show you relevant offers and advertising content, and to tailor messages we send you. They can also be used to share some information with third parties who we advertise with.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">3. What cookies do we use?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-gray">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Party</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">SDK/Cookie</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Combine</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Core Image</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Safari Services</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">StoreKit</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">SwiftUI</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">UIKit</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">WebKit</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Accelerate</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Accelerate (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Adyen3DS2</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">App Tracking Transparency</td><td className="border border-border px-4 py-2">Targeting/Advertising</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Apple CryptoKit</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Audio Toolbox</td><td className="border border-border px-4 py-2">Performance</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">AVFAudio</td><td className="border border-border px-4 py-2">Performance</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Background Tasks</td><td className="border border-border px-4 py-2">Performance</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">CFNetwork</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Microsoft Clarity</td><td className="border border-border px-4 py-2">Performance/Tracking</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Compression (libswift)</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Contacts</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Core Animation</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Core Animation (libswift)</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Foundation</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Foundation (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Graphics</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Graphics (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Image (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Location</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Location (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Motion</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Services</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core Telephony</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">CoreText</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Crashlytics</td><td className="border border-border px-4 py-2">Stability Tracking</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">DataDetection (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">DeviceCheck</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Dispatch (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">File Provider (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Firebase Performance</td><td className="border border-border px-4 py-2">Performance</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Firebase/Google Analytics</td><td className="border border-border px-4 py-2">Targeting/Reporting</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Foundation</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Foundation (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Hermes</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">ImageIO</td><td className="border border-border px-4 py-2">Performance</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">JavaScriptCore</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Local Authentication</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Metal (libswift)</td><td className="border border-border px-4 py-2">Performance</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">MetricKit</td><td className="border border-border px-4 py-2">Performance</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Mobile Core Services</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Network</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">NewRelic</td><td className="border border-border px-4 py-2">Performance/Stability Tracking</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Objective-C Runtime (libswift)</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">os (libswift)</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">OSLog (libswift)</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">OTPublishersHeadlessSDK-xcode11.4</td><td className="border border-border px-4 py-2">Targeting/Advertising/Consent Management</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">PassKit</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">PassKit (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Photos</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Security</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Spatial (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">System Configuration</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">UIKit (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">First Party</td><td className="border border-border px-4 py-2">Uniform Type Identifiers (libswift)</td><td className="border border-border px-4 py-2">Strictly Necessary</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">User Notifications</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">WebKit (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">XPC (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">_Concurrency (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Core (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">Darwin (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">libcompression</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">libicucore.A</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">libobjc.A</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">libsqlite3</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">libSystem.B</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">libz.1</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                  <tr><td className="border border-border px-4 py-2">Third Party</td><td className="border border-border px-4 py-2">simd (libswift)</td><td className="border border-border px-4 py-2">Functionality</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
