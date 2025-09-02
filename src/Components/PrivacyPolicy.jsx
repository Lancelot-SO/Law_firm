/* eslint-disable no-unused-vars */
// src/components/PrivacyPolicy.jsx
import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const PrivacyPolicy = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 "
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Privacy Policy Content */}
                        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

                        <div className="space-y-4 text-gray-700">
                            <p>
                                <strong>Introduction</strong> <br />
                                Kwame Akuffo &amp; Co. Unlimited (“we,” “our,” or “us”) respects
                                your privacy and is committed to protecting your personal data.
                                This Privacy Policy explains how we collect, use, and safeguard
                                information you provide when using our website.
                            </p>

                            <p>
                                <strong>Information We Collect</strong> <br />
                                We may collect the following information when you interact with
                                our website:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    Personal information submitted via our contact forms (e.g.,
                                    name, email address, phone number).
                                </li>
                                <li>Information provided in relation to consultation requests.</li>
                                <li>
                                    Technical data such as IP address, browser type, and website
                                    usage patterns collected automatically.
                                </li>
                            </ul>

                            <p>
                                <strong>How We Use Your Information</strong> <br />
                                We use the information collected to:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Respond to enquiries and consultation requests.</li>
                                <li>Communicate with you about services you may request.</li>
                                <li>Improve our website and user experience.</li>
                                <li>Comply with legal and regulatory obligations.</li>
                            </ul>

                            <p>
                                <strong>Confidentiality and Legal Privilege</strong> <br />
                                Submitting information through this website does not create an
                                attorney–client relationship. Any information you send prior to
                                a formal engagement may not be treated as confidential or
                                legally privileged. Once an engagement is established, all
                                communications are treated with full confidentiality.
                            </p>

                            <p>
                                <strong>Data Sharing</strong> <br />
                                We do not sell or rent personal information to third parties.
                                Information may be shared only with:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Our internal staff for the purpose of handling your matter.</li>
                                <li>
                                    Third-party service providers assisting with website hosting
                                    or email delivery (subject to confidentiality obligations).
                                </li>
                                <li>
                                    Regulatory or legal authorities, if required by law.
                                </li>
                            </ul>

                            <p>
                                <strong>Data Retention</strong> <br />
                                We retain personal data only as long as necessary to fulfill the
                                purposes outlined in this policy, unless a longer retention
                                period is required by law.
                            </p>

                            <p>
                                <strong>Data Security</strong> <br />
                                We take appropriate technical and organizational measures to
                                safeguard personal information against unauthorized access,
                                alteration, or disclosure.
                            </p>

                            <p>
                                <strong>Your Rights</strong> <br />
                                Under Ghana’s Data Protection Act, you have the right to:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    Request access to the personal data we hold about you.
                                </li>
                                <li>
                                    Request correction of inaccurate or incomplete data.
                                </li>
                                <li>
                                    Request deletion of your personal data, subject to legal and
                                    contractual limitations.
                                </li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us using the details
                                below.
                            </p>

                            <p>
                                <strong>Third-Party Links</strong> <br />
                                Our website may contain links to external sites. We are not
                                responsible for the privacy practices of such third parties and
                                encourage you to review their policies.
                            </p>

                            <p>
                                <strong>Contact Us</strong> <br />
                                If you have questions about this Privacy Policy or how your data
                                is handled, please contact:
                            </p>
                            <address className="not-italic">
                                Kwame Akuffo &amp; Co. Unlimited <br />
                                Capital Place, 11 Patrice Lumumba Road <br />
                                Airport Residential Area, Accra, Ghana <br />
                                Tel: 0303966645 / 0244284702 <br />
                                Email:{" "}
                                <a
                                    href="mailto:kwame@kbakuffo.com"
                                    className="text-[#7E1835] hover:underline"
                                >
                                    kwame@kbakuffo.com
                                </a>
                            </address>

                            <p className="text-[#7E1835]">
                                <strong>Updates to this Policy</strong> <br />
                                We may update this Privacy Policy periodically. Any changes will
                                be posted on this page with the updated effective date.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

PrivacyPolicy.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default PrivacyPolicy;
