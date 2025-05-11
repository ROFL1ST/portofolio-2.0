import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

export default function Services() {
  return (
    <section
      className="bg-gradient-to-r from-yellow-100 to-yellow-400 dark:bg-gradient-to-r dark:from-yellow-800 dark:to-yellow-600 py-20"
      style={{
        borderBottomLeftRadius: "3rem", // Add rounded corners for bottom left
        borderBottomRightRadius: "3rem", // Add rounded corners for bottom right
        marginTop: "-2rem", // Negative margin to align with the previous section
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-[#E5E5E5]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Web Development */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <CodeBracketIcon className="h-16 w-16 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We create responsive, dynamic websites that provide an outstanding
              user experience. Our web development services include custom
              designs, e-commerce solutions, and CMS integration.
            </p>
          </div>

          {/* Android Development */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <DevicePhoneMobileIcon className="h-16 w-16 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Android Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We develop robust and user-friendly Android apps tailored to your
              business needs. Our apps are designed for performance and user
              engagement.
            </p>
          </div>

          {/* Backend Development */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <ServerIcon className="h-16 w-16 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Backend Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We offer backend development services ensuring seamless
              integration with your web and mobile applications, boosting
              functionality and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
