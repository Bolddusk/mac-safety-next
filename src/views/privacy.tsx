"use client";
import Footer from "@/layout/Footer";

export default function Privacy() {
  return (
    <div className="pt-16 min-h-screen bg-[#0D1117]">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#eba200] to-[#64FFDA] text-transparent bg-clip-text">
            Privacy Policy
          </span>
        </h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300">Effective date: January 1, 2025</p>

          <p className="text-gray-300">
            MAC Safety Inc. (&apos;MAC,&apos; &apos;we,&apos; &apos;us,&apos; or
            &apos;our&apos;) is committed to protecting the privacy and accuracy
            of any confidential information you provide, subject to applicable
            state, federal, and international laws. Other than as required by
            laws that guarantee public access to certain types of information or
            in response to subpoenas or other legal instruments, MAC does not
            actively share personal information. In particular, MAC does not
            redistribute or sell personal information collected on our web
            servers or via third-party web forms.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            1. Information Collected
          </h2>
          <p className="text-gray-300">
            MAC&apos;s servers collect the following information:
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Internet Protocol (IP) address of the web client or proxy</li>
            <li>Client TLS protocol and cipher</li>
            <li>Web pages requested</li>
            <li>Referring web page</li>
            <li>Client browser details</li>
            <li>Access date and time</li>
          </ul>
          <p className="text-gray-300">
            This data may be associated with individual user identities in the
            course of normal operations (for example, to troubleshoot technical
            issues or measure site activity).
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Cookies</h2>
          <p className="text-gray-300">
            Sensitive personal information is not stored within cookies used by
            macsafety.com. Cookies that are used on our site serve functional or
            analytical purposes to enhance user experience and site performance.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            3. Web Forms
          </h2>
          <p className="text-gray-300">
            MAC&apos;s servers may use third-party web forms for specific, clearly
            stated purposes (e.g., sharing materials requested by the user upon
            form submission). When submitting these forms over HTTPS, users may
            be asked to provide personal information, which can include but is
            not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Name</li>
            <li>Contact information</li>
            <li>Employment information</li>
            <li>Location</li>
          </ul>
          <p className="text-gray-300">
            Personal information from these web forms is used exclusively for
            the purpose for which it was collected (for instance, to contact you
            about requested materials or services) and is not sold to any third
            party.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            4. Use of Collected Information
          </h2>
          <p className="text-gray-300">
            MAC will only use personal information collected from this site for
            the purpose of communicating back to individuals who contact us via
            the site and for improving the content and functionality of our
            website. Specifically:
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>
              Communications: We may use your personal information to respond to
              inquiries or provide information about our services.
            </li>
            <li>
              Site Analytics and Profiling: We use IP address information and
              anonymized browser history to analyze site usage, identify trends,
              and improve our web presentation.
            </li>
            <li>
              Troubleshooting: IP addresses and system logs may be used to
              diagnose technical issues.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">
            5. Distribution of Collected Information
          </h2>
          <p className="text-gray-300">
            MAC will not disclose personal information collected about you to
            third parties without your consent, except in certain explicit
            circumstances where disclosure may be required by law (e.g., in
            response to a subpoena or legal process).
          </p>
          <p className="text-gray-300">
            Additionally, MAC does not sell personal information to any
            third-party organization.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Scope</h2>
          <p className="text-gray-300">
            This Privacy Policy applies to macsafety.com and any other MAC
            Safety Inc. sites that reference this policy. Any MAC Safety Inc.
            website not listed here or that references a separate privacy policy
            is governed by that separate privacy statement.
          </p>
          <p className="text-gray-300">
            While MAC exercises due diligence in selecting vendors and partners,
            we do not control and are not responsible for the data collection
            practices of third-party service providers (such as providers of
            third-party web forms). Users are encouraged to review the privacy
            policies and data handling practices of any third-party services
            they access through our website.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            7. Privacy Statement Revisions
          </h2>
          <p className="text-gray-300">
            MAC may change this Privacy Policy at any time and for any reason.
            We encourage you to review this policy regularly whenever you visit
            our website to stay informed of any updates or changes.
          </p>
          <p className="text-gray-300">
            If we make a significant change to this policy, we will post a
            notice on the homepage of our website for a period of time after the
            change is made.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            8. Responsibility for External Sites
          </h2>
          <p className="text-gray-300">
            This website may contain links to external websites. Some of these
            websites may be operated by third parties. These links are provided
            for your convenience. MAC does not review, control, or monitor the
            privacy practices of websites operated by others.
          </p>
          <p className="text-gray-300">
            MAC is not responsible for the performance, content, or
            data-handling practices of external websites. Whenever you leave
            this website, we recommend reviewing the privacy practices of the
            external site to determine its adequacy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
