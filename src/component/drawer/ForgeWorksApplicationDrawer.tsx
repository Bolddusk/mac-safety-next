import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Send } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface ForgeWorksApplicationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgeWorksApplicationDrawer: React.FC<
  ForgeWorksApplicationDrawerProps
> = ({ isOpen, onClose }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({
    // Section 1: Organization Info
    fullName: "",
    jobTitle: "",
    companyName: "",
    workEmail: "",
    companyWebsite: "",

    // Section 2: Mission Profile
    industry: "",
    headcount: "",
    friction: "",
    problem: "",
    consequences: "",

    // Section 3: Data Posture
    collectsData: "",
    dataTypes: [] as string[],
    existingSystems: "",
    openToMAC: "",

    // Section 4: Deployment Fit
    timeline: "",
    decisionMaking: "",
    successDefinition: "",

    // Section 5: Confirmation
    fitReason: "",
    referralSource: "",
    termsAccepted: false,
  });

  const totalSections = 5;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleMultiSelectChange = (option: string) => {
    const newDataTypes = formData.dataTypes.includes(option)
      ? formData.dataTypes.filter((type) => type !== option)
      : [...formData.dataTypes, option];

    setFormData({
      ...formData,
      dataTypes: newDataTypes,
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextSection = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend

    console.log("Form submitted:", formData);

    try {
      const rest = await apiRequest("POST", "/api/forgework", formData);

      console.log({ rest });

      onClose();
    } catch (error) {
      console.log({ error });
    }

    // For now, we&apos;ll just close the drawer and display an alert
    // alert("Thank you for applying to ForgeWorks. We&apos;ll review your application and be in touch soon.");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-2/3 lg:w-1/2 bg-zinc-900 z-50 overflow-y-auto"
          >
            <div className="p-6 md:p-8 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-[#eba200]">Forge</span>
                  <span className="text-white">Works</span> Application
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">
                    Section {currentSection} of {totalSections}
                  </span>
                  <span className="text-sm text-[#eba200]">
                    {Math.round((currentSection / totalSections) * 100)}%
                    Complete
                  </span>
                </div>
                <div className="h-1 bg-zinc-800 rounded-full">
                  <div
                    className="h-1 bg-[#eba200] rounded-full transition-all duration-300"
                    style={{
                      width: `${(currentSection / totalSections) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
                {/* Section 1: Organization Info */}
                {currentSection === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-700 pb-2">
                      Organization Info
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="jobTitle"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="workEmail"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          name="workEmail"
                          value={formData.workEmail}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label
                          htmlFor="companyWebsite"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Company Website
                        </label>
                        <input
                          type="url"
                          id="companyWebsite"
                          name="companyWebsite"
                          value={formData.companyWebsite}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 2: Mission Profile */}
                {currentSection === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-700 pb-2">
                      Mission Profile
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Industry / Sector
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        >
                          <option value="" disabled>
                            Select an industry
                          </option>
                          <option value="Construction">Construction</option>
                          <option value="Energy">Energy</option>
                          <option value="Logistics">Logistics</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Defense">Defense</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="headcount"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Approximate Headcount
                        </label>
                        <select
                          id="headcount"
                          name="headcount"
                          value={formData.headcount}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        >
                          <option value="" disabled>
                            Select headcount range
                          </option>
                          <option value="<50">Less than 50</option>
                          <option value="50-250">50 - 250</option>
                          <option value="250-1000">250 - 1,000</option>
                          <option value="1000+">1,000+</option>
                        </select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label
                          htmlFor="friction"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Where is the friction you&apos;re seeing?
                        </label>
                        <textarea
                          id="friction"
                          name="friction"
                          value={formData.friction}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        ></textarea>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label
                          htmlFor="problem"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What are you trying to solve?
                        </label>
                        <textarea
                          id="problem"
                          name="problem"
                          value={formData.problem}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        ></textarea>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label
                          htmlFor="consequences"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What happens if it doesn&apos;t get solved? (Optional)
                        </label>
                        <textarea
                          id="consequences"
                          name="consequences"
                          value={formData.consequences}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 3: Data Posture */}
                {currentSection === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-700 pb-2">
                      Data Posture
                    </h3>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="block text-sm font-medium text-gray-300 mb-2">
                          Do you currently collect operational data?
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {["Yes", "Partially", "No"].map((option) => (
                            <label
                              key={option}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                type="radio"
                                className="hidden"
                                checked={formData.collectsData === option}
                                onChange={() =>
                                  handleRadioChange("collectsData", option)
                                }
                              />
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex justify-center items-center 
                                ${
                                  formData.collectsData === option
                                    ? "border-[#eba200] bg-[#eba200]/20"
                                    : "border-zinc-600"
                                }`}
                              >
                                {formData.collectsData === option && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-[#eba200]"></div>
                                )}
                              </div>
                              <span className="text-gray-300">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="block text-sm font-medium text-gray-300 mb-2">
                          If yes, what types?
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            "Workforce data",
                            "Schedule data",
                            "Quality control",
                            "Safety inspections",
                            "Fleet/Logistics",
                            "Other",
                          ].map((type) => (
                            <label
                              key={type}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="hidden"
                                checked={formData.dataTypes.includes(type)}
                                onChange={() => handleMultiSelectChange(type)}
                              />
                              <div
                                className={`w-5 h-5 rounded flex justify-center items-center 
                                ${
                                  formData.dataTypes.includes(type)
                                    ? "bg-[#eba200] border-[#eba200]"
                                    : "border border-zinc-600"
                                }`}
                              >
                                {formData.dataTypes.includes(type) && (
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 3L4.5 8.5L2 6"
                                      stroke="black"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </div>
                              <span className="text-gray-300">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="existingSystems"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Are systems in place already (e.g., EHS, ERP, QA
                          tools)?
                        </label>
                        <textarea
                          id="existingSystems"
                          name="existingSystems"
                          value={formData.existingSystems}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        ></textarea>
                      </div>

                      <div className="space-y-2">
                        <p className="block text-sm font-medium text-gray-300 mb-2">
                          Would you be open to MAC deploying forward teams to
                          acquire ground truth data?
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {["Yes", "No", "Unsure"].map((option) => (
                            <label
                              key={option}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                type="radio"
                                className="hidden"
                                checked={formData.openToMAC === option}
                                onChange={() =>
                                  handleRadioChange("openToMAC", option)
                                }
                              />
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex justify-center items-center 
                                ${
                                  formData.openToMAC === option
                                    ? "border-[#eba200] bg-[#eba200]/20"
                                    : "border-zinc-600"
                                }`}
                              >
                                {formData.openToMAC === option && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-[#eba200]"></div>
                                )}
                              </div>
                              <span className="text-gray-300">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 4: Deployment Fit */}
                {currentSection === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-700 pb-2">
                      Deployment Fit
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What timeline are you targeting?
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        >
                          <option value="" disabled>
                            Select timeline
                          </option>
                          <option value="ASAP">ASAP</option>
                          <option value="Q2">Q2</option>
                          <option value="Q3">Q3</option>
                          <option value="Q4">Q4</option>
                          <option value="2025+">2025+</option>
                        </select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label
                          htmlFor="decisionMaking"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What&apos;s your decision-making structure?
                        </label>
                        <textarea
                          id="decisionMaking"
                          name="decisionMaking"
                          value={formData.decisionMaking}
                          onChange={handleChange}
                          required
                          placeholder="e.g., Do you need board buy-in? Who signs off?"
                          rows={3}
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        ></textarea>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label
                          htmlFor="successDefinition"
                          className="block text-sm font-medium text-gray-300"
                        >
                          How will you define success?
                        </label>
                        <textarea
                          id="successDefinition"
                          name="successDefinition"
                          value={formData.successDefinition}
                          onChange={handleChange}
                          required
                          placeholder="e.g., measurable ROI, SIF reduction, efficiency gain, etc."
                          rows={3}
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 5: Confirmation */}
                {currentSection === 5 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-700 pb-2">
                      Confirmation
                    </h3>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="fitReason"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Why do you believe you&apos;re a fit for ForgeWorks?
                        </label>
                        <textarea
                          id="fitReason"
                          name="fitReason"
                          value={formData.fitReason}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        ></textarea>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="referralSource"
                          className="block text-sm font-medium text-gray-300"
                        >
                          How did you hear about us?
                        </label>
                        <select
                          id="referralSource"
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba200] focus:border-[#eba200]"
                        >
                          <option value="" disabled>
                            Select source
                          </option>
                          <option value="Referral">Referral</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Industry Event">Industry Event</option>
                          <option value="Existing Partner">
                            Existing Partner
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="py-4">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.termsAccepted}
                            onChange={(e) => handleCheckboxChange(e)}
                            name="termsAccepted"
                            className="hidden"
                          />
                          <div
                            className={`w-5 h-5 mt-0.5 rounded flex-shrink-0 flex justify-center items-center 
                            ${
                              formData.termsAccepted
                                ? "bg-[#eba200] border-[#eba200]"
                                : "border border-zinc-600"
                            }`}
                          >
                            {formData.termsAccepted && (
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="black"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-gray-300 text-sm">
                            I understand ForgeWorks is a selective deployment
                            program and this application does not guarantee
                            acceptance.
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              {/* Navigation Buttons */}
              <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between">
                {currentSection > 1 ? (
                  <button
                    type="button"
                    onClick={prevSection}
                    className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 mr-1 rotate-180" />
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}

                {currentSection < totalSections ? (
                  <button
                    type="button"
                    onClick={nextSection}
                    className="flex items-center bg-[#eba200] text-black font-medium px-6 py-2 rounded-md hover:bg-[#eba200]/90 transition-colors"
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!formData.termsAccepted}
                    className={`flex items-center font-medium px-6 py-2 rounded-md transition-colors ${
                      formData.termsAccepted
                        ? "bg-[#eba200] text-black hover:bg-[#eba200]/90"
                        : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                    }`}
                  >
                    Apply to ForgeWorks
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ForgeWorksApplicationDrawer;
