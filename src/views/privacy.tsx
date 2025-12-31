"use client";

import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] font-alliance">
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm uppercase tracking-wider text-[#eba200] font-alliance">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 font-alliance">
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-[#16171a] border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-8">
            <p className="text-[#eba200] font-alliance">
              Effective date: January 1, 2025
            </p>

            <p className="text-gray-400 font-alliance leading-relaxed">
              MAC Safety Inc. (&apos;MAC,&apos; &apos;we,&apos; &apos;us,&apos; or &apos;our&apos;) is committed to
              protecting the privacy and accuracy of any confidential
              information you provide, subject to applicable state, federal, and
              international laws. Other than as required by laws that guarantee
              public access to certain types of information or in response to
              subpoenas or other legal instruments, MAC does not actively share
              personal information. In particular, MAC does not redistribute or
              sell personal information collected on our web servers or via
              third-party web forms.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 font-alliance">
                1. Information Collected
              </h2>
              <p className="text-gray-400 font-alliance mb-4">
                MAC&apos;s servers collect the following information:
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2 font-alliance">
                <li>
                  Internet Protocol (IP) address of the web client or proxy
                </li>
                <li>Client TLS protocol and cipher</li>
                <li>Web pages requested</li>
                <li>Referring web page</li>
                <li>Client browser details</li>
                <li>Access date and time</li>
              </ul>
              <p className="text-gray-400 font-alliance mt-4">
                This data may be associated with individual user identities in
                the course of normal operations (for example, to troubleshoot
                technical issues or measure site activity).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 font-alliance">
                2. Cookies
              </h2>
              <p className="text-gray-400 font-alliance">
                Sensitive personal information is not stored within cookies used
                by macsafety.com. Cookies that are used on our site serve
                functional or analytical purposes to enhance user experience and
                site performance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 font-alliance">
                3. Web Forms
              </h2>
              <p className="text-gray-400 font-alliance mb-4">
                MAC&apos;s servers may use third-party web forms for specific,
                clearly stated purposes (e.g., sharing materials requested by
                the user upon form submission). When submitting these forms over
                HTTPS, users may be asked to provide personal information, which
                can include but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2 font-alliance">
                <li>Name</li>
                <li>Contact information</li>
                <li>Employment information</li>
                <li>Location</li>
              </ul>
              <p className="text-gray-400 font-alliance mt-4">
                Personal information from these web forms is used exclusively
                for the purpose for which it was collected (for instance, to
                contact you about requested materials or services) and is not
                sold to any third party.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 font-alliance">
                4. Use of Collected Information
              </h2>
              <p className="text-gray-400 font-alliance mb-4">
                MAC will only use personal information collected from this site
                for the purpose of communicating back to individuals who contact
                us via the site and for improving the content and functionality
                of our website. Specifically:
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2 font-alliance">
                <li>
                  Communications: We may use your personal information to
                  respond to inquiries or provide information about our
                  services.
                </li>
                <li>
                  Site Analytics and Profiling: We use IP address information
                  and anonymized browser history to analyze site usage, identify
                  trends, and improve our web presentation.
                </li>
                <li>
                  Troubleshooting: IP addresses and system logs may be used to
                  diagnose technical issues.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 font-alliance">
                5. Distribution of Collected Information
              </h2>
              <p className="text-gray-400 font-alliance mb-4">
                MAC will not disclose personal information collected about you
                to third parties without your consent, except in certain
                explicit circumstances where disclosure may be required by law
                (e.g., in response to a subpoena or legal process).
              </p>
              <p className="text-gray-400 font-alliance">
                Additionally, MAC does not sell personal information to any
                third-party organization.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 font-alliance">
                6. Scope
              </h2>
              <p className="text-gray-400 font-alliance mb-4">
                This Privacy Policy applies to macsafety.com and any other MAC
                Safety Inc. sites that reference this policy. Any MAC Safety
                Inc. website not listed here or that references a separate
                privacy policy is governed by that separate privacy statement.
              </p>
              <p className="text-gray-400 font-alliance">
                While MAC exercises due diligence in selecting vendors and
                partners, we do not control and are not responsible for the data
                collection practices of third-party service providers (such as
                providers of third-party web forms). Users are encouraged to
                review the privacy policies and data handling practices of any
                third-party services they access through our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 font-alliance">
                7. Privacy Statement Revisions
              </h2>
              <p className="text-gray-400 font-alliance mb-4">
                MAC may change this Privacy Policy at any time and for any
                reason. We encourage you to review this policy regularly
                whenever you visit our website to stay informed of any updates
                or changes.
              </p>
              <p className="text-gray-400 font-alliance">
                If we make a significant change to this policy, we will post a
                notice on the homepage of our website for a period of time after
                the change is made.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 font-alliance">
                8. Responsibility for External Sites
              </h2>
              <p className="text-gray-400 font-alliance mb-4">
                This website may contain links to external websites. Some of
                these websites may be operated by third parties. These links are
                provided for your convenience. MAC does not review, control, or
                monitor the privacy practices of websites operated by others.
              </p>
              <p className="text-gray-400 font-alliance">
                MAC is not responsible for the performance, content, or
                data-handling practices of external websites. Whenever you leave
                this website, we recommend reviewing the privacy practices of
                the external site to determine its adequacy.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
